// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = 8002;

app.get('/', (req, res)=> {
    console.log(process.env.NAME);
    console.log(process.env.NODE);
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });