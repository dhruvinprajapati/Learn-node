const express = require('express');
const app = express()
const PORT = 3000

app.get('/movies', (req, res) => {
    console.log(req.query.sort)
    console.log(req.query.page)
    res.send("[Movies]");
});

app.listen(PORT, () => {
    console.log(`Server started on port`);
});