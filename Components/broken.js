const axios = require("axios").default;

function broken(arrayOutput) {
    let contentError = [];
    let i = 0;
    do {
       return axios
      .get(arrayOutput.href)
        .then((response) => {
            return(response.status);
         })
         .catch(err => {
             const contentError = err.response.status;
             return (contentError);
            });
            
         
                  
        i++
     }while (i < arrayOutput.length)
    }

  
  

  
  module.exports = broken;