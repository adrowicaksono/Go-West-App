const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.get("/auth",function(req,res){

    
})

app.use('/', index)
app.use('/customer', customer)
app.use('/vendor', vendor)
app.use('/bike', bike)
app.use('/terminal', terminal)


app.listen(3000, function(){
    console.log("listen server 3000")
})