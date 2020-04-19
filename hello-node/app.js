const http = require('http')
const PORT = 3000

const serve = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content_type','text/plain')
    res.end('hello word')
})

serve.listen(PORT,()=>{
    console.log('server is runing')
})