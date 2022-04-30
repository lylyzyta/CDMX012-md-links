const axios = require("axios").default;
const https = require("https");

function validateLinks(arrayOutput) {
  //let arrayOuputStatus = [];
  let linksFiles = [];
  arrayOutput.forEach((element) => {
    linksFiles.push(element.href);
  });

  https.get(arrayOutput.href, function(res) {
    //.then((res) => {
      let arrayOuputStatus = {
        ...arrayOutput,
        status: res.statusCode,
        OK: "OK",
      };
      console.log(arrayOuputStatus);});
    //}) //.then

   /*  .catch((err) => {
      if (err.response) {
        let arrayOuputStatus = {
          ...arrayOutput,
          status: err.response.status,
          ok: "fail",
        };
        return arrayOuputStatus;
      } else {
        let arrayOuputStatus = {
          ...arrayOutput,
          status: "Deprecated",
          ok: "fail",
        };
        return arrayOuputStatus;
      }
    }); */
}
module.exports = validateLinks;
