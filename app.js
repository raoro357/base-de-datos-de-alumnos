// Definición del prototipo de objeto "Alumno"
function Alumno(nombre, apellidos, edad) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.materiasInscritas = [];
    this.calificaciones = {};
  
    // Método para inscribir una materia
    this.inscribirMateria = function(materia) {
      this.materiasInscritas.push(materia);
      this.calificaciones[materia] = []; // Inicializar las calificaciones para esa materia
    };
  
    // Método para agregar calificaciones a una materia
    this.agregarCalificacion = function(materia, calificacion) {
      if (this.materiasInscritas.includes(materia)) {
        this.calificaciones[materia].push(calificacion);
      } else {
        console.log("El alumno no está inscrito en la materia " + materia);
      }
    };
  
    // Método para obtener el promedio de calificaciones de una materia
    this.obtenerPromedioMateria = function(materia) {
      if (this.materiasInscritas.includes(materia)) {
        const calificaciones = this.calificaciones[materia];
        if (calificaciones.length > 0) {
          const sumaCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion);
          return sumaCalificaciones / calificaciones.length;
        } else {
          return "No hay calificaciones para esta materia";
        }
      } else {
        return "El alumno no está inscrito en la materia " + materia;
      }
    };
  }
  
  // Ejemplo de uso del prototipo "Alumno"
  const alumno1 = new Alumno("Juan", "Pérez", 20);
  alumno1.inscribirMateria("Matemáticas");
  alumno1.inscribirMateria("Historia");
  alumno1.agregarCalificacion("Matemáticas", 90);
  alumno1.agregarCalificacion("Matemáticas", 85);
  alumno1.agregarCalificacion("Historia", 75);
  
  console.log("Nombre del alumno:", alumno1.nombre);
  console.log("Edad del alumno:", alumno1.edad);
  console.log("Materias inscritas:", alumno1.materiasInscritas);
  console.log("Calificaciones:", alumno1.calificaciones);
  console.log("Promedio de Matemáticas:", alumno1.obtenerPromedioMateria("Matemáticas"));
  console.log("Promedio de Historia:", alumno1.obtenerPromedioMateria("Historia"));

  // Definición del prototipo de objeto "Grupo"
function Grupo(nombreGrupo) {
  this.nombreGrupo = nombreGrupo;
  this.alumnos = [];

  // Método para añadir un alumno al grupo
  this.agregarAlumno = function(alumno) {
    this.alumnos.push(alumno);
  };

  // Método para obtener la lista de alumnos en el grupo
  this.obtenerAlumnos = function() {
    return this.alumnos;
  };
}

// Creación de instancias de alumnos
//const alumno1 = new Alumno("Juan", "Pérez", 20);
const alumno2 = new Alumno("María", "Gómez", 21);
const alumno3 = new Alumno("Carlos", "López", 19);

// Creación de instancia de grupo
const grupoA = new Grupo("Grupo A");

// Asignación de alumnos al grupo
grupoA.agregarAlumno(alumno1);
grupoA.agregarAlumno(alumno2);
grupoA.agregarAlumno(alumno3);

// Obtener la lista de alumnos en el grupo
const alumnosGrupoA = grupoA.obtenerAlumnos();
console.log("Alumnos en el Grupo A:", alumnosGrupoA);