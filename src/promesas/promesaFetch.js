'use strict'
// resolve es para cuando se genera una respuesta correcta.
// then === resolve
// catch === reject

//se le pasa una URL
fetch('https://rickandmortyapi.com/api/character/')
.then(response => response.json())
.then(data => {
  console.log('data nueva', data);
})
.catch ((error) => {
  console.log('error', error);
})