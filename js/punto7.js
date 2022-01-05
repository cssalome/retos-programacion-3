/**
 * Desarrollar un programa que permita cargar n números enteros 
 * y luego nos informe cuántos valores fueron pares y cuántos impares.
   Emplear el operador “%” en la condición de la estructura condicional:
	if (valor % 2 === 0)         //Si el if da verdadero es par.
 */

const cantNum = Number(prompt("Ingrese la cantidad a ingresar"));
let cantPares = 0;
let cantInpaes = 0;

while (cantNum !== 0) {
  const numIng = Numero(prompt("Ingrese un num"));
  if (numIng % 2 === 0) {
    cantPares++;
  } else {
    cantInpaes++;
  }
  cantNum--; //cantNum -= 1  // cantNum - 1
  alert(`Cantidad de numeros pares: ${cantPares}
  Cantidad de numero inpares: ${cantInpaes} `);
}
