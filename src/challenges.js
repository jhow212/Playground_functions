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
function highestCount(array) {
  let resultado = 0;
  let maiorNumero = array[0];
  for (let index = 0; index < array.length; index += 1) {
    resultado = array[index];

    if (resultado > maiorNumero) {
      maiorNumero = resultado;
    }
  }
  let repeticoes = array.filter((numero) =>
    numero === maiorNumero
  ).length;
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseParaCat1Dis = Math.abs(mouse - cat1);
  let mouseParaCat2Dis = Math.abs(mouse - cat2);
  if (mouseParaCat1Dis < mouseParaCat2Dis) {
    return "cat1";
  } else if (mouseParaCat1Dis > mouseParaCat2Dis) {
    return "cat2";
  } else if (mouseParaCat1Dis === mouseParaCat2Dis) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let numeros = 0;
  let resultado = [];
  for (let i = 0; i < array.length; i +=1) {
    numeros = array[i]
    if (numeros % 3 === 0 && numeros % 5 === 0) {
      resultado.push("fizzBuzz")
    } else if (numeros % 5 === 0) {
      resultado.push("buzz")
    } else if (numeros % 3 === 0 ) {
      resultado.push("fizz")
    } else {
      resultado.push("bug!")
    }
  }
  return resultado
}


// Desafio 9
function encode(string) {
  let codigo = string
  .replace(/a/g, "1")
  .replace(/e/g, "2")
  .replace(/i/g, "3")
  .replace(/o/g, "4")
  .replace(/u/g, "5");

  return codigo;
}
function decode(string) {
  let decodificando = string
  .replace(/1/g, "a")
  .replace(/2/g, "e")
  .replace(/3/g, "i")
  .replace(/4/g, "o")
  .replace(/5/g, "u");

  return decodificando;
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
