const express = require('express')
const route = express.Router()
const Model = require('../models')

route.get('/',function(req,res,next){
    let user = req.session.current_user
    if(user){
        next()
    }else{
        res.render('../views/auth/login', {
            error:{errors:[{message:'you are not login'}]
            }
        }) 
    }
},function(req, res){
    if(req.session.current_user.BikeId){
        Model.Bike
        .findOne({
            include:[{
                model : Model.Customer,
                where : {

                }
            },Model.Terminal],
            where:{
                id:req.session.current_user.BikeId
            }
        })
        .then(function(bike){
            Model.Bike
            .findAll({
                include:Model.Customer,
                where:{
                    status:false,
                    TerminalId : bike.TerminalId
                }
            })
            .then(function(arounds){
                res.render('../views/Go-West/mainPage', {user:req.session.current_user, bike:bike, arounds:arounds})
            })
        })
        .catch(function(err){
            res.json(err)
        })
        
    }else{
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
    }
    
})

route.get('/:id/bike',function(req,res,next){
    let user = req.session.current_user
    if(user){
        next()
    }else{
        res.render('../views/auth/login', {
            error:{errors:[{message:'you are not login'}]
            }
        }) 
    }
},function(req, res){
    Model.Bike
    .findOne({
        include : [Model.Terminal],
        where:{
            id:req.params.id
        }
    })
    .then(function(bike){
        res.render('../views/Go-West/pick',{bike:bike})
    })
    .catch(function(err){
        res.send(err)
    })
})



route.post('/:id/update',function(req,res,next){
    let user = req.session.current_user
    if(user){
        next()
    }else{
        res.render('../views/auth/login', {
            error:{errors:[{message:'you are not login'}]
            }
        }) 
    }
} ,function(req,res){
    console.log(req.session.current_user)
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
            console.log(bike)
            req.session.current_user.BikeId = req.params.id
            console.log(req.session.current_user)
            Model.Bike
            .findAll({
                include:Model.Customer,
                where:{
                    status:false,
                    TerminalId : bike.TerminalId
                }
            })
            .then(function(arounds){
                res.render('../views/Go-West/mainPage', {user:req.session.current_user, bike:bike, arounds:arounds})
            })
            // res.render('../views/Go-West/mainPage', {user:req.session.current_user, bike:bike})
        })
        .catch(function(err){
            res.json(err)
        })
        
    })
    .catch(function(err){
        res.json(err)
    })
})

route.post('/:idBike/:idCustomer/return',function(req,res,next){
    let user = req.session.current_user
    if(user){
        next()
    }else{
        res.render('../views/auth/login', {
            error:{errors:[{message:'you are not login'}]
            }
        }) 
    }
},function(req, res){
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
        req.session.current_user.bikeCategory = null
        req.session.current_user.BikeId = null
        console.log(req.session.current_user)
        res.redirect('/pick')
    })
    .catch(function(err){
        res.json(err)
    })
})

route.get('/search',function(req,res,next){
    let user = req.session.current_user
    if(user){
        next()
    }else{
        res.render('../views/auth/login', {
            error:{errors:[{message:'you are not login'}]
            }
        }) 
    }
} ,function(req, res){
    let terminals = Model.Terminal.findAll()
    let bikes = Model.Bike.findAll({
        order :[['id', 'asc']]
    })
    Promise.all([terminals, bikes])
    .then(function(values){
        res.render('../views/Go-West/searchBike', {terminals:values[0],bikes:values[1]})
    })
    .catch(function(err){
        res.json(err)
    })
})


module.exports = route