const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    Model.Customer.findAll()
        .then(function(dataCustomer) {
            res.render('customerIndex', {dataCustomer})
        })
        .catch(function(err) {
            res.send(err)
        })
})

app.get('/add', function(req, res) {
    res.render('addNewCustomer')
})

app.post('/add', function(req, res) {
    Model.Customer.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
    })
    .then(function() {
        res.redirect('/customer')
    })
    .catch(function(err) {
        res.render('addNewCustomer', {err})
    })
})

app.post('/delete/:id', function(req, res) {
    Model.Customer.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(function() {
        res.redirect('/customer')
    })
})

module.exports = app