const process = require("process");
const path = require("path");
const fs = require("fs");
const readPath = require("./readPath.js");
const readFile = require("./readFile.js");
const findLinks = require("./findLinks.js");
const validateLinks = require("./validateLinks.js");
const unique = require("./unique.js");
const broken = require("./broken.js");

const pathName = process.argv[2];
const options1 = process.argv[3];
const options2 = process.argv[4];

function mdLinks() {
  return new Promise((resolve, reject) => {
    let pathExtension = path.extname(pathName);
    if (pathExtension === ".md") {
      let container = [];
      let resolvePath = path.resolve(path.join(pathName));
      container.push(resolvePath);
      let readUniqueFile = fs.readFileSync(path.resolve(pathName), "utf-8");
    } else {
      let readPathName = readPath(pathName);
      let readAllFiles = readFile(readPathName);
      let findLinksFiles = findLinks(readAllFiles);
      let UniqueLinks = unique(findLinksFiles);
      let validateLinksFiles = findLinksFiles.map((element) =>
      validateLinks(element));
     let brokenLinks = broken(findLinksFiles);
     
      if (options1 && options2 ) {
         resolve(
            "Total: " +
              findLinksFiles.length +
              " " +
              "Unique: " +
              UniqueLinks +
              " " +
              "Broken: " +
              brokenLinks
         ); 
       
      } else if (options1 === "--validate") {
        resolve(Promise.all(validateLinksFiles));
      } else if (options1 === "--stats") {
        resolve(
          "Total: " + findLinksFiles.length + " " + "Unique: " + UniqueLinks
        );
      } else if (!options1 && !options2) {
        resolve(findLinksFiles);
      
      }
    } reject("Error")
  });
}

module.exports = mdLinks;
