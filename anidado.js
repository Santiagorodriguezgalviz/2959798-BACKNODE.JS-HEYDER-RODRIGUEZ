function descargarImagen(callback) { 
    console.log("Descargando imagen...");
    setTimeout(() => {
        const imagen = "imagen.jpg";
        callback(null, imagen); // Simulamos que no hay errores y pasamos el nombre de la imagen
    }, 2000);
}

// Simulación de una función para procesar una imagen
function procesarImagen(nombreImagen, callback) {
    console.log(`Procesando imagen ${nombreImagen}...`);
    setTimeout(() => {
        const imagenProcesada = `Procesada_${nombreImagen}`;
        callback(null, imagenProcesada); // Simulamos que no hay errores y pasamos la imagen procesada
    }, 1000);
}

// Función principal que utiliza callbacks anidados para descargar y procesar una imagen
function descargarYProcesarImagen() {
    descargarImagen((error, nombreImagen) => {
        if (error) {
            console.error("Error al descargar la imagen:", error);
            return;
        }
        procesarImagen(nombreImagen, (error, imagenProcesada) => {
            if (error) {
                console.error("Error al procesar la imagen:", error);
                return;
            }
            console.log("Imagen procesada:", imagenProcesada);
        });
    });
}

// Llamada a la función principal para iniciar la descarga y procesamiento de la imagen
descargarYProcesarImagen();
