'use strict'

const promesa = new Promise((resolve, reject) => {
    if (true) {
        resolve('Resuelta')    
    } else {
        reject('Rechazada')
    }
})

promesa
    .then((response) => { console.log(response) })
    .then(() => {
        console.log('Hola');
    })
    .then(() => {
        console.log('Mundo!');
        return { "nombre" : "Samantha" }
    })
    .then((respuesta) => {
        console.log(respuesta.nombre);
        return ("Hola intento romperte")
    })
    .then((retorno) => {
        console.log(retorno)
    })
    .catch((error) => { console.log(error)})
