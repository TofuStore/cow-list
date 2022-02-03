const express = require('express');
const path = require('path');
const db = require('../database');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

app.get('/api/cows', (req, res) => {
  db.getAll((err, results) => {
    res.send(results);
  })
})

app.post('/api/cows', (req, res) => {
  console.log(req);
  db.insert(req.body, (err, results) => {
    if(err) {
      return err;
    }
    console.log('added to server')
    res.end();
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
