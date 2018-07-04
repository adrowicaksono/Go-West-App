const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    Model.Vendor.findAll()
    .then(function(dataVendor) {
        console.log(dataVendor)
        res.render('vendorIndex', dataVendor)
    }).catch(function(err) {
        res.send(err)
    })
})

app.get('/add', function(req, res) {
    res.render('addNewVendor')
})

app.post('/add', function(req, res) {
    Model.Vendor.create({
        name: req.body.name,
        bike: req.body.bike
    })
    .then(function() {
        res.redirect('/vendor')
    })
    .catch(function(err) {
        res.send(err)
    })
})

app.post('/delete/:id', function(req, res) {
    Model.Vendor.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('vendorIndex')
    })
})

module.exports = app