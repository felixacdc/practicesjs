/*var miLibreria = {
    x: "Mi libreria",
    show: function() {
        console.log(this.x);
    }   
}*/

var miLibreria = (function(x_externa) {
    var x = "Mi libreria";
    
    var show = function() {
            console.log(x_externa + ' - Mi X: ' + x);
        }
    return {
        show: show
    }   
})(x);

//var y = miLibreria();