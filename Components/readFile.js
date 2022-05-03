const fs = require("fs");
const path = require("path");

function readFile(routePath) {
   //console.log (routePath);
    const arrayroutePath = routePath.map(function (element) {
    let readContentFile = fs.readFileSync(element, "utf-8");
    return readContentFile;
  });
  return (arrayroutePath);
}

module.exports = readFile;
