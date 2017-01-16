class Persona {
  constructor(nombre) {
    this.nombre = nombre
  }

  saluda () {
    console.log(`Hola! Soy ${this.nombre}`)
  }
}

module.exports = Persona;
