const https = require("https");
function broken(arrayOutput) {
  let containerBroken = [];
  let i = 0;
  do {
    let arrayBroken = [];
    https.get(arrayOutput[i].href, (res) => {
      if (res.statusCode > 399) {
        let respBroken = res.statusCode;
      }
    });

    i++;
  } while (i < arrayOutput.length);
}
module.exports = broken;
