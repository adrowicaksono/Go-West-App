const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    Model.Terminal.findAll()
        .then(function(dataTerminal) {
            res.render('terminalIndex', {dataTerminal})
        })
        .catch(function(err) {
            res.send(err)
        })
})

app.get('/add', function(req, res) {
    res.render('addNewTerminal')
})

app.post('/add', function(req, res) {
    Model.Terminal.create({
        location: req.body.location,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(function() {
        res.redirect('/terminal')
    })
    .catch(function(err) {
        res.send(err)
    })
})

app.get('/delete/:id', function(req, res) {
    Model.Terminal.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/terminal')
    })
})

app.get('/edit/:id', function(req, res) {
    Model.Terminal.findById(req.params.id)
    .then(function(edited) {
        res.render('editTerminal', {edited})
    })
    .catch(function(err) {
        res.send(err)
    })
})

app.post('/edit/:id', function(req, res) {
    Model.Terminal.update({
        location: req.body.location
    }, { where:
        {id: req.params.id}
    })
    .then(function() {
        res.redirect('/terminal')
    })
    .catch(function(err) {
        res.render('editTerminal')
    })
})


module.exports = app