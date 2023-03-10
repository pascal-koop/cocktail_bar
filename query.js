import { pool } from './database.js';

function checkout(order) {
  pool.getConnection((err, connection) => {
    connection.beginTransaction(function (err) {
      createOrder(connection, (orderId) => {
        addLineItems(connection,orderId, order, () => {
          updateSumPrice(connection, orderId, () => {
            connection.commit(function (err) {
              if (err) {
                return connection.rollback(function () {
                  throw err;
                });
              }
              connection.release();
              console.log('success!');
            });
          });
        });
      });
    });
  });
}

function createOrder(connection, callback) {
  const insertUserIntoOrders = 'INSERT INTO orders (user_id) VALUES (1)';
  connection.query(insertUserIntoOrders, (err, result) => {
    if (err) console.log(err.message);
    console.log('createOrder:', result);
    const orderId = result.insertId;
    callback(orderId);
  });
}

function addLineItems(connection, orderId, order, callback) {
  //const getCocktailPrice = 'SELECT cocktail_price FROM cocktails WHERE cocktail_id = ?';
  const getCocktailPrice = 'SELECT cocktail_price FROM cocktails WHERE cocktail_id IN (?)';
  const insertLineItems =
    'INSERT INTO line_items (order_id, order_amount, cocktail_name, single_price) VALUES ?'; 
    console.log('order');
    console.log(typeof order);
  let cocktailIds = order.map(cocktail => cocktail.cocktail_id);

  connection.query(getCocktailPrice, [cocktailIds], (err, result) => {
    console.log('RESULT:', result);
    console.log('error adlineitems:', err);
    let lineItems = order.map((cocktail, index) => {
      const { amount, cocktail_name, cocktail_id } = cocktail;
      const cocktailPrice = result[index].cocktail_price;
      return [orderId, amount, cocktail_name, cocktailPrice];
    });
    if (err) console.log(err.message);
    console.log('orderid:', orderId);
    connection.query(insertLineItems, [lineItems], (err, result) => {
      if (err) console.log('insertlinequery:', err.message);
      callback();
    });
  });
}

function updateSumPrice(connection, orderId, callback) {
  const selectSumPrice =
    'SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ?';
  const updateSumPrice =
    'UPDATE orders SET order_sum_price = (SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ?) WHERE order_id = ?';
    console.log('orderID', orderId);

  connection.query(updateSumPrice, [orderId, orderId], (err, result) => {
    if (err) console.log('errupdatesum:', err.message);
    callback(connection);
  });
}

export { createOrder, addLineItems, updateSumPrice, checkout };
