// Se ingresan un conjunto de alturas de personas por teclado.
// Mostrar la altura promedio de las personas.

const cantidad = parseInt(prompt("ingrese la cantidad de alturas"));
let altPromedio = 0;
let i = 1;

while (i <= cantidad) {
  const alturas = parseInt(prompt("Ingrese la altura de una persona"));
  altPromedio = altPromedio + alturas;
  i++;
}

alert(
  `La altura promedio de las personas es: ${(altPromedio / cantidad).toFixed(
    2
  )}`
);
