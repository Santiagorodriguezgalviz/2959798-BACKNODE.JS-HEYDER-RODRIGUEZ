function convertirMinusculas(array, callback) {
    const arrayMinusculas = array.map(item => item.toLowerCase());
    callback(arrayMinusculas);
}

function imprimirArrayMinusculas(arrayMinusculas) {
    console.log("Array en minúsculas: " + arrayMinusculas);
}

const miArray = ["PEPE", "PSICOPATA", "RAULITO"];
convertirMinusculas(miArray, imprimirArrayMinusculas);
