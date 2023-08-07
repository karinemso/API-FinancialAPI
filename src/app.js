
const express = require('express')
const bodyParser    = require('body-parser');
const PersonRouter = require('./PersonRouter')
const app = express();


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Aqui você pode definir as origens permitidas
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/person', PersonRouter);


module.exports = app;