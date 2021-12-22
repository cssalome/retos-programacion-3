// Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras
// y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. Mostrar un mensaje de error si
// el número de cifras es mayor.

const num = prompt("ingrese un numero positivo de hasta 3 cifras", "");

if (num.length === 1) {
  alert(`Tu numero es de 1 cifra`);
} else if (num.length === 2) {
  alert(`Tu numero es de 2 cifra`);
} else if (num.length === 3) {
  alert(`Tu numero es de 3 cifra`);
} else if (num.length >= 4) {
  alert(`ERROR: tu numero es mayor a 3 cifras`);
}
