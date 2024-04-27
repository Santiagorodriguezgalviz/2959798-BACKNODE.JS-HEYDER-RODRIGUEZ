const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definimos una función para simular la respuesta del instructor
function respuestaInstructor(pregunta, respuestaUsuario) {
  return new Promise((resolve, reject) => {
    // Verificamos la pregunta del alumno
    if (respuestaUsuario.toLowerCase().includes('lenguaje de programación')) {
      resolve("Depende de tus intereses y necesidades, cada lenguaje tiene sus ventajas y desventajas.");
    } else if (respuestaUsuario.toLowerCase().includes('programación')) {
      resolve("La programación es esencial en el mundo tecnológico actual.");
    } else {
      reject("Lo siento, no tengo la respuesta para esa pregunta en este momento.");
    }
  });
}

// Función para iniciar la conversación con el alumno
function iniciarConversacion(nombre, preguntas) {
  console.log(`Hola, soy ${nombre}. ¿En qué puedo ayudarte?`);
  preguntarAlumno(preguntas, 0);
}

// Función para preguntar al alumno
function preguntarAlumno(preguntas, indice) {
  if (indice < preguntas.length) {
    console.log(`Alumno: ${preguntas[indice]}`);
    rl.question('Respuesta: ', async (respuesta) => {
      try {
        const respuestaInstructor = await respuestaInstructor(preguntas[indice], respuesta);
        console.log(`Instructor: ${respuestaInstructor}`);
        preguntarAlumno(preguntas, indice + 1); 
      } catch (error) {
        console.log(`Instructor: ${error}`);
        preguntarAlumno(preguntas, indice + 1); 
      }
    });
  } else {
    console.log("No hay más preguntas.");
    rl.close();
  }
}

// Ejemplo de uso
const preguntas = [
  "¿Qué lenguaje de programación es el más demandado?",
  "¿Por qué es importante aprender sobre programación?",
  "¿Cual es tu lenguaje favorito ?"
];

iniciarConversacion("Santiago", preguntas);