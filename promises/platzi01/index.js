const fs = require('fs')

/* Ecmascript 5 */
/*fs.readFile('./lorem.txt', function (err, content) {
    fs.writeFile('./cantidad.txt', content.length, function (err) {
        console.log(content.length) ;
    });
});*/

var readFile = name => new Promise((resolve, reject) => {
   fs.readFile(name, (err, content) => {
       resolve(content);
   });
});

var writeFile = (name, content) => new Promise((resolve, reject) => {
    fs.writeFile(name, content, (err) => {
        resolve();
    });
});

readFile('./lorem.txt')
    .then( content => writeFile('./cantidad.txt', content.length))