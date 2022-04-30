    const path = require('path');
    const fs = require('fs');
    const validateLinks = require('./validateLinks.js');
    const { url } = require('inspector');
    
    
    function findLinks(readContentFile, routePath){
        let findMdLinks = /[^!]\[.+?\]\(.+?\)/g
        let arrayOutput=[];
        const mdFileContents = readContentFile
        const matchesLink = mdFileContents.match(findMdLinks);//saco todos los []con url
            matchesLink.forEach((element) => {
            let validateUrl = element.match(/https*?:([^"')\s]+)/) ;//saco http y https
            let validatetext = element.match(/\[(?<text>.+)\]/);//saco texto
            if(validateUrl != null){
            arrayOutput.push({
            "href": validateUrl[0],
            "text": validatetext[1],
            "file": routePath,
            })
            }
        }); 
    return arrayOutput
    }

   
  

module.exports = findLinks;