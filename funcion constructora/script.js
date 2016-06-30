// Funcion constructora (clase)
var Clase = function() {
    // Propiedad
    this.name = "Felix";

    // Metodos
    this.setName = function(name) {
        this.name = name;
    }

    this.getName = function() {
        return this.name;
    }
}

// Instancear objetos
var obj1 = new Clase();
var obj2 = new Clase();

obj1.setName("Pablo");

document.write(obj1.getName() + '<br>');
document.write(obj2.getName());