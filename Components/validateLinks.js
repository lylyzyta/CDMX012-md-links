const axios = require("axios").default;

function validateLinks(arrayOutput) {
  const arrayOutputStatus1 = arrayOutput.map((element) => {
    return axios
      .get(element.href)
      .then((response) => {
        const arrayOutputStatus = {
          ...element,
          statusCode: response.status,
          OK: response.statusText,
        };
        return arrayOutputStatus;
      })
      .catch((err) => {
        if (err.response) {
          const arrayOutputStatus = {
            ...element,
            status: err.response.status,
            ok: "fail",
          };
          return arrayOutputStatus;
        } else {
          const arrayOutputStatus = {
            ...element,
            status: "Deprecated",
            ok: "fail",
          };
          return arrayOutputStatus;
        }
      });
  });
  return Promise.all(arrayOutputStatus1);
}
module.exports = validateLinks;
