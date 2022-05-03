const process = require("process");
const path = require("path");
const fs = require("fs");
const readPath = require("./readPath.js");
const readFile = require("./readFile.js");
const findLinks = require("./findLinks.js");
const validateLinks = require("./validateLinks.js");
const stats = require("./stats.js");

const pathName = process.argv[2];
const options = process.argv[3];


function miPromesa() {
  return new Promise((resolve, reject) => {
     if (!options) {
        if(path.extname(pathName) === '.md'){
            let readUniqueFile =  fs.readFileSync(pathName, "utf-8");
            let findUniqueLink = findLinks(readUniqueFile);
            return resolve (findUniqueFile);
            } else {
            let readPathName = readPath(pathName);
            let readAllFiles = readFile(readPathName);
            let findLinksFiles = findLinks(readAllFiles, readPathName);
            return resolve (findLinksFiles);
            }
    }else if (options === '--validate') {
        let readPathName = readPath(pathName);
        let readAllFiles = readFile(readPathName);
        let findLinksFiles = findLinks(readAllFiles);
        let validateLinksFiles = findLinksFiles.map(element => validateLinks(element));
        return resolve(Promise.all(validateLinksFiles));
    }else if (options === '--stats') {
        let readPathName = readPath(pathName);
        let readAllFiles = readFile(readPathName);
        let findLinksFiles = findLinks(readAllFiles);
        let validateLinksFiles = findLinksFiles.map(element => validateLinks(element));
        let statsLinks = stats(Promise.all(validateLinksFiles));
        //return resolve (statsLinks);



    }

    })
    
}


miPromesa()
  .then(function (mensaje) {
    console.log("soy mdlinks", mensaje);
  })
  .catch(function (error) {
    console.log(error);
  });