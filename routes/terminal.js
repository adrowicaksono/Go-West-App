const express = require('express')
const route = express.Router()
const Model = require('../models')

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
    Model.Terminal.findAll()
        .then(function(dataTerminal) {
            res.render('terminalIndex', {dataTerminal})
        })
        .catch(function(err) {
            res.send(err)
        })
})

route.get('/add',function(req,res,next){
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
    res.render('addNewTerminal')
})

route.post('/add',function(req,res,next){
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
    Model.Terminal.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/terminal')
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
    Model.Terminal.findById(req.params.id)
    .then(function(edited) {
        res.render('editTerminal', {edited})
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


module.exports = route