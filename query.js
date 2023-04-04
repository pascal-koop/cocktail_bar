import { pool } from './database.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function createOrder(order) {
  try {
    // const insertUserIntoOrders = 'INSERT INTO orders (user_id) VALUES (1)';
    const resultHeader = await prisma.orders.create({
      data: {
        user_id: 1,
      },
    });

    const orderId = resultHeader['order_id'];
    let cocktailIds = order.map(cocktail => cocktail.cocktail_id);
    console.log('cocktailIds', cocktailIds);
    //const getCocktailPrice = 'SELECT cocktail_price FROM cocktails WHERE cocktail_id IN (?)';
    const getCocktailPrice = await prisma.cocktails.findMany({
      where: {
        cocktail_id: {
          in: cocktailIds,
        },
      },
      select: {
        cocktail_price: true,
      },
    });
    // map over cocktail price and parse it to integer
    getCocktailPrice.map(cocktail => {
      cocktail.cocktail_price = parseInt(cocktail.cocktail_price);
    });
    console.log('cocktailPrice', getCocktailPrice);
    let lineItems = [];
    order.map((cocktail, index) => {
      lineItems.push({
        order_id: orderId,
        order_amount: cocktail.amount,
        cocktail_name: cocktail.cocktail_name,
        single_price: getCocktailPrice[index].cocktail_price,
      }) 
    });

    console.log('lineItems', lineItems);

   await prisma.line_items.create({
      data: lineItems,
    });

    const selectSumPrice =
      'SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ?';
    const updateSumPrice =
      'UPDATE orders SET order_sum_price = (SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ?) WHERE order_id = ?';
  } catch (err) {
    throw err;
  }
}

async function registerNewUser(user, res) {
  let first_name = user.firstName;
  let last_name = user.lastName;
  let email = user.email;
  let phone = user.phone;

  try {
    const result = await prisma.users.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
      },
    });
    res.json(result);
  } catch (err) {
    throw err;
  } finally {
    return true;
  }
}

export { createOrder, registerNewUser };
