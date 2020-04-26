const express = require('express');
const app = express();
const PORT = 3000

app.get('/movies', (req, res) => {

    let movies = [
        { title:"Lord Of Rings",year:"2020"},
        { title:"Rajni",year:"3223"}
    ]
     res.json(movies);
});

app.listen(PORT, () => {
    console.log(`Server started on port`);
});