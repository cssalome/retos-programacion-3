//Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 - 16 - 24, etc.

let i = 1;
tabla = [];

while (i <= 500) {
  let multip = i * 8;
  tabla.push(multip);
  i++;
}

alert(`Fijarse en consola`);
console.log(tabla);
