const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send("Hi guys");
});

app.listen(3000, () => {
    console.log("Neghi's app listening on port 3000!");
});