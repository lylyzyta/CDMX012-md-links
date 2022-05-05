const fs = require("fs");

function readFile(routePath) {
    const arrayroutePath = routePath.map(function (element) {
    let readContentFile = fs.readFileSync(element, "utf-8");
    return readContentFile;
  });
  return (arrayroutePath);
}

module.exports = readFile;
