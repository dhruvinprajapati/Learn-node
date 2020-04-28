const express = require('express');
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = 3000

app.engine('mustache',mustacheExpress())
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Server started on port`);
});