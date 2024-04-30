// Función que simula una operación asíncrona de multiplicación
function multiplicacionAsincrona(num1, num2) {
    return new Promise((resolve, reject) => {
        // Simulamos un tiempo de espera aleatorio entre 1 y 3 segundos
        const tiempoDeEspera = Math.random() * 2000 + 1000;
        setTimeout(() => {
            // Multiplicamos los dos números
            const resultado = num1 * num2;
            // Resolvemos la Promise con el resultado
            resolve(resultado);
        }, tiempoDeEspera);
    });
}

// Uso de la Promise
console.log("Iniciando operación de multiplicación asíncrona...");
const numero1 = 5;
const numero2 = 5;
multiplicacionAsincrona(numero1, numero2)
    .then(resultado => {
        console.log(`La multiplicación de ${numero1} y ${numero2} es:`, resultado);
    })
    .catch(error => {
        console.error("Se ha producido un error durante la operación de multiplicación asíncrona:", error);
    });
