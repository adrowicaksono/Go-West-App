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
        res.render('pick.ejs', {terminals:terminals} )
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

route.post('/:id', function(req, res) {
    console.log('post pick bike')
    // Model.Terminal.findAll()
    // .then(function(dataTerminal) {
    //     res.render('')
    // })
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
    .then(function(customer){
        Model.Bike
        .findOne({
            include : [Model.Terminal],
            where : {
                id : req.params.id
            }
        })
        .then(function(bike){
            res.render('../views/Go-West/mainPage', {user:req.session.current_user, bike:bike})
        })
        .catch(function(err){
            res.json(err)
        })
        
    })
    .catch(function(err){
        res.json(err)
    })
})

route.post('/:idBike/:idCustomer/return',function(req, res){
    let bike = Model.Bike
    .update({
        status:true
    },{
        where:{
            id:req.params.idBike
        }
    })
    

    let customer = Model.Customer
        .update({
            BikeId : null
        },{
            where :{
                id:req.params.idCustomer
            }
        })

    Promise.all([bike, customer])
    .then(function(values){
        res.redirect('/pick')
    })
    .catch(function(err){
        res.json(err)
    })
})


module.exports = route