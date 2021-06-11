const express = require('express');
const dbConnection = require('./config/db')

const app = express();

dbConnection();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(4000, () => {
    console.log("Server running ...");
});