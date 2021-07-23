const fs = require('fs');
const util = require('util');
const path = require('path');
const readFile = util.promisify(fs.readFile);

const readJsonFile = async (filePath) => {
    let jsonOut = undefined;
    try{
        const fileData = await readFile(filePath);
        jsonOut = JSON.parse(fileData);
    } catch(e){
        console.log(`Could not find file at location ${path.join(__dirname,e.path)}`);
    }

    return jsonOut;
}

const writeAndAppend = (filePath,data) => {
    console.log(`${filePath}\n\n${data}`);
}

module.exports = {
    readJsonFile,
    writeAndAppend
};