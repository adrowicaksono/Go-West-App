const PORT = 3000
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

app.post('/send', function(req, res) {
    const output = `
    <p>You have been registered</p>
    <h3>Contact Detail</h3>
    <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
    </ul>

    <h3>Message</h3>
    <p>${req.body.message}</p>
    `

    console.log(req.body)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'david.hacktiv8@gmail.com', // generated ethereal user
            pass: 'davidhacktiv8' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Go West Nodemailer" <david.hacktiv8@gmail.com>', // sender address
        to: `${req.body.email}`, // list of receivers
        subject: 'Go West Nodemailer', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('mail.handlebars', {msg: 'Email has been sent'})
    });
})


app.listen(PORT, function() {
    console.log(`ONLINE ON ${PORT}`)
})