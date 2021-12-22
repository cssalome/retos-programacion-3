// Se ingresan tres notas de un alumno,
// si el promedio es mayor o igual a siete mostrar un mensaje "Promocionado".

const nota1 = Number(prompt("Imgrese una nota", ""));
const nota2 = Number(prompt("Imgrese una nota", ""));
const nota3 = Number(prompt("Imgrese una nota", ""));

if ((nota1 + nota2 + nota3) / 3 >= 7) {
  alert(`Promocionado :D`);
} else {
  alert(`No promocionaste :'V`);
}
