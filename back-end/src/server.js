const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/', (req, res) => {
  return res.json('it is ok!');
});

app.listen(3333, () => {
  console.log('servidor run!');
});