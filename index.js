const express = require('express');
const path = require('path');
const PORT = process.env.PORT|| 3000;
const allRoutes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/',allRoutes);


app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}!`)
);