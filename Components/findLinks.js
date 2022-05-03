function findLinks(readContentFile, routePath) {
  // console.log("soy findLinks", readContentFile)
  let contentObject = [];
  let i = 0;
  do {
    let findMdLinks = /[^!]\[.+?\]\(.+?\)/g;
    
    const matchesLink = readContentFile[i].match(findMdLinks); //saco todos los []con url
    i++;
    //console.log(matchesLink);
    //matchesLink.forEach((element) => {
    let z = 0;
    do {
      let validateUrl = matchesLink[z].match(/https*?:([^"')\s]+)/); //saco http y https
      let validatetext = matchesLink[z].match(/\[(?<text>.+)\]/); //saco texto
      let arrayOutput = {
        href: validateUrl[0],
        text: validatetext[1],
        //"file": routePath[i],
      };
      contentObject.push(arrayOutput); 
      

      z++;
    } while (z < matchesLink.length);
  } while (i < readContentFile.length);
  return (contentObject);
  //return(arrayOutput);
}

module.exports = findLinks;
