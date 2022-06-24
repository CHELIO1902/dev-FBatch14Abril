'use strict'

//Asinc-await nos permite trabajar respuestas de promesas "asincronas" con funciones "sincronas"

const getData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => data)
}

const outData = getData()
console.log(outData);


const showData = async () => {
  try {
    const data = await getData()
    console.log(data);
  }catch (error) {
    console.error(error)
  }
}

showData()


/* const hola = () => {
    return "hola"
}

const saludo = hola()
console.log(saludo); */