
const validacionDatos=(Contacto)=>{
    if(!Contacto.nombre || !Contacto.telefonoFijo || !Contacto.celular)
        return true;
}

const validacionNombre=(Contacto)=>{
    let flag = false;
    let lista =JSON.parse(localStorage.getItem("listaContactos"));
    lista.forEach(obj =>{
        if(obj.nombre === Contacto)
            flag=true;
    });
    return flag;
}

export default {validacionDatos,validacionNombre}