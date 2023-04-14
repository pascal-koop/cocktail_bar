import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// get config vars
dotenv.config();

function generateAccessToken(email) {
  return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if (!token) {
      res.status(200).json({ success: false, message: 'Error! Token was not provided.' });
    }
    //Decoding the token
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    res
      .status(200)
      .json({ success: true, data: { userId: decodedToken.userId, email: decodedToken.email, exp: decodedToken.exp } });
     console.log('Token decoded',decodedToken);
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: 'Not authorized' });
  }
};
const validateRegister = (req, res, next) => {
  // password min 8 chars
  if (!req.body.password || req.body.password.length < 8) {
    return res.status(400).send({
      msg: 'Please enter a password with min. 8 chars',
    });
  }
  // password (repeat) does not match
  if (!req.body.passwordRepeat || req.body.password != req.body.passwordRepeat) {
    return res.status(400).send({
      msg: 'Both passwords must match',
    });
  }
  next();
};

export { validateRegister, generateAccessToken, isLoggedIn };
