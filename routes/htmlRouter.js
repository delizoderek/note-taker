const htmlRouter = require('express').router();

htmlRouter.get('/',(req,res) => {
    res.send('Hello from your server!');
});

htmlRouter.post('/',(req,res) => {
    console.log('req.baseurl');
    res.send(`${req.method} request received`);
});

htmlRouter.delete('/',(req,res) => {
    res.send('Message from delete');
});

htmlRouter.get('*',(req,res) => {
    res.sendFile("./public/index.html");
});

module.exports = htmlRouter;