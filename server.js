import { createOrder, registerNewUser, userLogin } from './query.js';
import { PrismaClient } from '@prisma/client';
import { generateAccessToken, isLoggedIn } from './middleWare/users.js';
const prisma = new PrismaClient();
import express from 'express';
import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import uuid from 'uuid';
import { validateRegister } from './middleWare/users.js';
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

app.post('/register', validateRegister,  (req, res) => {
  const user = req.body;
  //const token = generateAccessToken(user.email);
  registerNewUser(user, res);
});

app.post('/login', (req, res) => {
  const user = req.body;
  console.log('user', user);
  userLogin(user, res);
  
});

app.post('/checkout', (req, res) => {
  let order = req.body;
  createOrder(order);
});

app.get('/userinfo', async (req, res) => {
  try {
    const userData = await prisma.$queryRaw`SELECT * FROM users WHERE user_id = 1`;
    
    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/history', async (req, res) => {
  try {
    const orderHistory = await prisma.$queryRaw`SELECT * FROM orders INNER JOIN line_items ON orders.order_id = line_items.order_id WHERE user_id = 1 ORDER BY orders.order_id DESC, line_items.cocktail_name ASC`;
    
    
    
    
    res.json(orderHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/secret-route', isLoggedIn, (req, res) => {
  console.log(req.user);
  const logged = isLoggedIn(); 
  console.log(logged);
  res.json({ message: 'You are logged in' });
});

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
