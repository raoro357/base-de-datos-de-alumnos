
function Alumno(nombre, apellidos, edad) {
  const FormHtml= document.getElementById("form");

  FormHtml.addEventListener("submit", (event) =>{
    let Alumno={
      nombre: document.getElementById("Nombre").value,
      apellidos: document.getElementById("Apellido").value,
      edad: document.getElementById("Edad").value,
      materiasInscritas:document.getElementById("Clase").value,
      calificaciones:document.getElementById("Calificacion").value,

    };

    function guardarDatosEnLocalStorage1() {
        localStorage.setItem("alumno4", JSON.stringify(Alumno));
      }
    guardarDatosEnLocalStorage1();
  });

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
        const calificacion1 = this.calificaciones[materia];
        if (calificacion1.length > 0) {
          const sumaCalificaciones = calificacion1.reduce((total, calificacion) => total + calificacion);
          return sumaCalificaciones / calificacion1.length;
        } else {
          return "No hay calificaciones para esta materia";
        }
      } else {
        return "El alumno no está inscrito en la materia " + materia;
      }
    };

    this.BusquedaAlumnos=function (nombre){
        if(nombre.indexOf(this.nombre)>-1){
            //this.nombre.push(this.nombre);
            console.log("El alumno "+  this.nombre + " esta inscrito el plantel");

        }else{
            console.log("el alumno no existe");
        }

    };

    this.BusquedaApellido=function(apellidos, nombre){

        if(apellidos.indexOf(this.apellidos)>-1){
            console.log("El apellido "+  this.apellidos + " si exite en el platel y es el alumno " + this.nombre);
            alert("Hola");
           

        }else{

            console.log("el apellido no existe");
        }

    };

    this.PromedioFinal=function(obtenerPromedioMateria, alumno1){
      const Promedio= obtenerPromedioMateria + materia;


    };

   
  }



  // Ejemplo de uso del prototipo "Alumno"
 const alumno1 = new Alumno("Juan", "Perez", 20);
  alumno1.inscribirMateria("Matemáticas");
  alumno1.inscribirMateria("Historia");
  alumno1.agregarCalificacion("Matemáticas", 90);
  alumno1.agregarCalificacion("Matemáticas", 85);
  alumno1.agregarCalificacion("Historia", 75);

  alumno1.BusquedaAlumnos("Juan");
  alumno1.BusquedaApellido("Perez")

  console.log("Nombre del alumno:", alumno1.nombre);
  console.log("Edad del alumno:", alumno1.edad);
  console.log("Materias inscritas:", alumno1.materiasInscritas);
  console.log("Calificaciones:", alumno1.calificaciones);
  console.log("Promedio de Matemáticas:", alumno1.obtenerPromedioMateria("Matemáticas"));
  console.log("Promedio de Historia:", alumno1.obtenerPromedioMateria("Historia"));


  function Grupo(nombreGrupo) {
    nombreGrupo=document.getElementById("lang").value;
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
//alumno1 = new Alumno("Juan", "Pérez", 20);
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



// Obtener la lista de alumnos en el grupo desde el localStorage (si existen)
//const alumnosGrupoDesdeLocalStorage = cargarDatosDesdeLocalStorage();


  // Función para guardar datos en el localStorage
function guardarDatosEnLocalStorage() {
  localStorage.setItem("alumno", JSON.stringify(alumno1));
  localStorage.setItem("alumno2", JSON.stringify(alumno2));
  localStorage.setItem("alumno3", JSON.stringify(alumno3));
}

guardarDatosEnLocalStorage();


function Obtener_LocalStore1(){

  if(localStorage.getItem("alumno")){
    let persona1 = JSON.parse(localStorage.getItem("alumno"));
    console.log(alumno1);
    if(localStorage.getItem("alumno2")){
      let persona2 = JSON.parse(localStorage.getItem("alumno2"));
    console.log(alumno2);
    }

  }else{
    console.log("No existe");
  }


}

Obtener_LocalStore1();







