const express = require('express');
const dbConnection = require('./config/db')

const app = express();

dbConnection();

app.use(express.json());

app.use('/api/persons', require('./routes/person'));

app.listen(4000, () => {
    console.log("Server running ...");
});