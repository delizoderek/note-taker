const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

/**
 *  Writes the contents of the object to a file located at destination
 *  @param {string} destination The path to the file you want to save to.
 *  @param {object} content The content you want to append to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(`Could not find the following file ${err.path}`);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = {
    readFile,
    readAndAppend,
    writeToFile
};
