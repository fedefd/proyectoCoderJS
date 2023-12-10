let numeroWhile = 0;
let si = true;
const nombre = prompt("Ingrese nombre");


// if //
function ifsi() {

  if (si === true) {
    console.log("if -> ", "si")
    si = false;
  }

  else if (si === false) {
    console.log("if -> ", "no")
    si = true;
  }

  else return;
}
ifsi();

// for //
function bucle() {
  let i = 0;
  for (i = 0; i <= 10; i++) {
    numero = i
    console.log("for -> ", numero);
  }
}
bucle();

// while //
while (numeroWhile < 5) {
  numeroWhile++;
}
console.log("while -> ", numeroWhile)

// prompt //
function saludar(nombre) {
  console.log("Buenos dias " + nombre + "!");
}
saludar(nombre)












