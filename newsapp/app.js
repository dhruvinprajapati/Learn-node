const express = require('express');
const app = express()
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const session = require('express-session')
const pgp = require('pg-promise')()
const path = require('path')

const VIEWS_PATH = path.join(__dirname,'/views')

const PORT = 3000
const CONNECTION_STRING = "postgres://localhost:5432/newsdb"
const SALT_ROUND = 10

//configure news engine
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine','mustache')

app.use(session({
    secret:'haha',
    resave:false,
    saveUninitialized:false
}))

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

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    db.oneOrNone('SELECT userid,username,password FROM users WHERE username = $1',[username])
    .then((data)=>{
        if(data){
            bcrypt.compare(password,data.password,function(error,result){
                if(result){
                    if(req.session){
                        req.session.user = {userID:data.userid,username:data.username}
                    }
                     res.redirect('/users/article')
                }else{
                    res.render('login',{message:"invalid username or password"});
                }
            })
        }else{
            res.render('login',{message:"invalid username or password"});
        }
    })
});

app.get('/users/article', (req, res) => {
    res.render('article',{username:req.session.user.username})
});

app.get('/users/add-article', (req, res) => {
    res.render('add-article');
});

app.post('/users/add-article', (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let userid = req.session.user.userid

    db.none("INSERT INTO articles (title,body,userid) values($1,$2,$3)",[title,description,userid])
    .then((data)=>{
        res.send("success");
    })
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(PORT, () => {
    console.log(`Server started on port`);
});