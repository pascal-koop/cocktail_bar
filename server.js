import { createOrder, registerNewUser, userLogin, getOrderHistoryFromDb } from './backend/query.js';
import { PrismaClient } from '@prisma/client';
import { authorizeUser } from './backend/middleWare/users.js';
const prisma = new PrismaClient();
import express from 'express';

import { validateRegistrationInput } from './backend/middleWare/users.js';
// cors is a middleware to enable access shared resources
// and allows to relax the security applied to an API.
import cors from 'cors';
import bodyParser from 'body-parser';
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
    const cocktails = await prisma.cocktails.findMany();
    res.json(cocktails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/register', validateRegistrationInput, (req, res) => {
  const user = req.body;
  let data = registerNewUser(user);
  res.status(200).json(data);
});

app.post('/login', async (req, res) => {
  const user = req.body;
  try {
    let data = await userLogin(user);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
    throw err;
  }
});

app.post('/checkout', (req, res) => {
  let order = req.body.items;
  console.log(order);
  let userId = req.body.token.data.userId;

  // TODO Rückgabe erstellen
  createOrder(order, userId);
});

app.get('/userinfo', authorizeUser, async (req, res) => {
  try {
    let userData = req.userData;
    // TODO Überarbeiten
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/history', authorizeUser, async (req, res) => {
  try {
    let userData = req.userData;
    const orderHistory = await getOrderHistoryFromDb(userData.userId);

    res.json(orderHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.get('/secret-route', isLoggedIn, (req, res) => {
//   console.log(req.user);
//   res.json({ message: 'You are logged in' });
// });

const { PORT = 7000 } = process.env;
app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
