const express = require('express');
const path = require('path');
const PORT = process.env.PORT|| 3000;
const allRoutes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',allRoutes);

app.use(express.static('public'));

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/notes.html"));
});

app.get('/notes',(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"));
});

app.listen(PORT, () =>
console.log(`Express server listening on port ${PORT}!`)
);