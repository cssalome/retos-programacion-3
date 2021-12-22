// Realizar un programa que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y diferencia,
// en caso contrario informar el producto y
// la división del primero respecto al segundo.

const num1 = Number(prompt("Ingrese un numero", ""));
const num2 = Number(
  prompt("Ingrese un numero menor al anterior ingresado", "")
);

if (num1 > num2) {
  alert(`La suma de ambos numeros: ${num1 + num2}. 
  La diferencia entre ambos numeros: ${num1 - num2}`);
} else {
  alert(`El producto de ambos: ${num2 * num1} 
 La division del primero respecto al segundo: ${num2 / num1}`);
}
