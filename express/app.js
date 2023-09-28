const express = require('express');
const app = express();
const PORT = 4021
const fs = require('fs');
app.get('/api',(req,res)=>{
    if(req.url == '/'){
        res.end()
    }
    const json = fs.readdirSync('count-json','utf-8')
    const obj = JSON.parse(json)
    obj.Decrement = obj.Decrement-1;
    obj.increment = obj.increment+1
})
app.listen(PORT,()=>{
    console.log('server running at port ${PORT')
})