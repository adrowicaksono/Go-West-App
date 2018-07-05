const express = require('express')
const route = express.Router()
const Model = require('../models')

route.get('/', function(req, res){
    
    Model.Terminal
    .findAll({
        include:[{
            model : Model.Bike,
            order : [['createdAt' , 'desc']]
        }],
        order :[['location', 'asc']]
    })
    .then(function(terminals){
        res.render('../views/Go-West/mainPage', {terminals:terminals} )
    })
    .catch(function(err){
        res.json(err)
    })
    
})

route.get('/:id', function(req, res){
    Model.Bike
    .findOne({
        include : [Model.Terminal],
        where:{
            id:req.params.id
        }
    })
    .then(function(bike){
        // res.json(bike)
        res.render('../views/Go-West/pick',{bike:bike})
    })
    .catch(function(err){
        res.send(err)
    })
})

route.post('/:id/update', function(req,res){
    console.log(req.session.current_user.id)
    Model.Customer
    .update({
        BikeId : req.params.id
    },{
        where:{
            id : req.session.current_user.id
        }
    })
    .then(function(){
        res.redirect('/pick')
    })
    .catch(function(err){
        res.json(err)
    })
})


module.exports = route