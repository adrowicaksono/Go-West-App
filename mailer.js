const nodemailer = require('nodemailer')

function sendEmail(dataCust) {

    const output = `
    <p>You have been registered to Go West</p>
    <h3>Data Detail</h3>
    <ul>
    <li>Name: ${dataCust.name}</li>
    <li>Age: ${dataCust.age}</li>
    <li>Gender: ${dataCust.gender}</li>
    <li>Email: ${dataCust.email}</li>
    <li>Phone: ${dataCust.phone}</li>
    <li>Birthdate: ${dataCust.birthdate}</li>
    </ul>
    
    <h3>Message</h3>
    <p>Welcome to Go West</p>
    `
    
    // console.log(dataCust)
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
        from: '"Go West" <david.hacktiv8@gmail.com>', // sender address
        to: `${dataCust.email}`, // list of receivers
        subject: 'Go West Registration', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        // console.log('Message sent: %s', info.messageId);
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
        res.redirect('/customer')
    });
}

module.exports = sendEmail