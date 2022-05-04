#!/usr/bin/env node

const mdLinks = require('../../components/mdLinks.js');
const yargs = require("yargs");
console.log(process.argv[2])

 if(!yargs.argv.validate && !yargs.argv.stats){
  mdLinks(process.argv[2], false, false)
  .then(function (mensaje) {
    console.log(mensaje);
    console.log("soy stats y validate false");
  })
  .catch(function (error) {
    console.log(error);
  });

}else if(yargs.argv.validate && !yargs.argv.stats){
  mdLinks(process.argv[2], true, false)
  .then(function (mensaje) {
    console.log(mensaje);
    console.log("soy validate true")
    
  })
  .catch(function (error) {
    console.log(error);
  });
}else if(!yargs.argv.validate && yargs.argv.stats){
  mdLinks(process.argv[2], false, true)
  .then(function (mensaje) {
    console.log(mensaje);
    console.log("soy stats true ")
    
  })
  .catch(function (error) {
    console.log(error);
  });
}else if(yargs.argv.validate && yargs.argv.stats){
  mdLinks(process.argv[2], true, true )
  .then(function (mensaje) {
    console.log(mensaje);
    console.log("soy validate y stats true ")
    
  })
  .catch(function (error) {
    console.log(error);
  });
} 