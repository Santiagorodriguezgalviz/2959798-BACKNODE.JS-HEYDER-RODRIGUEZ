const readline = require('readline');

// Definición de la clase Empleado
class Empleado {
  constructor(nombre, fechaNacimiento, genero, cargo, salario) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.genero = genero;
    this.cargo = cargo;
    this.salario = salario;
    this.subordinados = [];
    this.jefe = null;
    this.equipo = [];
  }

  asignarJefe(jefe) {
    this.jefe = jefe;
    jefe.agregarSubordinado(this);
  }

  agregarSubordinado(subordinado) {
    this.subordinados.push(subordinado);
  }

  asignarEquipo(equipo) {
    this.equipo = equipo;
    equipo.forEach(miembro => miembro.asignarJefe(this));
  }
}

// Se utilizará para almacenar las instancias de Empleado creadas (organigrama de la empresa)
const empresa = [];

// Función para crear un nuevo empleado
function crearEmpleado(nombre, fechaNacimiento, genero, cargo, salario) {
  const empleado = new Empleado(nombre, fechaNacimiento, genero, cargo, salario);
  empresa.push(empleado);
  return empleado;
}

// Función para establecer relaciones laborales
function establecerRelacion(jefe, subordinado) {
  jefe.agregarSubordinado(subordinado);
}

// Función para buscar empleados por nombre
function buscarEmpleado(nombre) {
  return empresa.find(empleado => empleado.nombre === nombre);
}

// Función para visualizar el organigrama de la empresa
function visualizarOrganigrama(empleado, nivel = 0) {
  const espacio = '  '.repeat(nivel);
  console.log(`${espacio}Nombre: ${empleado.nombre} - Cargo: ${empleado.cargo} - Salario: ${empleado.salario}`);
  empleado.subordinados.forEach(subordinado => visualizarOrganigrama(subordinado, nivel + 1));
}

function mostrarMenu() {
  console.log("Seleccione una opción:");
  console.log("1. Agregar Empleado");
  console.log("2. Establecer Relación Jerárquica");
  console.log("3. Consultar Organigrama");
  console.log("4. Salir");
}

// Función principal
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const preguntarOpcion = () => {
    rl.question("Ingrese una opción (1-4): ", opcion => {
      procesarOpcion(opcion);
    });
  };

  const procesarOpcion = opcion => {
    switch (opcion) {
      case "1":
        rl.question("Ingrese el nombre del empleado: ", nombre => {
          rl.question("Ingrese la fecha de nacimiento del empleado (AAAA-MM-DD): ", fechaNacimiento => {
            rl.question("Ingrese el género del empleado (masculino/femenino): ", genero => {
              rl.question("Ingrese el cargo del empleado: ", cargo => {
                rl.question("Ingrese el salario del empleado: ", salario => {
                  const empleado = crearEmpleado(nombre, fechaNacimiento, genero, cargo, salario);
                  console.log(`El empleado ${empleado.nombre} ha sido agregado.`);
                  preguntarOpcion();
                });
              });
            });
          });
        });
        break;

      case "2":
        rl.question("Ingrese el nombre del jefe: ", nombreJefe => {
          const jefe = buscarEmpleado(nombreJefe);
          if (jefe) {
            rl.question("Ingrese el nombre del subordinado: ", nombreSubordinado => {
              const subordinado = buscarEmpleado(nombreSubordinado);
              if (subordinado) {
                establecerRelacion(jefe, subordinado);
                console.log(`${subordinado.nombre} ahora reporta a ${jefe.nombre}.`);
              } else {
                console.log("El subordinado ingresado no existe.");
              }
              preguntarOpcion();
            });
          } else {
            console.log("El jefe ingresado no existe.");
            preguntarOpcion();
          }
        });
        break;

      case "3":
        rl.question("Ingrese el nombre del empleado para ver su organigrama: ", nombreConsulta => {
          const empleadoConsulta = buscarEmpleado(nombreConsulta);
          if (empleadoConsulta) {
            console.log(`Organigrama de ${empleadoConsulta.nombre}:`);
            visualizarOrganigrama(empleadoConsulta);
          } else {
            console.log("El empleado ingresado no existe.");
          }
          preguntarOpcion();
        });
        break;

      case "4":
        console.log("¡Hasta luego!");
        rl.close();
        break;

      default:
        console.log("Opción inválida. Por favor, ingrese una opción válida.");
        preguntarOpcion();
    }
  };

  mostrarMenu();
  preguntarOpcion();
}

// Llamada a la función principal
main();
