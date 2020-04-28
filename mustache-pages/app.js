const express = require('express');
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const userRoutes = require('./routes/users')
const app = express()
const PORT = 3000

const VIEWS_PATH = path.join(__dirname,'./views')

app.use(bodyParser.urlencoded({extended:false}));
app.use('/users',userRoutes)

app.engine('mustache',mustacheExpress(VIEWS_PATH+'/partials','.mustache'))
app.set('views', VIEWS_PATH);
app.set('view engine', 'mustache');
//all file acc by simple type this
app.use('/css',express.static("css"));


app.listen(PORT, () => {
    console.log(`Server started on port`);
});