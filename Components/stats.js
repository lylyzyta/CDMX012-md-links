


/* function stats(linksObj){
    let unique = [...new Set(linksObj.map(item => item.href))];
    return unique;
  }
  
  function brokenLinks(linksObj){
    const validateLinks = linksObj.map(link => validateLink(link));
  
    return Promise.all(validateLinks)
    .then((result)=>{
      const broken = result.filter(link => link.ok === 'fail');
      return broken.length;
    }) 
  }
  
  module.exports = {stats, brokenLinks} */

  function stats(objValidateLinks) {
    console.log(objValidateLinks);} 
 /*    let arrayhref = (arrayOutputStatus.map((element) => element.href));
      arrayOutputStatus.forEach((element) => {
        arrayhref = element.href;
        //let arrayUnique = 
             let ObjOutputStats = {
             Total: arrayhref.length,
              }

              console.count(arrayhref);      
   
      })
   
   } */ 


   module.exports = stats;

 // $ md-links ./some/example.md --stats
//  Total: 3
//  Unique: 3
  
