const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    Model.Vendor.findAll()
    .then(function(dataVendor) {
        res.render('vendorIndex', {dataVendor})
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
        bike: req.body.bike,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(function() {
        res.redirect('/vendor')
    })
    .catch(function(err) {
        res.send(err)
    })
})

app.get('/delete/:id', function(req, res) {
    Model.Vendor.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/vendor')
    })
})

app.get('/edit/:id', function(req, res) {
    Model.Vendor.findById(req.params.id)
    .then(function(edited) {
        res.render('editVendor', {edited})
    })
    .catch(function(err) {
        res.send(err)
    })
})

app.post('/edit/:id', function(req, res) {
    Model.Vendor.update({
        name: req.body.name
    }, { where:
        {id: req.params.id}
    })
    .then(function() {
        res.redirect('/vendor')
    })
    .catch(function(err) {
        res.render('editVendor')
    })
})

module.exports = app