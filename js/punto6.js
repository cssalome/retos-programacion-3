// Realizar un programa que permita cargar dos listas de 15 valores cada una.
// Informar con un mensaje cuál de las dos listas tiene
// un valor acumulado mayor (mensajes "Lista 1 mayor", "Lista 2 mayor", "Listas iguales")
// Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.

const lista1 = [];
const lista2 = [];
let i = 1;
let j = 1;

while (i <= 15) {
  const numeros = parseInt(prompt(`Ingrese un numero de la primer lista`));
  lista1.push(numeros);
  i++;
}

while (j <= 15) {
  const numeros = parseInt(prompt(`Ingrese un numero de la segunda lista`));
  lista2.push(numeros);
  j++;
}

const promed1 = lista1.reduce((a, b) => a + b);
const promed2 = lista2.reduce((a, b) => a + b);

if (promed1 == promed2) {
  alert(`Listas iguales`);
} else if (promed1 > promed2) {
  alert(`Lista 1 mayor`);
} else if (promed1 < promed2) {
  alert(`Lista 2 iguales`);
}
