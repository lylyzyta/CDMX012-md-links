const fs = require('fs');
const path = require("path");
const findLinks = require('./findLinks');


function readFile (routePath){
    /* let arrayPath = routePath;
    let readContentFile;
    let readContentFile1=[];
    arrayPath.forEach(element => {
        if (path.extname(element) === '.md'){ */
        
        let readContentFile = fs.readFileSync((routePath), 'utf-8');
            return (readContentFile);
            //console.log('soy routepath', readContentFile);
            //console.log('soy readContentFile', typeof(readContentFile));
        }
       
   // });
//}
           
            //console.log(arrayreadFile, routePath);
            //findLinks(readContentFile, routePath);
        //}else{
            //console.log('No es archivo md');
    
        //console.log('Hola', readContentFile);
    //return readContentFile;
    

module.exports = readFile;
 