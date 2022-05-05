const axios = require("axios").default;

function broken(arrayOutput) {
   let i = 0;
    do {
       return axios
       .get(arrayOutput.href)
          .catch(function (error) {
          if (error.response) {
           //console.log(error.response.data);
     return ((error.response.status));
      //console.log(error.response.headers);
    } else if (error.request) {
      //console.log(error.request);
    } else {
      //console.log('Error', error.message);
    }
    //console.log(error.config);
  });

        i++
      }while (i < arrayOutput.length)
      
    }  
    Promise.resolve(broken)


module.exports = broken;