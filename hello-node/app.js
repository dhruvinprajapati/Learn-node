const http = require('http')
const fs = require('fs')
const PORT = 3000

const serve = http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            fs.readFile('./index.html',(error,data)=>{
                res.statusCode = 200
                res.setHeader('Content-Type','text/html')
                res.end(data)
            })
            break
        case '/hello':
            fs.readFile('./hello.html',(error,data)=>{
                res.statusCode = 200
                res.setHeader('Content-Type','text/html')
                res.end(data)
            })
            break
        default:
            res.statusCode = 404
            res.setHeader('Content-Type','text/html')
            res.end("Not Found")
    }
})

serve.listen(PORT,()=>{
    console.log('server is runing')
})