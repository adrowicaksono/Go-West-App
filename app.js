const express = require('express')
const app = express()
const index = require('./routes/index.js')
const vendor = require('./routes/vendor.js')
const customer = require('./routes/customer.js')
const bike = require('./routes/bike.js')
const terminal = require('./routes/terminal')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')

app.use('/', index)
app.use('/customer', customer)
app.use('/vendor', vendor)
app.use('/bike', bike)
app.use('/terminal', terminal)


app.listen(3000, function() {
    console.log('ONLINE')
})