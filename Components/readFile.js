const fs = require('fs');
const path = require("path");
const findLinks = require("./findLinks.js")

const readFile = (routePath) => {
    /* let arrayFiles = [];
    arrayFiles.push(file);
    console.log(arrayFiles);
    arrayFiles.forEach((element) => { */
        if (path.extname(routePath) === '.md'){
            let readContentFile = fs.readFileSync((routePath), 'utf-8');
           findLinks(readContentFile, routePath);
        }else{
            //console.log('No es archivo md');
        }
    //});
}

module.exports = readFile;
 