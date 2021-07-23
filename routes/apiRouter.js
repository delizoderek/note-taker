const apiRouter = require('express').Router();
const {readJsonFile,writeAndAppend} = require('../helper/fileUtils');
// TODO: POST /api/notes route
// TODO: DELETE /api/notes/:id route

// GET /api/notes route
apiRouter.get('/', async (req,res) => {
    const noteData = await readJsonFile('./db/notes.json');
    if(noteData){
        res.json(noteData);
    } else {
        console.log(`Could not load data for ${req.method} request from ${req.baseUrl}`);
        res.json([]);
    }
});

apiRouter.post('/',(req,res) => {
    console.log('req.baseurl');
    res.send(`${req.method} request received`);
});

apiRouter.delete('/',(req,res) => {
    res.send('Message from delete');
});

module.exports = apiRouter;