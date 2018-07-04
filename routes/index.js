const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    res.render('login')
})

app.post('/login/authentication', function(req, res) {
    Model.Customer.findAll({
        where: {
            name: req.body.username,
        }
    }).then(function(dataUser) {
        if(dataUser) {
            console.log(req.body)
            
        }
    })
})

module.exports = app