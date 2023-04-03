import { createOrder, registerNewUser } from './query.js';
import express from 'express';
// cors is a middleware to enable access shared resources
// and allows to relax the security applied to an API.
import cors from 'cors';
import bodyParser from 'body-parser';
import { pool } from './database.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// verhindert den zugriff von URls, die keinen zugriff auf den Server haben sollten
app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
);

app.get('/cocktails', async (req, res) => {
  try {
    const [data] = await pool.query('SELECT * FROM cocktails');
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/register', (req, res) => {
  let user = req.body
  res.json(user);
  registerNewUser(user)
 
});

app.post('/checkout', (req, res) => {
  let order = req.body;
  createOrder(order);
});

app.get('/userinfo', async (req, res) => {
  try {
    const [userData] = await pool.query(
      'SELECT first_name, last_name, phone, email FROM users WHERE user_id = 1'
    );
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/history', async (req, res) => {
  try {
    const [orderHistory] = await pool.query(
      'SELECT * FROM orders INNER JOIN line_items ON orders.order_id = line_items.order_id WHERE user_id = 1 ORDER BY orders.order_id DESC, line_items.cocktail_name ASC'
    );
    res.json(orderHistory);
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
