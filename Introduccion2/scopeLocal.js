/* Local Scope o Variables Locales
    -Son las variables declaradas dentro una funcion
    -Solo podemos acceder a ellas desde la funcion
*/
var numero = 1;

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;

    console.log(`${nombre} tiene ${numero} letras`);

    var funcionAnidad = () => {
        console.log(numero);
    }
    funcionAnidad();
}

obtenerNumeroLetras('Marco');
//console.log(numero);