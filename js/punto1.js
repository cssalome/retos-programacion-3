// Escribir un programa que solicite ingresar 10 notas de alumnos
// y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores.

const listadoNotas = [];

let i = 1;
//agregar notas al array hasta que las 10 notas sean ingresadas
while (i <= 10) {
  const notas = parseInt(prompt("Ingrese una nota"));
  listadoNotas.push(notas); // se lo agrega al array vacio
  i++; // i = i + 1
}

let x = 0;
let cantMayor = 0;
let cantMenor = 0;

while (x < listadoNotas.length) {
  if (listadoNotas[x] >= 7) {
    cantMayor++;
  } else {
    cantMenor++;
  }
  x++;
}

alert(
  `Cantidad de aprobados: ${cantMayor}
Cantidad de desaprobados: ${cantMenor}`
);

//Forma mas corta
// let i = 1;
// let cantMayor = 0;
// let cantMenor = 0;

// while (i <= 10) {
//   const nota = parseInt(prompt("Ingrese una nota"));
//   if (nota >= 7) {
//     cantMayor++;
//   } else {
//     cantMenor++;
//   }
//   i++;
// }
// alert(
//   `Cantidad de aprobados: ${cantMayor}
// Cantidad de desaprobados: ${cantMenor}`
// );
