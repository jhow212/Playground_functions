// Desafio 10
function techList(array, nome) {
  if (array.length !== 0) {
    let tecs = [];
    let sortarray = array.sort();
    for (let i = 0; i < sortarray.length; i += 1) {
      let objeto = { tech: sortarray[i], name: nome }
      tecs.push(objeto)
    }
    return tecs;
  }
  return "Vazio!"
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
