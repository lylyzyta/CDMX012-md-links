//si hiciste tu tarea recibiras un premio
/* let p = new Promise(function(resolve, reject){
    let suma = 2 + 6;
    if (suma === 8){
        resolve("Correcto")
    }else{
        reject("Error")
    }
});
p.then(function(mensaje){
    console.log(mensaje)
}).catch(function(error){
    console.log(error)
})

function mdLinks(){
    return new Promise(function(resolve, reject){
    let suma = 2 + 6;
    if (suma === 8){
        resolve("Correcto")
    }else{
        reject("Error")
    }
});
}

mdLinks().then(function(mensaje){
    console.log(mensaje)
}).catch(function(error){
    console.log(error)
}) */

/* function mdLinks(){
    return new Promise(function(resolve, reject){
    let isHomeworkDone = false; 
    if (isHomeworkDone === true){ //si hago mi tarea
        let phone ={
            color: "negro",
            brand: "iPhone"
        } 
        resolve(phone)
    }else{
        reject("Error")
    }
});
}

mdLinks().then(function(mensaje){
    console.log(mensaje)
}).catch(function(error){
    console.log(error)
})  */

const pathName = process.argv[0];
const options = process.argv[2];



 function mdLinks(){
    return new Promise(function(resolve, reject){
      if (options === false){ //si hago mi tarea
        let arrayOutput={
            "href": '1',
            "text": '2',
            "file": '3',
            }; 
        return resolve(arrayOutput);

    } else if(options === true){ 
          let arrayOutputval={
            "href": 'validate',
            "text": 'validate',
            "file": 'validate',
            "status": 'validate',
            "ok": 'validate',
            }; 
        return resolve(arrayOutputval);
        
        } else{
        reject("Error")}
});
}

mdLinks(process.argv[2]).then(function(mensaje){
    console.log(mensaje)
}).catch(function(error){
    console.log(error)
}) 

