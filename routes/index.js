const express = require('express');
const apiRouter = require('./apiRouter');
const app = express();

app.use('/notes', apiRouter);
// TODO: GET /api/notes route
// TODO: POST /api/notes route
// TODO: DELETE /api/notes/:id route
// TODO: GET /notes route. returns notes.html
// TODO: * route. returns index.html

module.exports = app;
