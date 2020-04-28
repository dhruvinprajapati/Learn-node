const express = require('express');
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000


app.engine('mustache',mustacheExpress())
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/add-user', (req, res) => {
    res.render('add-user');
});

app.post('/add-user', (req, res) => {
    let name = req.body.name
    let age = req.body.age
    console.log(name,age)
    res.status(200).send("ok");
});

app.get('/users', (req, res) => {
    let users = [
        {name:"dhruvin",age:22},
        {name:"Kishor",age:23},
        {name:"bhavin",age:24}
    ]
    users = []
    res.render('users',{users:users});
});

app.get('/', (req, res) => {

    let user = {
        name:"dhruvin",
        address:{
            street:"54 kesariyaji",
            city:"ahmedabad",
            state:"gujrat"
        }
    }

    res.render('index',user);
});


app.listen(PORT, () => {
    console.log(`Server started on port`);
});