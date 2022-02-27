import validaciones from "../helpers/validacion.js";

let listaContactos = [];
//[{"nombre":"juan","telefonoFijo":"123","celular":"123"}]
const adicionarContacto = (Contacto) => {
  if(validaciones.validacionDatos(Contacto)){
      window.alert("Datos incompletos");
  }else{
    listaContactos = [...listaContactos, Contacto];
    localStorage.setItem("listaContactos", JSON.stringify(listaContactos));
  }
};

const ExisteContacto = (Contacto) => {
  let lista = ListarContactos();
  return lista.find(
    (contacto) =>
      contacto.nombre == Contacto.nombre &&
      contacto.telefonoFijo == Contacto.telefonoFijo &&
      contacto.celular == Contacto.celular
  )
    ? window.alert("El contacto ya se encuentra registrado")
    : window.alert("EL contacto no se encuentra registrado");
};

const ListarContactos = () => {
    listaContactos = JSON.parse(localStorage.getItem("listaContactos"));
    if(listaContactos.length === 0)
        window.alert('No hay contactos en el directorio');
    return listaContactos;
};

const BuscarContacto = (nombre) => {
  let lista = ListarContactos();
  let contactoSolicitado = lista.find((contacto) => contacto.nombre === nombre);
  if (!contactoSolicitado) return "EL contacto ingresado no existe";
  return contactoSolicitado.telefonoFijo;
};

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

const DirectorioLleno = () => {
  const tamaño = localStorage.getItem("espacioDirectorio");
  const lista = ListarContactos();
  return lista.length >= tamaño
    ? "Directorio Lleno"
    : "El directorio aun no esta lleno";
};

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
  const tamaño = prompt(
    "Ingrese el numero maximo de espacios para su directorio, de lo contrario el tamaño por defector sera de 10 espacios"
  );
  if (!tamaño) {
    localStorage.setItem("espacioDirectorio", 10);
  } else {
    localStorage.setItem("espacioDirectorio", tamaño);
  }
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
