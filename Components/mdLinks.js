const path = require('path');
const fs = require('fs');
const readPath = require('./readPath.js');

const mdLinks = (pathName, options) => {
  return new Promise((resolve, reject) => {
    readPath(pathName, (err, data) => {
      if (err) {
        reject(err) 
        return     
      }
      resolve(data)
      return
    })
  });
}


  /* mdLinks().then((pathName) => {
    let returnPath = readPath(pathName);
    console.log(returnPath);

    // => [{ href, text, file }, ...]
  })
  .catch(console.error); */

  mdLinks('../FilesL1_1/FilesL2')

  
  