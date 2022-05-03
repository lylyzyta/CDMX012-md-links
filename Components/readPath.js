const fs = require("fs");
const path = require("path");

let buildDir = [];
function readPath(pathName) {
  let readDirect = fs.readdirSync(pathName);
  readDirect.forEach((element) => {
    let extnamePath = path.extname(element);
    if (extnamePath === ".md") {
      let routePath = path.resolve(path.join(pathName, element));
      buildDir.push(routePath);
    } else if (extnamePath != ".md") {
      let routePathDirectory = path.resolve(path.join(pathName, element));
      resolveDirectory(routePathDirectory);
    }
  }); 
  return buildDir;
}

function resolveDirectory(routePath) {
  let statPathName = fs.statSync(routePath);
  if (statPathName.isDirectory()) {
    readPath(routePath).forEach((element) => {}); //recursividad!!
  }
}

module.exports = readPath;
