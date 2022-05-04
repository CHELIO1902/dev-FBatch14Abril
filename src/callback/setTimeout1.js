'use strict'

//recibe dos parametros: una funcion y un tiempo de espera

function hola() {
  retur console.log('hola mundo!')
}

//funcion del navegador: recibe dos cosas un callBack y el retraso en milisegundos
//funcion de orden superior, funcioion que ejecuta ese parametro (callBack)
//funcion asincrona
setTimeout(hola, 3000);

setTimeout(() => {
  
}, timeout);


//ejecuta una funcion las veces que se le solicita con una condicion de salida en los intervalos de tiempo especificados (N cantidad de veces cada determinado tiempo)
setInterval(() => {
  
}, interval);