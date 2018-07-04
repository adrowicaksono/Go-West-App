const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    Model.Bike.findAll()
        .then(function(dataBike) {
            res.render('bikeIndex', {dataBike})
        })
        .catch(function(err) {
            res.send(err)
        })
})

app.get('/add', function(req, res) {
    res.render('addNewBike')
})

app.post('/add', function(req, res) {
    console.log(req.body)
    Model.Bike.create({
        tag: req.body.tag,
    }).then(function() {
        res.redirect('/bike')
    }).catch(function(err) {
        res.send(err)
    })
})

app.get('/delete/:id', function(req, res) {
    console.log(req.body)
    Model.Bike.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
            res.redirect('/bike')
    }).catch(function(err) {
        res.send(err)
    })
})

module.exports = app