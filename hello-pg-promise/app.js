const pgp = require('pg-promise')()
const connectionString = "postgres://localhost:5432/nailasgraden"
const db = pgp(connectionString)

// console.log(db)
//.none is not return anything
/*db.none('INSERT INTO dishes(name,course,price,imageurl)VALUES($1,$2,$3,$4)',
['kishor','entres',5.9,'hoho'])
.then(()=>{
    console.log("SUCCESS")
}).catch(error => console.log(error))*/

//return id 
db.one('INSERT INTO dishes(name,course,price,imageurl)VALUES($1,$2,$3,$4)RETURNING dishid',
['hot','staters',1.9,'hehe'])
.then((data)=>{
    console.log(data)
}).catch(error => console.log(error))