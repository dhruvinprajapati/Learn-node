const express = require('express');
const app = express()
const PORT = 3000

function log(req,res,next){
    console.log("[Aaya]")
    next()
}

app.get('/',log, (req, res) => {
    res.send("ROOT")
});
app.get('/login',log, (req, res) => {
    res.send("login")
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});