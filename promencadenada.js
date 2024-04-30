function enviarCorreo(destinatario, mensaje) {
    //se usa para crear una nueva instancia del objeto Promise.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulamos un envío exitoso del correo electrónico si el destinatario es válido
            if (destinatario && mensaje) {
                resolve('Correo electrónico enviado correctamente a ' + destinatario);
            } else {
                reject('No se pudo enviar el correo electrónico');
            }
        }, 2000); // Simulamos una demora de 2 segundos en el envío
    });
}

// Ejecución de las promesas encadenadas para enviar un correo electrónico
console.log('Iniciando proceso de envío de correo electrónico...');
enviarCorreo('rodriguezsanti95gmail.com', 'Hola, ¿cómo estás?')
    .then(resultado => {
        console.log(resultado);
        return 'Tarea completada';
    })
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.error('Error:', error);
    });
