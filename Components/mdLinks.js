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
    let readPathName = readPath(pathName);
    let readAllFiles = readFile(readPathName);
    let findLinksFiles = findLinks(readAllFiles, readPathName);
    let UniqueLinks = unique(findLinksFiles);
    let validateLinksFiles = validateLinks(findLinksFiles);

    if (options1 && options2) {
      resolve(
        "Total: " +
          findLinksFiles.length +
          " " +
          "Unique: " +
          UniqueLinks +
          " " +
          "Broken: " +
          "3"
      );
    } else if (options1 === "--validate") {
      resolve(validateLinksFiles);
    } else if (options1 === "--stats") {
      resolve(
        "Total: " + findLinksFiles.length + " " + "Unique: " + UniqueLinks
      );
    } else if (!options1 && !options2) {
      resolve(findLinksFiles);
    }
    reject("Error");
  });
}

module.exports = mdLinks;
