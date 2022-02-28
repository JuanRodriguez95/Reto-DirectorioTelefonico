import directorio from "../js/directorio.js";
import validaciones from "../helpers/validacion.js";

let agregarContacto = document.getElementById("btn-adicionar");
let listarContactos = document.getElementById("btn-list");
let buscarContacto = document.getElementById("btn-buscarContacto");
let existeContacto = document.getElementById("btn-existe");
let eliminar = document.getElementById("btn-eliminar");
let contactoDisponible = document.getElementById("btn-contactosDisp");
let agendaLlena = document.getElementById("btn-agenda");
let salir = document.getElementById("btn-salir");
let tabla = document.getElementById("tabla-contactos");

/**
 * Clase contacto, constructor del objeto
 */
class Contacto{

    constructor( nombre,telefonoFijo, celular ) {
        this.nombre = nombre;
        this.telefonoFijo = telefonoFijo;
        this.celular=celular;
    }

}

/**
 * Funcion que muestra el directorio en pantalla
 * @param {} lista 
 */
const mostrarContactos=(lista)=>{
    let html='';
    lista.forEach(obj => {
        html+=`<tr>
                <td>${obj.nombre}</td>
                <td>${obj.telefonoFijo}</td>
                <td>${obj.celular}</td>
        </tr>`;
    });
    tabla.innerHTML=html;
}


/**
 * Solicitud de informacion y construccion del contacto
 */
agregarContacto.onclick=()=>{
    const nombre = prompt('Ingrese el nombre del contacto');
    const telefonoFijo = prompt('Ingrese el telefono fijo');
    const telefonoCelular = prompt('Ingrese el telefono celular');
    const contacto = new Contacto(
        nombre,telefonoFijo,telefonoCelular
    );
    let validacion =validaciones.validacionNombre(nombre);
    if(validacion){
        window.alert(`Ya existe un contacto registrado con el nombre : ${nombre}`);
    }else{
        directorio.adicionarContacto(contacto);
    }
}

/**
 * Trae la lista de contactos.
 */
listarContactos.onclick=()=>{
    mostrarContactos(directorio.ListarContactos());
}

/**
 * Accion de eliminar el contacto solicitando el nombre 
 */
eliminar.onclick=()=>{
    const nombre = prompt('Ingrese el nombre del contacto');
    const contacto = new Contacto(
        nombre
    );
    if(!contacto.nombre){
        window.alert("Datos incompletos");
    }else{
        window.alert(directorio.EliminarContacto(contacto));
    }
}

/**
 * Accion de verificar la existencia de un contacto
 */
existeContacto.onclick=()=>{
    const nombre = prompt('Ingrese el nombre del contacto');
    const contacto = new Contacto(
        nombre
    );
    if(!contacto.nombre){
        window.alert("Datos incompletos");
    }else{
        directorio.ExisteContacto(contacto);
    }
}

/**
 * Retorna 
 */
contactoDisponible.onclick=()=>{
    window.alert(`quedan ${directorio.EspaciosLibres()} espacios libres en el directorio`);
}

agendaLlena.onclick=()=>{
    window.alert(directorio.DirectorioLleno());
}

buscarContacto.onclick=()=>{
    const nombre = prompt('Ingrese el nombre del contacto');
    const contactoSolicitado = directorio.BuscarContacto(nombre);
    if(!nombre){
        window.alert('Por favor, ingrese un nombre para realizar la busqueda');
    }else{
        window.alert(`El numero de telefono fijo del usuario consultado es: ${contactoSolicitado.telefonoFijo}\nEl numero de telefono celular del usuario consultado es: ${contactoSolicitado.celular}`);
    }
}

// salir.onclick=()=>{

// } 




directorio.init();