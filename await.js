async function obtenerLibros() {
    //se usa para crear una nueva instancia del objeto Promise.
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulamos una lista de libros obtenidos de la API
    const libros = [
        { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' },
        { id: 2, titulo: 'Discurso del metodo', autor: 'Rene Descartes   ' },
        { id: 3, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes' }
    ];

    const ocurrirError = false;

    if (ocurrirError) {
        throw new Error('Error al obtener datos de libros');
    }

    return libros;
}

// Función principal que utiliza async/await para manejar errores
async function main() {
    try {
        console.log('Obteniendo datos de libros...');
        const libros = await obtenerLibros();
        console.log('Datos de libros obtenidos:', libros);
        console.log('Proceso completado exitosamente.');
    } catch (error) {
        console.error('Se produjo un error:', error.message);
    }
}

// Llamada a la función principal
main();
