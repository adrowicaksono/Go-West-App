const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    res.render('addNewBike')
})

app.get('/add', function(req, res) {
    res.render('addNewBike')
})

app.post('/add', function(req, res) {
    console.log(req.body)
    Model.Bike.create({
        
    })
})

app.get('delete/:id', function(req, res) {
    Model.Bike.destroy()
        .then(function() {
            res.redirect('/bike')
        })
})

module.exports = app