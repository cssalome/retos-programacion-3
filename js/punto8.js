// Realizar un programa que pida cargar una fecha cualquiera,
// luego verificar si dicha fecha corresponde a Navidad.

const fechaIngresada = Number(
  prompt("ingresa una fecha formato AAAA-MM-DD", "")
);
const fecha = new Date(fechaIngresada);

if (fecha.getDate() === 24 && fecha.getMonth() === 12) {
  alert("La fecha ingrresada es de navidad");
} else {
  alert("La fecha ingresada no es de navidad");
}
