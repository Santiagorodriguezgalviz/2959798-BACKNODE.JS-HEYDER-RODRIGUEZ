function obtenerDatosAPI1() {
    return new Promise((resolve, reject) => {
      // Simulamos una llamada a una API
      setTimeout(() => {
        const datosAPI1 = {
          nombre: "Juan Pérez",
          edad: 30
        };
        resolve(datosAPI1);
      }, 2000);
    });
  }
  
  function obtenerDatosAPI2(datosUsuario) {
    return new Promise((resolve, reject) => {
      // Simulamos una llamada a una API
      setTimeout(() => {
        const datosAPI2 = {
          ciudad: "Bogotá",
          pais: "Colombia"
        };
        resolve({ datosUsuario, datosAPI2 });
      }, 1500);
    });
  }
  
  function mostrarResultado(datos) {
    const { datosUsuario, datosAPI2 } = datos;
    console.log(`Nombre: ${datosUsuario.nombre}`);
    console.log(`Edad: ${datosUsuario.edad}`);
    console.log(`Ciudad: ${datosAPI2.ciudad}`);
    console.log(`País: ${datosAPI2.pais}`);
  }
  
  obtenerDatosAPI1()
    .then(obtenerDatosAPI2)
    .then(mostrarResultado)
    .catch(error => console.error("Error:", error));