'use strict'

function saludar(){
  return console.log('Hola mundo!')
}
//  1-crear una funcion que salude con el nombre que le pase como parametro
//  2-todas las funciones sean arrow functions

function ejecutarFuncion(otraFuncion){
  return otraFuncion()
}

// ejecutarFuncion(saludar)

//ejercicio mio
let saludo = () => {
  return console.log(nombre);
}

let ejecutoFuncion = () =>{
  return nuevaFuncion("rogelio")
}

ejecutoFuncion(saludo, nombre)


//ejemplo de compañero
'use strict'

const saludo = (nombre) => console.log(`Hola ${nombre}`);

const saludasion = (nombre, afun) => afun(nombre)

saludasion ("Criss", saludo)
