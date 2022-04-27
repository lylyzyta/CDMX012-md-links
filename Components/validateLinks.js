const path = require('path');
const fs = require('fs');
 const https = require('https');
const colors = require('colors');


function validateLinks(arrayOutput){
  https.get(arrayOutput.href, function(res) {
  let arrayOuputStatus={
  ...arrayOutput,
  "statusCode": res.statusCode,
  "message": res.statusMessage,
  }
  console.log('********************************************************'.magenta);
  console.log(arrayOuputStatus);
}).on('error', function(e) {
  console.error(e);
});
}
module.exports = validateLinks;