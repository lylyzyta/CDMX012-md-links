const { array } = require("yargs");

const axios = require("axios").default;

function validateLinks(arrayOutput) {
//let i = 0;
//do{
// let mapPromise = arrayOutput.map((i)=>{
   return axios
      .get(arrayOutput.href)
      .then((response) => {
        const arrayOutputStatus = {
          ...arrayOutput,
          statusCode: response.status,
          OK: response.statusText,
        };
        //console.log(arrayOutputStatus);
        return arrayOutputStatus;
      })
      .catch((err) => {
        if (err.response) {
          const arrayOutputStatus = {
            ...arrayOutput,
            status: err.response.status,
            ok: "fail",
          };
          //console.log(arrayOutputStatus);
         return arrayOutputStatus;
        } else {
          const arrayOutputStatus = {
            ...arrayOutput,
            status: "Deprecated",
            ok: "fail",
          }
          //console.log(arrayOutputStatus);
          return arrayOutputStatus;
        }
    
      
    });

   //let newResult = Promise.all(validateLinks)
    //console.log ('soy', newResult);
    //return newResult;
  //}); 
   // i++
  //}while(i<arrayOutput.length)
      
    }



module.exports = validateLinks;
