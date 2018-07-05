const express = require('express')
const route = express.Router()
const Model = require('../models')
const bcrypt = require('bcrypt')
const sendEmail = require('../mailer.js')

route.get('/', function(req, res) {
    // res.json(req.session.current_user)
    if(req.session.current_user){
        res.render('../views/Go-West/mainPage')
    }else{
        res.render('../views/auth/login',{error:null})
    }
    
})

route.get('/register', function(req,res){
    res.render('../views/auth/register', {error:null})
})

//REGITER - POST
route.post('/register', function(req, res) {
    Model.Customer
    .create({
        name : req.body.name,
        email :req.body.email,
        birthdate : req.body.birthdate,
        password : req.body.password,
        gender : req.body.gender,
    })
    .then(function(dataCustomer){
        sendEmail(dataCustomer.dataValues)
        res.redirect('/')
    })
    .catch(function(err){
        res.render('../views/auth/register', {error:err})
    })
})

route.post('/login/authentication',(req,res,next)=>{
	var passTemp = req.body.password
    Model.Customer
    .findOne({
    	where: {
    		name: req.body.name
    	}
    })
    .then(function(customer){
        
    	 if(customer) {
            let password = bcrypt.compareSync(passTemp,customer.password)
    		if (password) {
                req.session.current_user = customer
                console.log(req.session.current_user)
	    		res.render('../views/Go-West/mainPage')
    		}else{
                res.render('../views/auth/login', {
                    error:{errors:[{message:'passsword salah'}]
                    }
                })
            }			
		}else{
    	 	throw new Error
    	}
    })
    .catch(err=>{
    	res.render('../views/auth/login', {error:{errors:[{message:'username salah'}]}})	
     })
})

route.get('/logout/authentication', function(req, res){
    req.session.current_user = null
    res.redirect('/')
})

route.get('/index', function(req,res,next){
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
    res.render('index')
})

module.exports = route