import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getCurrentUser } from '../query.js';
// get config vars
dotenv.config();

// gegb. request mit oder ohne Auth header
// wenn kein header dann fehler
// wenn header dann
//   auslesen des Tokens des Auth. headers
//   validierung des Tokens
//     wenn invalid dann fehler
//     wenn valid dann auslesen des Tokens(userId) danach einen query in die users Tabelle (user wird als currentUser im request objekt gespeichert)

async function authorizeUser (req, res, next){
  try {
    let token = null;
    let decodedToken = null;
    if (!req.headers) {
      res.status(401).send({ message: 'No header provided' });
    }
    if (req.headers) {
      if (!req.headers['authorization']) {
        return res.status(401).send({ message: 'No authorization provided' });
      }
      token = req.headers['authorization'].split(' ')[1];
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      
      // ! TODO rewrite the check for the token
      if (!decodedToken) {
        return res.status(401).send({ message: 'Not authorized' });
      }
      const userData = await getCurrentUser(decodedToken.userId);
      req.userData = userData;
     next();
    }
  } catch (err) {
    console.log(err);
    res.status(401).send({ message: 'Not authorized' });
  }
};
const validateRegistrationInput = (req, res, next) => {
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

export { validateRegistrationInput, authorizeUser };
