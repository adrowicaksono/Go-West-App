const express = require('express')
const route = express.Router()
const Model = require('../models')


route.get('/', function(req, res) {
    Model.Bike.findAll({
        include :[Model.Vendor, Model.Terminal]
    })
        .then(function(dataBike) {
            res.render('bikeIndex', {dataBike})
        })
        .catch(function(err) {
            res.send(err)
        })
})

route.get('/add', function(req, res){
    let vendors = Model.Vendor.findAll()
    let terminals = Model.Terminal.findAll()

    Promise.all([vendors, terminals])
    .then(function(values){
        res.render('addNewBike',{vendors:values[0],terminals:values[1]})
    })
    .catch(function(err){
        res.send('maintance page')
    })
    
})

route.post('/add', function(req, res) {
    console.log(req.body)

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

route.get('/delete/:id', function(req, res) {
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

module.exports = route