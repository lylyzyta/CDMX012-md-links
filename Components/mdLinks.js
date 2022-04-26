const path = require('path');
const fs = require('fs');
const readPath = require('./readPath.js');


 const mdLinks = (pathName) => {
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
  
  mdLinks('../FilesL1_1/FilesL2');

 /*  .then(data => console.log(data))
  .catch(err => {    
      if(err.code === 'ERR_INVALID_ARG_TYPE'){
        console.log('Not path found');
      } else if(err.code === 'ENOENT'){
        console.log('Invalid path');
      }
    }); */