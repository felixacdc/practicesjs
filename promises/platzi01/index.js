const fs = require('fs')

/* Ecmascript 5 */
/*fs.readFile('./lorem.txt', function (err, content) {
    fs.writeFile('./cantidad.txt', content.length, function (err) {
        console.log(content.length) ;
    });
});*/

var readFile = name => new Promise((resolve, reject) => {
    console.log('Leyendo ' + name);
   fs.readFile(name, (err, content) => {
       if(err)
        return reject(err);
       
       console.log('Finalizó lectura de ' + name);
       resolve(content);
   });
});

var writeFile = (name, content) => new Promise((resolve, reject) => {
    fs.writeFile(name, content, (err) => {
        if(err)
            return reject(err);
        
        resolve();
    });
});

// Ejecuta al then cuando todas las promesas se han cumplido
/*Promise.all([
   readFile('./lorem.txt'),
    readFile('./cantidad.txt'),
    readFile('./index.js')
]).then(responses => console.log(responses.length));*/

// Ejecuta al then cuando la primera promesa se cumple despues ya no
Promise.race([
   readFile('./lorem.txt'),
    readFile('./cantidad.txt'),
    readFile('./index.js')
]).then(response => console.log(response.toString()));

/*readFile('./lorem.txt')
    .then( content => writeFile('./cantidad.txt', content.length))
    .catch(err => console.log('Hubo un error: ' + err));*/