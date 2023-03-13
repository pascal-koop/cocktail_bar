import { pool } from './database.js';

async function createOrder(order) {
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    const insertUserIntoOrders = 'INSERT INTO orders (user_id) VALUES (1)';
    const [resultHeader] = await conn.query(insertUserIntoOrders);

    const orderId = resultHeader['insertId'];
    let cocktailIds = order.map(cocktail => cocktail.cocktail_id);

    const getCocktailPrice = 'SELECT cocktail_price FROM cocktails WHERE cocktail_id IN (?)';
    await conn.query(getCocktailPrice, [cocktailIds]);
    let lineItems = order.map((cocktail, index) => {
      const { amount, cocktail_name, cocktail_price } = cocktail;
      return [orderId, amount, cocktail_name, cocktail_price];
    });
    const insertLineItems =
      'INSERT INTO line_items (order_id, order_amount, cocktail_name, single_price) VALUES ?';
    conn.query(insertLineItems, [lineItems]);

    const selectSumPrice =
      'SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ?';
    const updateSumPrice =
      'UPDATE orders SET order_sum_price = (SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ?) WHERE order_id = ?';

    await conn.query(selectSumPrice, [orderId]);
    await conn.query(updateSumPrice, [orderId, orderId]);

    await conn.commit();
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

export { createOrder };
