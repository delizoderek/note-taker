const express = require('express');
const PORT = process.env.PORT|| 3000;
const allRoutes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Attaches all the routes from the routes directory
app.use('/',allRoutes);

app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}!`)
);