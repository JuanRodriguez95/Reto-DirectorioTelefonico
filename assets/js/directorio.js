import validaciones from "../helpers/validacion.js";

let listaContactos = [];
//[{"nombre":"juan","telefonoFijo":"123","celular":"123"}]

/**
 * Funcion adicionar contacto, recibe un objeto de la clase Contacto definido en index.js
 * @param {*} Contacto 
 */
const adicionarContacto = (Contacto) => {
  if(validaciones.validacionDatos(Contacto)){
      window.alert("Datos incompletos");
  }else{
    listaContactos = [...listaContactos, Contacto];
    localStorage.setItem("listaContactos", JSON.stringify(listaContactos));
  }
};

/**
 * Funcion que verifica la existencia de un contacto, segun el requerimiento la funcion debia recibir un
 * objeto de tipo Contacto
 * @param {*} Contacto 
 * @returns 
 */
const ExisteContacto = (Contacto) => {
  let lista = ListarContactos();
  return lista.find(
    (contacto) =>
      contacto.nombre == Contacto.nombre 
  )
    ? window.alert("El contacto ya se encuentra registrado")
    : window.alert("EL contacto no se encuentra registrado");
};

/**
 * Funcion listar contactos
 * @returns 
 */
const ListarContactos = () => {
    listaContactos = JSON.parse(localStorage.getItem("listaContactos"));
    if(listaContactos.length === 0)
        window.alert('No hay contactos en el directorio');
    return listaContactos;
};

/**
 * Funcion BuscarContacto, consulta un contacto tomando como parametro su nombre.
 * @param {*} nombre :string 
 * @returns 
 */
const BuscarContacto = (nombre) => {
  let lista = ListarContactos();
  let contactoSolicitado = lista.find((contacto) => contacto.nombre === nombre);
  console.log(contactoSolicitado);
  if (!contactoSolicitado) return "EL contacto ingresado no existe";
  return contactoSolicitado;
};

/**
 * Funcion EliminarContacto que elimina un contacto basado en su nombre, segun el requerimiento 
 * esta funcion recibe un objeto de tipo Contacto
 */
const EliminarContacto = (Contacto) => {
  let lista = ListarContactos();
  let cont = 0;
  let index = 0;
  lista.forEach((obj) => {
    if (obj.nombre === Contacto.nombre) index = cont;
    cont++;
  });
  lista.splice(index, index + 1);
  localStorage.setItem("listaContactos", JSON.stringify(lista));
  return "Contacto Eliminado";
};

/**
 * Retorna un mensaje que indica si el directorio esta lleno o no
 * @returns 
 */
const DirectorioLleno = () => {
  const tamaño = localStorage.getItem("espacioDirectorio");
  const lista = ListarContactos();
  return lista.length >= tamaño
    ? "Directorio Lleno"
    : "El directorio aun no esta lleno";
};

/**
 * Funcion que retorna el numero de espacios disponibles en el directorio.
 * @returns 
 */
const EspaciosLibres = () => {
  const tamaño = localStorage.getItem("espacioDirectorio");
  let lista = ListarContactos();
  if(!lista)
    lista=0;
  let espaciosLibres = tamaño - lista.length;
  return espaciosLibres;
};

const init = () => {
  localStorage.setItem("listaContactos", JSON.stringify(listaContactos));
  localStorage.setItem("espacioDirectorio", 10);
};

export default {
  adicionarContacto,
  init,
  BuscarContacto,
  DirectorioLleno,
  EliminarContacto,
  EspaciosLibres,
  ListarContactos,
  ExisteContacto,
};
