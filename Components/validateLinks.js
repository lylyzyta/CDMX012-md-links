const axios = require("axios").default;
const https = require('https');


function validateLinks(arrayOutput) {
    let contentObjectValidate = [];
    let i = 0;
    do {
       return axios
      .get(arrayOutput.href)
        .then((response) => {
            const arrayOutputStatus = {
               ...arrayOutput,
                statusCode: response.status,
                OK: response.statusText,
            }
            return arrayOutputStatus;
        
        })
        .catch(err => {
          if (err.response) {
            const arrayOutputStatus = {
                ...arrayOutput,
              'status': err.response.status,
              'ok': 'fail',
            }
            return arrayOutputStatus;
          } else {
            const arrayOutputStatus = {
                ...arrayOutput,
              'status': 'Deprecated',
              'ok': 'fail',
            }
            return arrayOutputStatus;
          }
         
        });
         i++
     }while (i < arrayOutput.length)
  
}

module.exports = validateLinks;
