const express =  require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("anand dua is wrtting these end points");
});

const port = 3000;

app.listen(port, () => {
    console.log("app is listening to port 3000");
})