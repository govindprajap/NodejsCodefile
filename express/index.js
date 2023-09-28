// Assignment 2
const express = require("express");
const app = express();
const PORT = 3020
app.get('/',(req,res)=>{
    res.send('I am home page')
})
app.get('/about',(req,res)=>{
    res.send('I am about page')
})
app.get('/contact',(req,res)=>{
    res.send('I am contact page')
})
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})