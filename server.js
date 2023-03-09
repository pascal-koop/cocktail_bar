import express from 'express';
// cors is a middleware to enable access shared resources
// and allows to relax the security applied to an API.
import cors from 'cors';
import fs from 'fs/promises';
import bodyParser from 'body-parser';
import { pool } from './database.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// verhindert den zugriff von URls die keinen zugriff auf den Server haben sollten
app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);

app.get('/cocktails', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM cocktails');
    res.json(data);
    //console.log(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/register', (req, res) => {
  let user = req.body;
  res.json(user);
});

app.post('/checkout', (req, res) => {
  let order = req.body;
  //res.json(order);
  const insertOrderID = 'INSERT INTO orders (user_id) VALUES (1)';
  const selectOrderId = 'SELECT order_id FROM orders ORDER BY order_id DESC LIMIT 1';
  const getCocktailPrice = 'SELECT cocktail_price FROM cocktails WHERE cocktail_id = ?';
  const insertLineItems =
    'INSERT INTO line_items (order_id, order_amount, cocktail_name, single_price) VALUES (?, ?, ?, ?)';
  const selectSumPrice =
    'SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ?';
  const updateSumPrice = 'UPDATE orders SET sum_price = ? WHERE order_id = ?';

  pool.query(insertOrderID, err => {
    if (err) console.log(err.message);
    pool.query(selectOrderId, (err, result) => {
      if (err) console.log(err.message);
      const order_id = result[0].order_id;
      for (const cocktail of order) {
        const { amount, cocktail_name, cocktail_id } = cocktail;
        pool.query(getCocktailPrice, [cocktail_id], (err, result) => {
          if (err) console.log(err.message);
          const cocktail_price = result[0].cocktail_price;
          pool.query(
            insertLineItems,
            [order_id, amount, cocktail_name, cocktail_price],
            (err, result) => {
              if (err) console.log(err.message);
              pool.query(selectSumPrice, [order_id], (err, result) => {
                if (err) console.log(err.message);
                let sum_price = result[0].sum_price;
                pool.query(updateSumPrice, [sum_price, order_id], (err, result) => {
                  if (err) console.log(err.message);
                });
              });
            }
          );
        });
      }
    });
  });
});

app.get('/userinfo', async (req, res) => {
  try {
    const userData = await pool.query(
      'SELECT first_name, last_name, phone, email FROM users WHERE user_id = 1'
    );
    res.json(userData);
    console.log(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/history', async (req, res) => {
  try {
    const orderHistory = await pool.query(
      'SELECT * FROM orders INNER JOIN line_items ON orders.order_id = line_items.order_id ORDER BY orders.order_id WHERE user_id = 1'
    );
    res.json(orderHistory);
    //  console.log(orderHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
