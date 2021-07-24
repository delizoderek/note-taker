const apiRouter = require('express').Router();
const {readFile,readAndAppend, writeToFile} = require('../helper/fileUtils');
const uuid = require('../helper/uuid');
// TODO: DELETE /api/notes/:id route

// GET /api/notes route
apiRouter.get('/', (req,res) => {
    readFile('./db/notes.json','utf8').then((data) =>{
        if(data){
            console.log('Data has been loaded properly');
            res.json(JSON.parse(data));
        } else {
            console.log(`Could not load data for ${req.method} request from ${req.baseUrl}`);
            res.json([]);
        }
    });
});

// POST /api/notes route
apiRouter.post('/',(req,res) => {
    if(req.body && req.body.title && req.body.text){
        req.body.id = uuid();
        readAndAppend(req.body,"./db/notes.json");
        res.send(`${req.method} request received and data updated`);
    } else {
        res.send(`Please set a note title or add text to your note`);
    }
});

apiRouter.delete('/:id',(req,res) => {
    if(req.params && req.params.id){
        readFile('./db/notes.json','utf8').then((data) =>{
            if(data){
                const noteData = JSON.parse(data);
                let spliceId = -1;
                for(let note in noteData){
                    if(noteData[note].id == req.params.id){
                        spliceId = note;
                        noteData.splice(note,1);
                        break;
                    }
                }
                writeToFile('./db/notes.json',noteData);
            }
        });
    }
    res.send('Message from delete');
});

module.exports = apiRouter;