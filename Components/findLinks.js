const path = require('path');
const fs = require('fs');
const readPath = require('./readPath.js');


const findLinks = (readContentFile, routePath) => {
    //console.log(readContentFile, routePath);
    let arrayContentOutput = [];
    arrayContentOutput.push(readContentFile);
    //console.log(arrayContentOutput);
    //const findMdLinks = /\[([^\[]+)\](\(.*\))/
      const findMdLinks = /\[(?<text>.+)\]\((?<url>[^ ]+)\)/
    const mdFileContents = readContentFile
    const matchesLink = mdFileContents.match(findMdLinks);
    //console.log(matchesLink[1]);
    let arrayOutput={
        "href": matchesLink[2],
        "text": matchesLink[1],
        "file": routePath,
    };
    console.log(arrayOutput); 
  

    /*  const singleMatch = /\[([^\[]+)\]\((.*)\)/
    for (let i = 0; i < matchesLink.length; i++) {
    let text = singleMatch.exec(matchesLink[i]) 
     
    //console.log(`Match #${i}:`, text)
    console.log(`text: ${text[1]}`)
    console.log(`link: ${text[2]}`) 
    console.log('file:', routePath); */
    
} 



module.exports = findLinks;