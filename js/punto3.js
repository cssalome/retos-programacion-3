/**En una empresa trabajan n empleados cuyos sueldos
 * oscilan entre $100 y $500, realizar un programa que lea los sueldos
 * que cobra cada empleado e informe
 * cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
 * Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.
 */

const empleados = Number(prompt("Ingrese la cantiadad de empleados"));
let suelMenor = 0;
let suelMayor = 0;
let i = 1;

while (i <= empleados) {
  const sueldo = Number(
    prompt("Ingrese el sueldo de un enpleado de $100 a $500")
  );

  if (sueldo >= 100 && sueldo <= 300) {
    suelMenor++;
  } else if (sueldo > 300 && sueldo <= 500) {
    suelMayor++;
  } else {
    alert(`Revisar consigna`);
  }
  i++;
}

alert(`${suelMenor} empleados cobran entre $100 y $300.
  ${suelMayor} empleados cobran entre $300 y $500`);
