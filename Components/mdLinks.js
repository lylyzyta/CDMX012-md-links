const path = require('path');
const fs = require('fs');
//const readDirectory = require('./realDirectory');

/*const mdLinks = (pathName) => {
    if (!pathName){
      console.log('No existe archivo');
     }else{
        readDirectory(pathName);
      }
  }*/
  function mdLinks(pathName){
  return new Promise(function(resolve, reject){
  
var promise = new Promise(function(resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks"
  if(x === y) {
    resolve();
  } else {
    reject();
  }
});
   
promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });
/*   mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error); */

  
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

  const readFile = (file) => {
    let arrayFiles = [];
    arrayFiles.push(file);
    console.log(arrayFiles);
    arrayFiles.forEach((element) => {
        if (path.extname(element) === '.md'){
            let readContentFile = fs.readFileSync((file), 'utf-8');
            findLinks(readContentFile, arrayFiles);
        }else{
            //console.log('No es archivo md');
        }
    });
}

  const findLinks = (file, pathNames) => {
    const findMdLinks = /\[([^\[]+)\](\(.*\))/
    const mdFileContents = file
    const matchesLink = mdFileContents.match(findMdLinks);
    //console.log(matchesLink);
    //console.log('href: ',matchesLink[2]);
    //console.log('text:  ',matchesLink[1]);
    //console.log('url:  ',matchesLink[3]);
     //matches.forEach((element) => {
      //console.log('links', matches)
      //console.log('text: ', matches.text );
   // });
  }

   /*  const singleMatch = /\[([^\[]+)\]\((.*)\)/
    for (let i = 0; i < matches.length; i++) {
    let text = singleMatch.exec(matches[i]) 
     
    //console.log(`Match #${i}:`, text)
    console.log(`text: ${text[1]}`)
    console.log(`link: ${text[2]}`) 
    console.log(pathNames);
    
} */
//Option for read Level  '.'
//Option for read Level 1 './filesL1_1' --- total 8 archivos  -- 6.md / 2.txt / 9 links 
//Option for read Level 2 './filesL1_1/filesL2' total 
//Option for read Level 3 './filesL1_1/filesL2/filesL3' total 2 archivos -- 2.md -- 4 links, 3 ok, 1 break 
//Option for read Level 4 './filesL1_1/filesL2/filesL3/filesL4'  --- total 1 archivo--1 .md -- 1 link, 1 ok, 0 break

mdLinks('./FilesL1_1');
  