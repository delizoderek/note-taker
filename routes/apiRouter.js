const apiRouter = require('express').Router();
const {readFile,readAndAppend, writeToFile} = require('../helper/fileUtils');
const uuid = require('../helper/uuid');

/**
 *  Routing function for the POST request to address /api/notes. Handles adding a new note to the database
 *  @param {object} req The content you want to append to the file.
 *  @param {object} res The path to the file you want to save to.
 *  @response {void} Logs information to the console related to the request and sends a response back to the client
 *  the response is either a array that is holding the note objects or an empty array
 */
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

/**
 *  Routing function for the POST request to address /api/notes. Handles adding a new note to the database
 *  @param {object} req The content you want to append to the file.
 *  @param {object} res The path to the file you want to save to.
 *  @response {void} Logs information to the console related to the requestd and sends a response back to the client
 */
apiRouter.post('/',(req,res) => {
    if(req.body && req.body.title && req.body.text){
        req.body.id = uuid();
        readAndAppend(req.body,"./db/notes.json");
        res.send(`${req.method} request received and data updated`);
    } else {
        console.log('Bad body object')
        res.send(`Please set a note title or add text to your note`);
    }
});

/**
 *  Routing function for the DELETE request to address /api/notes/:id
 *  @param {object} req The content you want to append to the file.
 *  @param {object} res The path to the file you want to save to.
 *  @param {parameter} id Represents the id for the note that needs to be deleted
 *  @response {void} Logs information to the console related to the requestd and sends a response back to the client
 */
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