const express =  require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("anand dua is wrtting these end points");
});


app.get('/notes', (req, res) => {
    res.send("add git ignore  \n   make better functions");
});

app.listen(port, () => {
    console.log("app is listening to port 3000");
});