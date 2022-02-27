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

class Contacto{

    constructor( nombre,telefonoFijo, celular ) {
        this.nombre = nombre;
        this.telefonoFijo = telefonoFijo;
        this.celular=celular;
    }

}

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

listarContactos.onclick=()=>{
    mostrarContactos(directorio.ListarContactos());
}

eliminar.onclick=()=>{
    const nombre = prompt('Ingrese el nombre del contacto');
    const telefonoFijo = prompt('Ingrese el telefono fijo');
    const telefonoCelular = prompt('Ingrese el telefono celular');
    const contacto = new Contacto(
        nombre,telefonoFijo,telefonoCelular
    );
    window.alert(directorio.EliminarContacto(contacto));
}

existeContacto.onclick=()=>{
    const nombre = prompt('Ingrese el nombre del contacto');
    const telefonoFijo = prompt('Ingrese el telefono fijo');
    const telefonoCelular = prompt('Ingrese el telefono celular');
    const contacto = new Contacto(
        nombre,telefonoFijo,telefonoCelular
    );
    directorio.ExisteContacto(contacto);
}

contactoDisponible.onclick=()=>{
    window.alert(directorio.EspaciosLibres());
}

agendaLlena.onclick=()=>{
    window.alert(directorio.DirectorioLleno());
}

buscarContacto.onclick=()=>{
    const nombre = prompt('Ingrese el nombre del contacto');
    window.alert(directorio.BuscarContacto(nombre));
}

salir.onclick=()=>{

} 




directorio.init();