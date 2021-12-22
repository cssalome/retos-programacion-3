// Se ingresa por teclado un valor entero,
// mostrar una leyenda que indique si el número es positivo, nulo o negativo.

const numero = Number(prompt("Ingrese un numero entero", ""));

if (numero === 0) {
  alert(`Es un numero nulo`);
} else if (numero % 2 === 0) {
  alert(`Es un numero par`);
} else if (numero % 2 === 1) {
  alert(`Es un numero inpar`);
} else {
  alert(numero % 2);
}
