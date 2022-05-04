const process = require("process");
const path = require("path");
const fs = require("fs");
const readPath = require("./readPath.js");
const readFile = require("./readFile.js");
const findLinks = require("./findLinks.js");
const validateLinks = require("./validateLinks.js");
const unique = require("./unique.js");
const broken = require("./broken.js")

const pathName = process.argv[2];
const options = process.argv[3];


function mdLinks() {
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
        let UniqueLinks = unique(findLinksFiles);
        return resolve ("Total: "+ findLinksFiles.length + " " + "Unique: " + UniqueLinks);
    }else if (options === '--validate' && options === '--stats') {
      let readPathName = readPath(pathName);
      let readAllFiles = readFile(readPathName);
      let findLinksFiles = findLinks(readAllFiles);
      let UniqueLinks = unique(findLinksFiles);
      let validateBrokenLinks = (findLinksFiles.map(element => broken(element))).filter(element => element > 399);
       (Promise.all(validateBrokenLinks));
       return resolve ("Total: "+ findLinksFiles.length + " " + "Unique: " + UniqueLinks + " " + "Broken: " + validateBrokenLinks.length);
    }
    })  
}


module.exports = mdLinks;
