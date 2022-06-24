'use strict'

// const info = {
//   valor: 'La info',
//   unaF: ( ) =>{
//     console.log('Importado con somonJS');
//   }
// }

// module.exports.info= info
usuarios.js

'use strict'

module.exports = {
  usuarioSinc(id) {
    const tiempoInicio = new Date().getTime();
    console.log('JEJEJE ', 5 + id);
    while ((new Date().getTime() - tiempoInicio) <= 3000) {
      // Esperando
    }

    return {
      "id": id,
      "nombre": `Usuario ${id}`
    }
  },

  usuarioAsinc(id, callback) {
    const usuario = {
      "id": id,
      "nombre": `Usuario ${id}`
    }

    console.log('JAJAAJ ', 5+id);
    setTimeout(() => {
      callback(usuario)
    }, 3000);
  },
}