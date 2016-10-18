/*var miLibreria = {
    x: "Mi libreria",
    show: function() {
        console.log(this.x);
    }   
}*/

var miLibreria = (function() {
    var x = "Mi libreria";
    return {
        show: function() {
            console.log(x);
        }
    }   
})();

//var y = miLibreria();