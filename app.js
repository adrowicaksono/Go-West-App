const PORT = 3000
const express = require('express')
const app = express()
const index = require('./routes/index.js')
const vendor = require('./routes/vendor.js')
const customer = require('./routes/customer.js')
const bike = require('./routes/bike.js')
const terminal = require('./routes/terminal')
const bodyParser = require('body-parser')

//helpers
app.locals.dateFormat = require('./helpers/dateFormat.js')

app.set("view engine", "ejs")


app.use(bodyParser.urlencoded({extended: false}))



app.use('/', index)
app.use('/customer', customer)
// app.use('/vendor', vendor)
// app.use('/bike', bike)
// app.use('/terminal', terminal)


app.listen(PORT, function() {
    console.log(`ONLINE ON ${PORT}`)
})