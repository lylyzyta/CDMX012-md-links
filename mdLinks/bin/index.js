#!/usr/bin/env node

const mdLinks = require('../../components/mdLinks.js');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
//console.log(argv)
//mdLinks .\FilesL1_1\FilesL2\ --validate --stats

/* if (argv.validate) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
} */
 if(argv.validate && argv.stats){
  mdLinks()
  .then(function (mensaje) {
    console.log(mensaje);
  })
  .catch(function (error) {
    console.log(error);
  }); 
} else if(argv.validate && !argv.stats){
  mdLinks()
  .then(function (mensaje) {
    console.log('index', mensaje);
  })
  .catch(function (error) {
    console.log(error);
  }); 
}else if(!argv.validate && argv.stats){
  mdLinks()
  .then(function (mensaje) {
    console.log(mensaje);
  })
  .catch(function (error) {
    console.log(error);
  }); 
}else if(!argv.validate && !argv.stats){
  mdLinks()
  .then(function (mensaje) {
    console.log(mensaje);
  })
  .catch(function (error) {
    console.log(error);
  }); }

