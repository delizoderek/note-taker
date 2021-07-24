const express = require('express');
const path = require('path');
const apiRouter = require('./apiRouter');
const app = express();

app.use(express.static('public'));

// Attaches the router for /api/notes
app.use('/api/notes', apiRouter);

// GET /notes route. returns notes.html
app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/notes.html"));
});

// * route. returns index.html
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/index.html"));
});

module.exports = app;
