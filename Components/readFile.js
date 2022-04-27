const fs = require('fs');
const path = require("path");
const findLinks = require("./findLinks.js")

    function readFile (routePath){
        if (path.extname(routePath) === '.md'){
            let readContentFile = fs.readFileSync((routePath), 'utf-8');
            findLinks(readContentFile, routePath);
        }else{
            //console.log('No es archivo md');
        }
}
module.exports = readFile;
 