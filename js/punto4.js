// Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.

const num1 = Number(prompt("ingrese un numero", ""));
const num2 = Number(prompt("ingrese un numero", ""));
const num3 = Number(prompt("ingrese un numero", ""));

if ((num1 > num2) & (num1 > num3)) {
  alert(`El mayor de ellos es: ${num1}`);
} else if ((num2 > num1) & (num2 > num3)) {
  alert(`El mayor de ellos es: ${num2}`);
} else if ((num3 > num1) & (num3 > num2)) {
  alert(`El mayor de ellos es:${num3}`);
}
