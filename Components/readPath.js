const fs = require('fs');
const path = require('path');


function readPath(pathName){
  let routePath;
  let buildDir = [];
  let readDirect = fs.readdirSync(pathName);
  readDirect.forEach((element)=>{ 
    routePath = path.resolve(path.join(pathName, element));
    //console.log('en readPath', routePath);
    let statPathName = fs.statSync(routePath);
    if(statPathName.isDirectory()){
      readPath(routePath).forEach((element)=>{
        buildDir.push(element)});//recursividad!!
    }else if(statPathName.isFile()){
      buildDir.push(routePath);
    }
  })
  return buildDir;
} 
module.exports = readPath;

