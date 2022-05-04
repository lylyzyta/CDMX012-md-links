
const argv = require('yargs').argv;

if(argv.validate === true){
  console.log("eres validate true")
}else if(argv.stats === true)
{console.log("eres validate stats")
}else if(argv.validate.stats){
  console.log("eres validate y stats")}