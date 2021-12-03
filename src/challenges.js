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
function concatName(array) {
  let nomes = array[array.length - 1].concat(", " + array[0]);
  return nomes;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins;
  let empate = ties;

  if (wins) {
    vitoria = vitoria * 3
  } else {
    empate = empate * 1
  }
  return vitoria + empate;
}


// Desafio 6
let array = [-2, -2, -1];
function highestCount(array) {
  let resultado = 0;
  let maiorNumero = -1;
  for (let index = 0; index < array.length; index += 1) {
    resultado = array[index];

    if (resultado > maiorNumero) {
      maiorNumero = resultado;
    }
  }
  let repeticoes = array.filter((numero) =>
    numero === maiorNumero
  ).length;
  return repeticoes
}
console.log(highestCount(array))
// Desafio 7
function catAndMouse() {

}


// Desafio 8
function fizzBuzz(array) {
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
