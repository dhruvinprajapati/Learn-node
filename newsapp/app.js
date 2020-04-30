const express = require('express');
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const pgp = require('pg-promise')()

const PORT = 3000
const CONNECTION_STRING = "postgres://localhost:5432/newsdb"
const SALT_ROUND = 10

//configure news engine
app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.use(bodyParser.urlencoded({extended: false}));

const db = pgp(CONNECTION_STRING)

app.post('/register', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    db.oneOrNone('select userid FROM users where username = $1',[username])
    .then((data)=>{
        if(data){
            res.render('register',{message:"Username alredy exist!"});
        }else{
            bcrypt.hash(password,SALT_ROUND,function(error,hash){
                if(error == null){
                    db.none('INSERT INTO users(username,password)VALUES($1,$2)',[username,hash])
                    .then(()=>{
                        res.send("success");
                    })
                }
            })
        }
    })
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(PORT, () => {
    console.log(`Server started on port`);
});