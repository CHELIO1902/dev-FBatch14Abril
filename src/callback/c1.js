'use strict'

//declarar una funcion
function saludo() {
  return console.log("hola")
}

//funcion anonima = funcion sin nombre
//funcion con una =>, es una funcion de flecha (arrow function)
// this no funciona en arrow functions

//funcion flecha
const saludo = () => {
  return console.log("hola")
}

//froma simpre de arrow function
const saludo = nombre => console.log("hola " + nombre)


//ejecutar funcion
saludo(rogelio)


//crean las funciones para restar, multiplicar
//y dividir dos numeros
function suma(num1, num2) {
  return console.log(num1 + num2)
}

function resta(num1, num2) {
  return console.log(num1 - num2)
}

function multiplicacion(num1, num2) {
  return console.log(num1 * num2)
}

function division(num1, num2) {
  return console.log(num1 / num2)
}


//funcion de orden superior = funcion(otraFuncion)
function calculadora(num1, num2, computo) {
  //callback = funcion de orden superior, que invoca a su parametro
  return computo(num1, num2)
}

calculadora(98, 16, suma)
calculadora(98, 16, resta)
calculadora(98, 16, multiplacacion)
calculadora(98, 16, division)

