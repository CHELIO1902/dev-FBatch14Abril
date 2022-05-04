'use strict'

// const info = {
//   valor: 'La info',
//   unaF: ( ) =>{
//     console.log('Importado con somonJS');
//   }
// }

// module.exports.info= info

module.exports =  {
  usuarioSinc(id) {
    const tiempoInicio = new Date().getTime();
    while (new Date().getTime() - tiempoInicio <= 3000)
    /esperando
  }

  return {
    "id": id,
    "nombre": `Usuario ${id}`
  }
},
usuarioAsinc(id){
  console.log('jajaja');
}