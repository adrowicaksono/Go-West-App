const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    Model.Terminal.findAll()
        .then(function(dataTerminal) {
            res.render('terminalIndex', dataTerminal)
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
        location: req.body.location
    })
    .then(function() {
        res.redirect('/terminal')
    })
    .catch(function(err) {
        res.send(err)
    })
})

app.post('/delete/:id', function(req, res) {
    Model.Terminal.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('terminalIndex')
    })
})

module.exports = app