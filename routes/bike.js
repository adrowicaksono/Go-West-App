const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    Model.Bike.findAll({
        include:[Model.Vendor, Model.Terminal],
        order :[['createdAt','desc']]
    })
    .then(function(dataBike) {
        res.render('bikeIndex', {dataBike})
    })
    .catch(function(err) {
        res.send(err)
    })
})

app.get('/add', function(req, res) {
    let vendor = Model.Vendor.findAll()
    let terminal = Model.Terminal.findAll()
    
    Promise.all([vendor, terminal])
    .then(function(values){
        // console.log(values)
        res.render('addNewBike', {vendors:values[0], terminals:values[1]})
    })
    .catch(function(err){
        res.json(err)
    })
    
})

app.post('/add', function(req, res) { 
    Model.Bike.create({
        category: req.body.category,
        VendorId : req.body.VendorId,
        TerminalId : req.body.TerminalId,
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