const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const globalPath = path.join(__dirname, "../");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/apps"));


// API - Root route
app.get('/', (req, res) => {
    console.log('Test');
    res.sendFile(__dirname + '/views/index.html');
});

// API - App1 Route
app.get('/app2/*', (req, res) => {
    res.sendFile(__dirname + '/apps/app2/app2.html');
});

// API - App2 Route
app.get('/app3/*', (req, res) => {
    res.sendFile(__dirname + '/apps/app3/app3.html');
});

// API - App3 Route
app.get('/app4/*', (req, res) => {
    res.sendFile(__dirname + '/apps/app4/app4.html');
});

// API - 404 route
app.get('*', (req, res) => {
    res.status(404).send('Page does not exists!');
});

app.listen(port, () => {
    console.log("APP IS RUNNING ON PORT 3000");
});