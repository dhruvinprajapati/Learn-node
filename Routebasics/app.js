const express = require('express');
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Hello Express");
});

//dynemic routing
// /movie/comedy/year/2012
// /movie/action/year/2020
app.get('/movie/:genre/year/:year', (req, res) => {
    console.log(req.params.genre)
    res.send("Movies Route");
});

app.listen(PORT, () => {
    console.log(`Server started on port`+3000);
});