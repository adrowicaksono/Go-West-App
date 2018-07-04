const express = require('express')
const app = express()
const Model = require('../models')

app.get('/', function(req, res) {
    res.render('addNewBike')
})



module.exports = app