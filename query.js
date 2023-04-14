import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient();
import crypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { mdiColorHelper } from '@mdi/js';
async function createOrder(order) {
  try {
    // const insertUserIntoOrders = 'INSERT INTO orders (user_id) VALUES (1)';
    const resultHeader = await prisma.orders.create({
      data: {
        user_id: 45,
      },
    });

    const orderId = resultHeader['order_id'];
    let cocktailIds = order.map(cocktail => cocktail.cocktail_id);
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
      cocktail.cocktail_price = +cocktail.cocktail_price; // + converts string to integer (https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which)
    });
    let lineItems = [];
    order.map((cocktail, index) => {
      lineItems.push({
        order_id: orderId,
        order_amount: cocktail.amount,
        cocktail_name: cocktail.cocktail_name,
        single_price: getCocktailPrice[index].cocktail_price,
      });
    });

    await prisma.line_items.createMany({
      data: lineItems,
    });

    const selectCalculatedSumPrice =
      await prisma.$queryRaw`SELECT SUM(order_amount * single_price) AS sum_price FROM line_items WHERE order_id = ${orderId}`;

    await prisma.orders.update({
      where: {
        order_id: orderId,
      },
      data: {
        order_sum_price: selectCalculatedSumPrice[0].sum_price,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function registerNewUser(user, res, next) {
  let first_name = user.firstName;
  let last_name = user.lastName;
  let email = user.email;
  let phone = user.phone;
  let password = user.password;
  let userId;
  const saltRounds = 10;
  const salt = await crypt.genSalt(saltRounds);
  const hash = await crypt.hash(password, salt);
  password = hash;
  let token;
  try {
    await prisma.users.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
        credentials: {
          create: { password: password },
        },
      },
    });
    try {
      userId = await prisma.users.findUnique({
        where: {
          email: email,
        },
        select: {
          user_id: true,
        },
      });
      userId = userId.user_id;
      console.log('userId', userId);
      token = jwt.sign({ email: email, userId: userId }, process.env.TOKEN_SECRET, {
        expiresIn: '1h',
      });
    } catch (err) {
      const error = new Error('Signing up failed, please try again later.');
      return next(error);
    }
    return res.status(200).json({
      message: 'User created!',
      token: token,
      expiresIn: 3600,
      userId: userId,
    });
  } catch (err) {
    throw err;
  }
}

async function userLogin(user, res) {
  try {
    let response =
      await prisma.$queryRaw`SELECT * FROM users INNER JOIN credentials ON users.user_id = credentials.user_id WHERE email = ${user.email}`;

    let password = response[0]['password'];
    let userId = response[0]['user_id'];
    let email = response[0]['email'];

    crypt.compare(user.password, password, (err, result) => {
      if (!result) {
        return res.status(401).send({ message: 'Auth failed' });
      }
      updateLastLogin(userId);
      const token = jwt.sign({ email: email, userId: userId }, process.env.TOKEN_SECRET, {
        expiresIn: '1h',
      });
      console.log(token);
      return res.status(200).json({
        message: 'Auth successful',
        data: {
          token: token,
          expiresIn: 3600,
          userId: userId,
        },
      });
    });
  } catch (err) {
    throw err;
  }
}

async function updateLastLogin(userId) {
  await prisma.credentials.update({
    where: {
      user_id: userId,
    },
    data: {
      last_login_date: new Date(),
    },
  });
}

export { createOrder, registerNewUser, userLogin };
