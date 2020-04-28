const express = require('express');
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT = 3000

const VIEWS_PATH = path.join(__dirname,'./views')

app.engine('mustache',mustacheExpress(VIEWS_PATH+'/partials','.mustache'))
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');
app.use(bodyParser.urlencoded({extended:false}));
//all file acc by simple type this
app.use('/css',express.static("css"));

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