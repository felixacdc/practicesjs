var inicio = function(valor, callback) {
    if ( typeof callback === 'function') {
        callback(valor);
    } else {
        console.log(valor);
    }
}

inicio("Paulo", function(valor) {
    console.log("Bienvenido " + valor);
});

inicio('Felix', 'no funcion');