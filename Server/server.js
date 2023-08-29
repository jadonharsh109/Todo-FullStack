const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./Routers/crudRoute')
const port = 6000

app.use(bodyParser.json())

const DB = "mongodb://database:27017/test";
mongoose.connect(DB, {})
  .then(() => console.log("Connected to the DataBase 🧬"))
  .catch((err) => console.log(err));

app.use(morgan('dev'));

app.use('/api', router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
