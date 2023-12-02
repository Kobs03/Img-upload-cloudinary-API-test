const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

const PORT = 5000;

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (req, res) => {
    res.send('WELCOME TO HOME ROUTE!')
})

const api = require('./router/test')

app.use('/api', api)

app.listen(PORT, () => {
    console.log(`CONNECTED TO PORT ${PORT}`)
})