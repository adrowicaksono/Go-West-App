function cekAdmin (req,res,next){
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

}

module.exports = cekAdmin