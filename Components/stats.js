


/* function stats(linksObj){
    let unique = [...new Set(linksObj.map(item => item.href))];
    return unique;
  }
  
  function brokenLinks(linksObj){
    const validateLinks = linksObj.map(link => validateLink(link));
  
    return Promise.all(validateLinks)
    .then((result)=>{
      const broken = result.filter(link => link.ok === 'fail');
      return broken.length;
    }) 
  }
  
  module.exports = {stats, brokenLinks} */

const https = require("https");
const axios = require("axios").default;
const color = require("colors")

function stats(arrayOutput) {
  let arrayhref = arrayOutput.map(element => element.href)
  
  arrayOutput.forEach(element => {
     https.get(arrayhref.toString(), function(res) {
   
     let arrayOutputStatus = {
    ...element,
    "statusCode": res.statusCode,
    "message": res.statusMessage,
    }
    
    console.log(arrayOutputStatus);
  }).on('error', function(e) {
    console.error(e);
  });});
  } 
 
module.exports = stats;
