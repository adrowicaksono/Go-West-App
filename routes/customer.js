const express = require('express')
const route = express.Router()
const Model = require('../models')
const sendEmail = require('../mailer.js')

route.get('/',function(req,res,next){
    let user = req.session.current_user
    if(user){
        if(user.role === "admin"){
            next()
        }else{
            
            res.render('../views/auth/login', {
                error:{errors:[{message:'you are not admin'}]
                }
            })    
        }
    }else{
        res.redirect('/')
    }

} ,function(req, res) {

    Model.Customer.findAll()
        .then(function(dataCustomer) {
            res.render('customerIndex', {dataCustomer})
        })
        .catch(function(err) {
            res.send(err)
        })
})


route.get('/add',function(req,res,next){
    let user = req.session.current_user
    // console.log(user)
    if(user){
        if(user.role === "admin"){
            next()
        }else{
            
            res.render('../views/auth/login', {
                error:{errors:[{message:'you are not admin'}]
                }
            })    
        }
    }else{
        res.redirect('/')
    }

} ,function(req, res) {
    res.render('addNewCustomer')
})

route.post('/add', function(req, res) {
    console.log('this is req body', req.body)
    Model.Customer.create({
        name: req.body.name,
        password: req.body.password,
        gender: req.body.gender,
        email: req.body.email,
        birthdate: req.body.birthdate,
    })
    .then(function(dataCust) {
        console.log('customer routes---',req.body)
        sendEmail(dataCust.dataValues)
        res.redirect('/customer')
    })
    .catch(function() {
        console.log('catch error')
        res.render('addNewCustomer', {msg: 'Please fill all fields'})
    })
})


route.get('/delete/:id',function(req,res,next){
    let user = req.session.current_user
    if(user){
        if(user.role === "admin"){
            next()
        }else{
            
            res.render('../views/auth/login', {
                error:{errors:[{message:'you are not admin'}]
                }
            })    
        }
    }else{
        res.redirect('/')
    }

} ,function(req, res) {
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

route.get('/edit/:id',function(req,res,next){
    let user = req.session.current_user
    if(user){
        if(user.role === "admin"){
            next()
        }else{
            
            res.render('../views/auth/login', {
                error:{errors:[{message:'you are not admin'}]
                }
            })    
        }
    }else{
        res.redirect('/')
    }

} ,function(req, res) {

    Model.Customer.findById(req.params.id)
    .then(function(edited) {
        res.render('editCustomer', {edited})
    })
    .catch(function(err) {
        res.send(err)
    })
})

route.post('/edit/:id',function(req,res,next){
    let user = req.session.current_user
    if(user){
        if(user.role === "admin"){
            next()
        }else{
            
            res.render('../views/auth/login', {
                error:{errors:[{message:'you are not admin'}]
                }
            })    
        }
    }else{
        res.redirect('/')
    }

} ,function(req, res) {
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
        res.send(err)
    })
})



module.exports = route

