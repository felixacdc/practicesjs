// Crear un objeto

// Objeto en formato Json
var obj = {
    nombre: "Felix",
    mostrarNombre: function() {
        return this.nombre;
    }
}

// Objeto con un array
var obj2 = new Array(); // Metodo normal
var obj3 = []; // Metodo abreviado

// Formas de asignar valor
// obj3['nombre'] = "Felix";
obj3.nombre = "Felix";
obj3.mostrarNombre = function() {
    return this.nombre;
}

// *********************************************
var Clase = {
    nombre: "Felix",
    mostrarNombre: function() {
        return this.nombre;
    }
}

var object1 = Clase;
var object2 = Clase;

object2.nombre = "Lucas";

document.write(object1.mostrarNombre() + '<br>');
document.write(object2.mostrarNombre());