// const http = require('http');
// const PORT = 5000
// const server = http.createServer((req,res)=>{
    
//     res.end('Node server created by govind prajapati')

// })
// server.listen(PORT,()=>{
//     console.log(`server is running at ${PORT}`)
// })
// Assignment 1
const http = require('http');
const PORT = 5000
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('Content-type','text/plain')
        res.end('send msg as “We:come to Men & Women Dummy Data')

    }else if(req.url == '/other'){
        res.statusCode = 200;
        res.setHeader('Content-type','text/plain')
        res.end('page not found')
        

    }else if(req.url == '/woman'){
        res.statusCode = 200;
        res.setHeader('Content-type','text/plain')
        res.end(JSON.stringify({
            "id":"1",
            "name":"Woman",
            "price":"54000",
            "color":"yellow",
            "size":"12",
            "category":"clothing"


    }))
        
        

    }else if(req.url == '/men'){
        res.statusCode = 200;
        res.setHeader('Content-type','application/json')
        res.end(JSON.stringify({
            "id":"1",
            "name":"man",
            "price":"12000",
            "color":"red",
            "size":"M",
            "category":"clothing"


    }))

    }else{
        res.statusCode = 500;
        res.setHeader('Content-type','text/plain')
        res.end('error')
    }
    
    
    
    

})
server.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})