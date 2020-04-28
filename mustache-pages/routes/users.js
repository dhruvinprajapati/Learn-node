const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

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

router.get('/add-user', (req, res) => {
    res.render('add-user');
});

router.post('/add-user', (req, res) => {
    let name = req.body.name
    let age = req.body.age
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