const express = require('express');
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send("Hello Express");
});

app.get('/movies', (req, res) => {
    res.send("Movies");
});

app.get('/movie/year', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`Server started on port`+3000);
});