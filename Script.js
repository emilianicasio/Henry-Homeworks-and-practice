
//Escribir una funcion que recibe un numero y lo transforma en binario, en formato string
let resultado = "";
function decimalABinario(numero) {
    while (numero !== 0) {
        binario = numero % 2;
        numero = Math.floor(numero / 2);
        resultado = binario + resultado;
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
        index = index + 1;
    }
    return total;
};
