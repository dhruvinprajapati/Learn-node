const express = require('express');
const app = express()

app.get('/hello', (req, res) => {
    res.send("hello Word!");
});

app.listen(3000, () => {
    console.log(`Server started on port`);
});