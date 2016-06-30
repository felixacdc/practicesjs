/*
Se trata de una funcion declarada dentro de otra funcion y hace uso de las variables que se encuentran en su entorno de desarrollo.

Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado.
*/

/*function operacion()
{
    var valor = 0;

    var incrementar = function() {
        return valor += 3;
    }

    return incrementar();
}

var ejecutar = operacion();

document.write(ejecutar + '<br>');
document.write(ejecutar + '<br>');
document.write(ejecutar);*/

var inicio = function() {
    // Propiedad privada
    var valor = 0;

    // Metodo privado
    function cambiarValor(num)
    {
        valor += num;
    }

    // Propiedades y metodos publicos (Para crear estos es necesario colocarlos en return como json)
    return {
        incrementar: function() {
            cambiarValor(3);
        },
        disminuir: function() {
            cambiarValor(-3);
        },
        mostrarValor: function() {
            return valor;
        }
    }

}

var obj1 = inicio();

obj1.incrementar();
obj1.incrementar();
document.write(obj1.mostrarValor() + '<br>');
obj1.disminuir();
// obj1.cambiarValor(7); // Da error
document.write(obj1.mostrarValor());
