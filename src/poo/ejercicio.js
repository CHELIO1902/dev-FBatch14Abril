//crear una clase Animal con 3 propiedades y un metodo
//crear una clase humano con las propiedades de animal (heredadas)
//crear un objeto a partir de la clase humano e imprimir las propiedades y el metodo humano

class Animal {

  constructor (clasifNaci, grupoAnimal, habitad) {
    this.clasifNaci = clasifNaci,
    this.grupoAnimal = grupoAnimal,
    this.habitad = habitad
  }
  clasificacionNacimiento (){
    return console.log(`Es oviparo o viviparo?: ${this.clasifNaci}`);
  }
}

let pez = new Animal("oviparo", "peces", "agua")
 

class Humano extends Animal {

  constructor (clasifNaci, grupoAnimal, habitad, sexo){
    super(clasifNaci, grupoAnimal, habitad)
    this.sexo = sexo
  }
}


let human = new Humano("viviparo", "mamifero", "tierra", "masculino")


 console.log(pez);
 console.log(human);
 pez.clasificacionNacimiento()