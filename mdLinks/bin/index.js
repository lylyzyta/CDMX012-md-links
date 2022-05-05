#!/usr/bin/env node

const mdLinks = require('../../components/mdLinks.js');
//onst yargs = require("yargs");
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
//console.log(argv)

/* 
if (argv.validate) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
} */

 if(!yargs.argv.validate && !yargs.argv.stats){
 mdLinks()
  .then(function (mensaje) {
    console.log(mensaje);
  })
  .catch(function (error) {
    console.log(error);
  });


/* }else if(yargs.argv.validate && !yargs.argv.stats){
  mdLinks(process.argv[2], true, false)
  .then(function (mensaje) {
    console.log(mensaje);
    //console.log("soy validate true")
    
  })
  .catch(function (error) {
    console.log(error);
  });
}else if(!yargs.argv.validate && yargs.argv.stats){
  mdLinks(process.argv[2], false, true)
  .then(function (mensaje) {
    console.log(mensaje);
    //console.log("soy stats true ")
    
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
  }); */

