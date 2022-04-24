const fs = require('fs');
const path = require("path");


const readFile = (file) => {
    let arrayFiles = [];
    arrayFiles.push(file);
    console.log(arrayFiles);
    arrayFiles.forEach((element) => {
        if (path.extname(element) === '.md'){
            let readContentFile = fs.readFileSync((file), 'utf-8');
            console.log(readContentFile);
        }else{
            console.log('No es archivo md');
        }
    });
}

module.exports = readFile;
 