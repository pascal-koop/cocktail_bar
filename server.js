import express from 'express';
// cors is a middleware to enable access shared resources
// and allows to relax the security applied to an API. 
import cors from 'cors';
import fs from 'fs/promises';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// verhindert den zugriff von URls die keinen zugriff auf den Server haben sollten
app.use(cors({
  origin: ['http://localhost:5173']
}));
app.get('/cocktails', (req, res) => {
  fs.readFile('./src/CocktailMenu.json', 'utf-8')
    .then(data => {
      res.send(JSON.parse(data));
     
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
    
});

app.post('/register', (req, res) => {
  let user = req.body;
  res.json(user);
});

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
