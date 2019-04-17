const http = require("http");
const express = require("express");

const app = express()

app.use('/', (req, res, next) => {
    console.log('First root route')
    next();
});

app.use('/users', (req, res, next) => {
    console.log('User route');
    res.send(`<h1>Hello from the user page</h1>`)
});

app.use('/', (req, res, next) => {
    console.log('Main Root route');
    res.send(`<h1>Hello from the home page</h1>`);
});

app.listen(3000);