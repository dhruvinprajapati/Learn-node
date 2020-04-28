const express = require('express');
const router = express.Router();

function authenticate(req,res,next){
    if(req.session){
        if(req.session.name){
            next()
        }else{
             res.redirect('/users/add-user');
        }
    }else{
        res.redirect('/users/add-user');
   }
}

router.get('/', (req, res) => {

    let user = {
        name:req.session.name,
        address:{
            street:"54 kesariyaji",
            city:"ahmedabad",
            state:"gujrat"
        }
    }

    res.render('index',user);
});
router.get('/bank-account',authenticate, (req, res) => {
    res.send("Bank account")
});

router.get('/add-user', (req, res) => {
    res.render('add-user');
});

router.post('/add-user', (req, res) => {
    let name = req.body.name
    let age = req.body.age
    if(req.session){
        req.session.name = name
        req.session.age = age
    }
    console.log(name,age)
    res.status(200).send("ok");
});

router.get('/users', (req, res) => {
    let users = [
        {name:"dhruvin",age:22},
        {name:"Kishor",age:23},
        {name:"bhavin",age:24}
    ]
    users = []
    res.render('users',{users:users});
});

module.exports = router