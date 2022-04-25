const fs = require('fs');
const path = require("path");
const readFile = require('./readFile.js');


const readPath = (pathName) => {
    let buildDir = [];
    let readDirect = fs.readdirSync(pathName);
      readDirect.forEach((element)=>{ 
         let routePath = path.resolve(path.join(pathName, element));
          readFile(routePath);
          let statPathName = fs.statSync(routePath);
            if(statPathName.isDirectory()){
              readPath(routePath, buildDir);//recursividad!!
            }else if(statPathName.isFile()){
              buildDir.push(routePath);
            }
      })
    }

   
    module.exports = readPath;

