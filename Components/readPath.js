const fs = require('fs');
const path = require("path");
const readFile = require('./realFile');

const readDirectory = (pathName) => {
    let buildDir = [];
    let readDirect = fs.readdirSync(pathName);
      readDirect.forEach((element)=>{ 
        let routePath = path.join(pathName, element);
          readFile(routePath);
          let statPathName = fs.statSync(routePath);
            if(statPathName.isDirectory()){
              readDirectory(routePath, buildDir);//recursividad!!
            }else if(statPathName.isFile()){
              buildDir.push(routePath);
            }
      })
    }


    module.exports = readDirectory;

