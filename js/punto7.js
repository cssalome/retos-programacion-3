// Un postulante a un empleo, realiza un test de capacitación, se obtuvo
//  la siguiente información: cantidad total de preguntas que se le realizaron
//  y la cantidad de preguntas que contestó correctamente. Se pide confeccionar
//  un programa que ingrese los dos datos e informe el nivel del
//  mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:

// 	Nivel máximo:     Porcentaje>=90%.
// 	Nivel medio:	    Porcentaje>=75% y <90%.
// 	Nivel regular:	  Porcentaje>=50% y <75%.
// 	Fuera de nivel:   Porcentaje<50%.

const pregun = Number(prompt("Igrese cantiadad de preguntas realidadas", ""));

const resp = Number(
  prompt("Ingrese la cantidad de preguntas respondidas correctamente", "")
);

const porcentaje = (resp * 100) / pregun;

if (porcentaje >= 90) {
  alert("Nivel máximo");
} else if ((porcentaje >= 75) & (porcentaje < 90)) {
  alert("Nimel medio");
} else if ((porcentaje >= 50) & (porcentaje < 75)) {
  alert("Nivel regular");
} else if (porcentaje < 50) {
  alert("Fuera de nivel");
}
