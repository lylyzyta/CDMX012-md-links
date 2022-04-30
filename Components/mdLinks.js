const process = require("process");
const path = require("path");
const fs = require("fs");
const readPath = require("./readPath.js");
const readFile = require("./readFile.js");
const findLinks = require("./findLinks.js");
const validateLinks = require("./validateLinks.js");

const pathName = process.argv[2];
const options = process.argv[3];

function miPromesa() {
  return new Promise((resolve, reject) => {
    if (pathName != null) {
      let readPathName = readPath(pathName);
      let arrayOutNoOptions=[];
      let arrayOutValidate=[];
      readPathName.forEach((element) => {
         if (path.extname(element) === ".md") {
          let readFileName = readFile(element);
          //OKconsole.log(readFileName);
          if (!options) {
             arrayOutNoOptions.push(findLinks(readFileName, element));
             return resolve(arrayOutNoOptions); //ok no options
          } else if(options === '--validate') {
            arrayOutNoOptions = (findLinks(readFileName, element));
            return resolve(validateLinks(arrayOutNoOptions)); 
           //arrayOutValidate.push(validateLinks(arrayOutNoOptions));
            //let validatestatusLinks = validateLinks(arrayOutValidate);
            //return resolve(arrayOutValidate);
          } else if (options === "--stats") {
          }
        }
      });
    } else {
      reject(err);
    }
  });
}

miPromesa()
  .then(function (mensaje) {
    console.log("soy mdlinks", mensaje);
  })
  .catch(function (error) {
    console.log(error);
  });

/* options:

Con validate:false :
href: URL encontrada.
text: Texto que aparecía dentro del link (<a>).
file: Ruta del archivo donde se encontró el link.

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

Con validate:true :
href: URL encontrada.
text: Texto que aparecía dentro del link (<a>).
file: Ruta del archivo donde se encontró el link.
status: Código de respuesta HTTP.
ok: Mensaje fail en caso de fallo u ok en caso de éxito.


mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google

$ md-links ./some/example.md --stats
Total: 3
Unique: 3

$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
 */
