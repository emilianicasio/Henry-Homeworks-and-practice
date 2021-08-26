//*********** MODULO 1 **************/
//Escribir una funcion que recibe un numero y lo transforma en binario, en formato string
let resultado = "";
function decimalABinario(numero) {
    while (numero !== 0) {
        binario = numero % 2;
        numero = Math.floor(numero / 2);
        resultado = binario + resultado;  // tiene que ser asi y no al reves (resultado + binario) porq estoy concatenando, no sumando. me las va a ordenar en el orden que le diga
    }
    return (resultado)
};

//Escribir una funcion que un numero binario (formato string) y lo transforma en decimal 

function binarioADecimal(string) {
    let index = 0;
    let total = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        let resultado = Math.pow(string[i] * 2, index);
        index = index + 1;
        total = total + resultado;

    }
    return total;
};

// otra opcion 

function binarioADecimalbis(string) {
    let index = 0;
    let total = 0;
    for (let i = string.length - 1; i >= 0; i--) {
        total += string[i] * 2 ** index;
        index++;
    }
    return total;
};

//*********** MODULO 2 **************/

//que imprime el siguiente codigo

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    var x = 10;
    console.log(x);       // 10      
    console.log(a);       //8    
    var f = function (a, b, c) {
        b = a;
        console.log(b);// 8
        b = c;
        var x = c;
    }
    f(a, b, c);
    console.log(b); //9
}

c(8, 9, 10);
console.log(b); //10
console.log(x); //1


//que imprime el siguiente codigo

console.log(bar);  //undefined
console.log(baz);  //error baz is not defined
foo();
function foo() {
    console.log('hola')   //'hola'
};
var bar = 1;
baz = 2;

//que imprime el siguiente codigo

var instructor = 'Tony';

if (true) {
    var instructor = 'Franco';
}

console.log(instructor);    // Franco . Porque el if esta declarado en el global. si estuviera dentro de una funcion no podriamos acceder


//que imprime el siguiente codigo

var instructor = 'Tony';
console.log(instructor);  //Tony
(function () {
    if (true) {
        var instructor = 'Franco';
        console.log(instructor);   //Franco
    }
})()   // declaramos la funcion y la invocamos inmediatamente

console.log(instructor);  // Tony

//que imprime el siguiente codigo

var instructor = 'Tony';
let pm = 'Franco';

if (true) {
    var instructor = 'The flash';
    let pm = 'Reverse flash'
    console.log(instructor);   // The flash
    console.log(pm);   // Reverse flash
}

console.log(instructor); // The Flash porq es Var, entonces puedo acceder. 
console.log(pm);  // franco      ES LET, NO PUEDO ACCEDER Y ME QUEDO CON LA GLOBAL

//cual es el resultado de estas operaciones

6 / '3' // 2
"2" * "3" // 6
4 + 5 + 'px' // "9px"
"$" + 4 + 5 // "$45" (no se porq)
"4" + 2 // "42"
"4px" + 2 // "4px2"
7 / 0 // 
{ } [0] //
parseInt('09') // 9
5 && 2 // 2
2 && 5 // 5
5 || 0  //5
0 || 5  //5
[3] + [3] - [10] //  23    PRIMERO concatena "33" -[10] 
3 > 2 > 1  //  false.... 
[] == ![]  //  true


//cual es el output luego de ejecutar este codigo

function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
    var a = 1;
    function foo() {
        return 2;
    }
}
test();

//cual es el output luego de ejecutar este codigo

var snack = 'Meow Mix'
function getfood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;  // Undefined  // se hace hoisting porq es var// si fuera definida con let el resoltado seria Meow mix
}
getfood(false);

// this
var fullname = 'Juan Perez';
var obj = {
    fullname: 'Natalia Nerea',
    prop: {
        fullname: "Aurelio de Rosa",
        getFullname: function () {
            return this.fullname;
        }
    }
}
console.log(obj.prop.getFullname()); // Aurelio de Rosa
var test = obj.prop.getFullname(); // a test le asigno la funcion pero no la ejecuto 
                                   // test se convierte en una funcion que retorna this.fullname
console.log(test());// aca ejecuto la funcion test , pero no sabe que es this 
// undefined o error o juan perez, depende donde la hagas funcionar consola o node
                     
//Event loop= cual es el orden que se muestra en la consola

function printing() {      //
    console.log(1);
    setTimeout(function () { console.log(2); }, 1000);
    setTimeout(function () { console.log(3); }, 0);
    console.log(4);
}
printing();