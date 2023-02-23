import express from 'express';
// cors is a middleware to enable access shared resources
import cors from 'cors';
import fs from 'fs/promises';
const app = express();

app.use(cors());
app.get('/cocktails', (req, res) => {
  fs.readFile('./src/CocktailMenu.json', 'utf-8')
    .then(data => {
      res.send(JSON.parse(data));
     
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
    
});

const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
