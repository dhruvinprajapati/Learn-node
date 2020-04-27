const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

//setting up body parsor to parse JSON
app.use(bodyParser.json())

app.get('/movie', (req, res) => {
    res.send("Movies");
});

app.post('/movie', (req, res) => {
    let title = req.body.title
    let year = req.body.year
    console.log(title,year)
    res.send("ok");
});

app.listen(PORT, () => {
    console.log(`Server started on port`);
});