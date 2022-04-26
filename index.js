
/* module.exports = () => {
  // ...
}; */
const colors = require('colors');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const mdLinksPath = (file) => {
console.log('*************************************PATH***********************************************'.magenta);
const pathObj = path.normalize(file);
console.log('Hola soy pathObj', pathObj);
const pathVerify = path.dirname(file);
console.log('dirname:', pathVerify);
const pathBase = path.basename(file);
console.log('basename:', pathBase);
const pathExt = path.extname(file);
console.log('extname: ', pathExt);
const pathResolve = path.resolve(file);
console.log('resolve:', pathResolve);
const pathAbsolute = path.isAbsolute(pathResolve);
console.log('isAbsolute:', pathAbsolute);
};
 mdLinksPath("./files/files__"); 

  const mdLinks = (file) => {
    if (!file){
      console.log('No existe archivo');
     }else{
        existPath(file);
      }
  }

  const existPath = (file) => {
    if(!path.extname(file)) {
      console.log(file + ' es un directorio');
      readDirect(file);
    }else{
    readExt(file);
    }
  } 

    const readDirect = (file) => {
    const readDir = fs.readdirSync(file);
    console.log(readDir);
    let notExtFile = readDir.filter(element => !path.extname(element));
    readSubDirect(notExtFile); 
    }

    //readDirect('./files/files__');

   const readSubDirect = (file) => {
    // console.log('soy subdirec: ', file);
    //let addNotExtFiles = './files/';
    let addNotExtFiles = '';
    addNotExtFiles+=file;
    console.log(addNotExtFiles);
    console.log(path.isAbsolute(addNotExtFiles));
    //const readSubDir = fs.readdirSync(addNotExtFiles);
    //console.log('hola', readSubDir);
  } 

  
    mdLinks('./files');

    

    /* let convDir = path.resolve(addNotExtFiles)
      console.log('soy ', convDir); 
      
    } */

      //mdLinks('./files__');


          /*let addNotExtFiles = './';
      addNotExtFiles+=file;
      console.log((addNotExtFiles))
      const readSubDir = fs.readdirSync(addNotExtFiles);
    console.log('hola', readSubDir);
    
    addNotExtFiles += file;
    let buildDir = path.join(file, (addNotExtFiles));
    
    console.log(buildDir);
    readDirect(buildDir);
 

 function readDirect(file){
 const readDir = fs.readdirSync(file);
  console.log('+++++++++++++++STEP 1.ReadDirectory+++++++++++++++++++++'.green);
  console.log(readDir);
  readDir.forEach(element => {
    if(path.extname(element) === ".md"){
      console.log('');
      console.log('');
      console.log('+++++++++++++++STEP2. ReadExtension++++++++++++++++++++++'.blue);
      console.log('Es un archivo con extensión: '.blue + path.extname(element).blue + '  ' + element.blue + ' '  + '-->Si lo leeré'.blue );
      console.log('');
      console.log('++++++++++++++++STEP3. ReadFile+++++++++++++++++++++++++++'.magenta); 
      console.log(' Lee archivo: '.magenta + fs.readFileSync(('./files/files__/' + element), 'utf-8').magenta);
      console.log('');
      console.log('++++++++++++++++STEP4. SearchLinks++++++++++++++++++++++++'.cyan); 
      console.log('');
    }else{
      console.log('');
      console.log('+++++++++++++++STEP2. ReadExtension++++++++++++++++++++++'.blue);
      console.log('Es un archivo con extensión: '.gray + path.extname(element).gray + '  ' + element.gray + ' ' + '-->No lo leeré'.gray )}
   });recursiva(readDir); 
} 

readDirect('file3_1.md') 
  

function recursiva (filesArray){
  if (filesArray.length !=0 ){
    const firstFile = filesArray[0];
   // console.log('-------------Función Recursiva----------------'.white);
   // console.log(firstFile);
    filesArray.shift();
    recursiva(filesArray);
  }
}

 function readFile(file){
  const showFile = fs.readFileSync((file), 'utf-8');
  console.log('**************************ReadFile*****************************************************'.cyan);
  console.log(showFile);
} 

 

 if(path.extname() === 'md'){
  console.log('Es un archivo md');
  }else if(path.extname(filesArray) != ".md"){
  console.log('No es un archivo md')}

/*   mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error); */


  