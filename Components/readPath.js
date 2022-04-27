const fs = require('fs');
const path = require('path');
const readFile = require('./readFile.js');


function readPath(pathName){
  let routePath;
  let buildDir = [];
  let readDirect = fs.readdirSync(pathName);
  readDirect.forEach((element)=>{ 
    routePath = path.resolve(path.join(pathName, element));
    readFile(routePath);
    let statPathName = fs.statSync(routePath);
    if(statPathName.isDirectory()){
      readPath(routePath);//recursividad!!
    }else if(statPathName.isFile()){
        buildDir.push(routePath);
      }
  })
   
}   
module.exports = readPath;

