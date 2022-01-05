/**
 * Confeccionar un programa que permita ingresar un 
 * valor del 1 al 10 y nos muestre la tabla de 
 * multiplicar del mismo (los primeros 13 términos)

 */

const numTabla = Number(prompt("Ingrese la tabla que desee calcular"));
const tabla = [];

if (numTabla <= 10 && numTabla > 0) {
  for (let i = 0; i <= 13; i++) {
    tabla.push(numTabla * i);
  }
} else {
  throw new Error("Lea la consigna");
}

alert(`El resultado de la tabla se mutiplicacion ${tabla}`);
