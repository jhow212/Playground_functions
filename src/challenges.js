// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let areaDoTriangulo = (base * altura) / 2;
  return areaDoTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let separacao = string.split(' ');
  return separacao;
}

// Desafio 4
let array =['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(array) {
  let nomes = array[array.length - 1].concat(", " + array[0]);
  return nomes;
}  
console.log(concatName(array))

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
