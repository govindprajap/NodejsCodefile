const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write("<h1>Hello Govind </h1>")
    }
    else if(req.url == '/about'){
        res.write("<h1>Hello about<h1>")
    }
    else if(req.url == '/contact'){
        res.write("<h1>Hello contact <h1>")
    }
    else if(req.url == '/service'){
        res.write("<h1>service<h1>")
    }
    res.end()
})
server.listen(5000,()=>{
    console.log('server is running at 5000 port number')
})