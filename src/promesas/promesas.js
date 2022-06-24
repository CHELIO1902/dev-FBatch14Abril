//sintaxis de promesa
const promesa = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout( () => {
    number > 5 ? resolve(number) : reject(new Error("Menor a 5"))
  }, 2000);
});

promesa
.then(respuesta => {
  console.log("El valor es ", respuesta);
}). catch(error => {
  console.log("Error", error);
})