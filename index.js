const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [
    {
        userid: 1,
        name: "Nosa",
        email: "neghianruwa@ol.com",
        phone: "07050618611",
    },
];

app.get('/users',(req, res) => {
    res.send(users);
});
app.post("/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({message: "User succesfully created", user, users})
})

app.listen(3000, () => {
    console.log("Neghi's app listening on port 3000!");
});