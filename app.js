const port = process.env.PORT || 4000;
const express = require('express')
const app = express()
const session = require('express-session')
const index = require('./routes/index.js')
const vendor = require('./routes/vendor.js')
const customer = require('./routes/customer.js')
const bike = require('./routes/bike.js')
const terminal = require('./routes/terminal')
const pick = require('./routes/pick')
const nodemailer = require('nodemailer')
const exphbs = require('express-handlebars')


//helpers
app.locals.dateFormat = require('./helpers/dateFormat.js')
// app.use(express.cookieParser())
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret:'0912uk!&#s82b!@#',
    cookie:{}
}))


app.engine('handlebars', exphbs())
app.set('view engine', 'ejs', 'handlebars')
app.use(express.static('public'))

app.use('/', index)
app.use('/customer', customer)

app.use('/vendor', vendor)
app.use('/bike', bike)
app.use('/terminal', terminal)
app.use('/pick', pick)

app.get('/send', function(req, res) {
    res.render('mail.handlebars')
})

app.listen(port,console.log('listening on port 4000')) 