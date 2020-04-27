const express = require('express');
const app = express()
const PORT = 3000

app.get('/movie', (req, res) => {
    res.send("Movies");
});

app.post('/movie', (req, res) => {
    
});

app.listen(PORT, () => {
    console.log(`Server started on port`);
});