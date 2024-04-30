function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

function imprimirResultado(resultado) {
    console.log("El resultado de la suma es: " + resultado);
}

// Llamamos a la función sumar con los parámetros 10 y 7, y en lugar de pasar imprimirResultado como callback, pasamos una función anónima.
sumar(10, 5, function(resultado) {
    console.log("El resultado de la suma modificada es: " + resultado);
});