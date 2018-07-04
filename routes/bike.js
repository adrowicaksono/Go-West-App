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

module.exports = app