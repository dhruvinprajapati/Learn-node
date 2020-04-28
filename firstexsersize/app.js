const express = require('express');
const app = express()
const PORT = 3000
//appling middleware all app route
app.use(log);

function log(req,res,next){
    console.log("[Aaya]")
    next()
}

app.get('/', (req, res) => {
    res.send("ROOT")
});
app.get('/login', (req, res) => {
    res.send("login")
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});