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
    Model.Vendor.findAll()
    .then(function(dataVendor) {
        res.render('vendorIndex', {dataVendor})
    }).catch(function(err) {
        res.send(err)
    })
})

route.get('/add', function(req,res,next){
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

},function(req, res) {
    res.render('addNewVendor')
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
    Model.Vendor.create({
        name: req.body.name,
        bike: req.body.bike,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(function() {
        res.redirect('/vendor')
    })
    .catch(function(err) {
        res.render('addNewVendor', {msg: 'Please fill all fields'})
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
    Model.Vendor.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/vendor')
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
    Model.Vendor.findById(req.params.id)
    .then(function(edited) {
        res.render('editVendor', {edited})
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
    Model.Vendor.update({
        name: req.body.name
    }, { where:
        {id: req.params.id}
    })
    .then(function() {
        res.redirect('/vendor')
    })
    .catch(function(err) {
        res.render('editVendor')
    })
})

module.exports = route