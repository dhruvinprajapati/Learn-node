const models = require('./models')


//find all with where condition
/*
models.Dish.findAll({
    where:{
        name:'panir'
    }
}).then((data)=>{console.log(data)})
*/

//find by primary key
/*
models.Dish.findByPk(1)
.then((data)=>{console.log(data)})
*/

//display data
/*
models.Dish.findAll()
.then((data)=>{console.log(data)})
*/

//save data
/*
let dish = models.Dish.build({
    name:'panir',
    description:'not yummy',
    price:10.10
})
dish.save()
.then((data)=>{console.log(data)})
*/