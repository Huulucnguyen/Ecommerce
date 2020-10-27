// setup
const express = require('express')
const app = express()

const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
var cors = require('cors')

const port = process.env.PORT || 9999

app.use(cors({
    origin : '*',
    methods :['GET', 'POST', 'PATCH', "DELETE", 'PUT']
}))
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true }, () =>
  console.log('Connected to DB')
);
app.use(cors())
app.use(bodyparser.json());
//routes
var routeProduct = require('./_routes/products.route')
var routeAccount = require('./_routes/accounts.route')
var routeProductTest = require('./_routes/productTest.route')

app.use(express.static(__dirname+'/_public'));

app.use('/products',routeProduct);

app.use('/accounts',routeAccount);

 app.use('/productTest',routeProductTest);

 app.use('/nam', function (req,res,next) {
   res.send()
 })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})