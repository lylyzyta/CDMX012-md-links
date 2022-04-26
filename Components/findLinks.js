const path = require('path');
const fs = require('fs');
const validateLinks = require('./validateLinks.js');
const { url } = require('inspector');


function findLinks(readContentFile, routePath){
 let findMdLinks = /[^!]\[.+?\]\(.+?\)/g
const mdFileContents = readContentFile
const matchesLink = mdFileContents.match(findMdLinks);//object
  return   matchesLink.forEach((element) => {
    let validateUrl = element.match(/https*?:([^"')\s]+)/) ;
    let validatetext = element.match(/\[(?<text>.+)\]/);
    if(validateUrl != null){
    let arrayOutput={
    "href": validateUrl[0],
    "text": validatetext[1],
    "file": routePath,
    }; 
    console.log(arrayOutput);
    }
});

}



module.exports = findLinks;