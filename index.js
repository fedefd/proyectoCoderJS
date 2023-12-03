const cuadrado = document.querySelector(".cuadrado");
let cuadradoColores = true;

const numeros = document.querySelector(".numeros");

const suma1 = document.querySelector(".suma1");
const suma2 = document.querySelector(".suma2");
const resta1 = document.querySelector(".resta1");
const resta2 = document.querySelector(".resta2");
const resultadoSuma = document.querySelector(".resultadoSuma");
const resultadoResta = document.querySelector(".resultadoResta");


// if //
function cuadradoColor() {

  if (cuadradoColores === true) {
    cuadrado.classList.remove("cuadradoRojo");
    cuadrado.classList.add("cuadradoAmarillo");
    console.log("cuadrado amarillo")
    cuadradoColores = false;
  }

  else if (cuadradoColores === false) {
    cuadrado.classList.remove("cuadradoAmarillo");
    cuadrado.classList.add("cuadradoRojo");
    console.log("cuadrado rojo")
    cuadradoColores = true;

  }

  else return;
}


// for //
function suma() {
  let i = 0;
  for (i = 0; i <= 0; i++) {
    numeros.textContent++;
    console.log(numeros.textContent);
  }
}

function resta() {
  let i = 0;
  for (i = 0; i >= 0; i--) {
    numeros.textContent--;
    console.log(numeros.textContent);
  }
}
console.log(numeros.textContent);



// que el usuario mande un dato y nuestro codigo pueda hacer algo //
function sumar() {
  let resultado = suma1.valueAsNumber + suma2.valueAsNumber;
  resultadoSuma.innerHTML = resultado;
  if (resultado <= 0 || resultado >= 0) {
    console.log(suma1.valueAsNumber + suma2.valueAsNumber);
    // alert(resultado);
    return resultado;
  }

  else if (suma1.valueAsNumber <= 0 || suma1.valueAsNumber >= 0) {
    console.log(suma1.valueAsNumber + " + 0 = " + suma1.valueAsNumber)
    return resultadoSuma.innerHTML = suma1.valueAsNumber;
  }
  else if (suma2.valueAsNumber <= 0 || suma2.valueAsNumber >= 0) {
    console.log("0 + " + suma2.valueAsNumber + " = " + suma2.valueAsNumber)
    return resultadoSuma.innerHTML = suma2.valueAsNumber;
  }
  else {
    console.log("0")
    return resultadoSuma.innerHTML = "0";
  }


}

function restar() {

  let resultado = resta1.valueAsNumber - resta2.valueAsNumber;
  resultadoResta.innerHTML = resultado;


  if (resultado <= 0 || resultado >= 0) {
    console.log(resta1.valueAsNumber - resta2.valueAsNumber)
    return resultado;
  }
  else if (resta1.valueAsNumber <= 0 || resta1.valueAsNumber >= 0) {
    console.log(resta1.valueAsNumber + " - 0 = " + resta1.valueAsNumber)
    return resultadoResta.innerHTML = resta1.valueAsNumber;
  }
  else if (resta2.valueAsNumber <= 0 || resta2.valueAsNumber >= 0) {
    console.log("0 - " + resta2.valueAsNumber + " = " + resta2.valueAsNumber)
    return resultadoResta.innerHTML = resta2.valueAsNumber;
  }
  else {
    console.log("0")
    return resultadoResta.innerHTML = "0";
  }
}













