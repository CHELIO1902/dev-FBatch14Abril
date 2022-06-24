'use strict'

//definir la estructura de mi promesa
let x = 10

const promesa = new Promise((resolve, reject) => {
  if (x === 10) {
    resolve('la variable es igual a 10')
  }else{
    reject ('la variable no es igual a 10')
  }
})

//recibir la data de mi promesa
promesa
  .then(response =>{
    console.log('Success: ' + response);
  })
  .catch(error => cponsole.error('error: ' + error))




  //.then(response => response.json())

  // .then(response => {
  //   return response.json()
  // })
  // .then(data => console.log(data);)