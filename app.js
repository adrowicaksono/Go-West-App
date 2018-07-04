const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.get("/auth",function(req,res){
    res
})


app.listen(3000, function(){
    console.log("listen server 3000")
})