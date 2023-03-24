// Pure vs Impure function :
//  Pure: output never change (constant parameters)
//  Impure: output is dynamic (variable parameters)

const express = require('express')

const app = express()
app.get('/hello', (req,res)=>{
    res.send('hello world')
}) // or POST etc

app.get('/hello', (req,res)=>{
    res.send('Welcome to my website')
})

app.post('/hello', (req,res)=>{
    res.send('Hello POST')
})

// http://localhost:3000/hello
app.listen(3000, ()=>{
    console.log("Sever started at http://localhost:3000/hello")
})

/*
Static (Web 1.0)
Web 2.0 : GET, POST etc
    # CRUD Applications : CREATE, READ, UPDATE, DELETE

    # Http Methods (Requests to server):
        CREATE : Post request
        READ : GET request (default)
        UPDATE : Put request
        DELETE : Delete request

*/