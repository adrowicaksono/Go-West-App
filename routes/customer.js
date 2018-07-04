const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get('/', function(req, res) {
    Model.Customer.findAll()
        .then(function(dataCustomer) {
            res.render('customerIndex', {dataCustomer})
        })
        .catch(function(err) {
            res.send(err)
        })
})

router.get('/add', function(req, res) {
    res.render('addNewCustomer')
})

router.post('/add', function(req, res) {
    Model.Customer.create({
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        birthdate: req.body.birthdate,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    .then(function() {
        console.log(req.body)
        res.redirect('/customer')
    })
    .catch(function(err) {
        res.send(err)
    })
})

router.get('/delete/:id', function(req, res) {
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

router.get('/edit/:id', function(req, res) {
    Model.Customer.findById(req.params.id)
    .then(function(edited) {
        res.render('editCustomer', {edited})
    })
    .catch(function(err) {
        res.send(err)
    })
})

router.post('/edit/:id', function(req, res) {
    Model.Customer.update({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        birthdate: req.body.birthdate,
    }, { where:
        {id: req.params.id}
    })
    .then(function() {
        res.redirect('/customer')
    })
    .catch(function(err) {
        res.render('editCustomer')
    })
})


module.exports = router