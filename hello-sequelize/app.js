const models = require('./models')

//update recored
/*
models.Dish.update({
    name:'panir bhurji',
    price:44.44
},{
    where:{
        id:2
    }
}).then(data=>console.log(data))
*/
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