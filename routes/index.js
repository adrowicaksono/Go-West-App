const express = require('express')
const route = express.Router()
const Model = require('../models')

route.get('/', function(req, res) {
    res.render('login')
})


route.get('/index', function(req, res) {
    res.render('index')
})

route.post('/login/authentication', function(req, res) {

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

module.exports = route