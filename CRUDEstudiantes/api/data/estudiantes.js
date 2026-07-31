//Arreglo que almacena los estudiantes
//Mientras el servidor está encendido los datos estarán en memoria

const estudiantes = [
    {
        id:1,
        nombre: "Ana",
        apellido: "Rodriguez",
        correo: "ana@correo.com",
        edad: 20,
        carrera: "Diseño Web"
    },
    {
        id:2,
        nombre: "Luis",
        apellido: "Brenes",
        correo: "luis@correo.com",
        edad: 38,
        carrera: "Ingeniería en Sistemas"
    },
    {
        id:3,
        nombre: "María",
        apellido: "Solano",
        correo: "maria@correo.com",
        edad: 26,
        carrera: "Contaduría"
    }
];
//Se debe exportar el arreglo para poder ser utilizado por las rutas
module.exports = estudiantes;