//Confeccionar un programa que lea n pares de datos,
//cada par de datos corresponde a la medida de la base y la altura de un triángulo.
//El programa deberá informar:
//a) De cada triángulo la medida de su base, su altura y su superficie.
//b) La cantidad de triángulos cuya superficie es mayor a 12.

let result = [];
let mayores = 0;

const cantPares = Number(prompt("¿Cuantos pares de datos desea ingresar?"));
for (let i = 1; i <= cantPares; i++) {
  const base = Number(prompt(`ingrese la base del ${i}º trinangulo`));
  const alt = Number(prompt(`ingrese la altura del ${i}º trinangulo`));
  const sup = (base * alt) / 2;

  let medidas = `${i}º Triangulo: base: ${base} - altura: ${alt} - superficie: ${sup}
  `;
  result.push(medidas);

  if (sup > 12) {
    mayores++;
  }
}

alert(`${result}
${mayores} triangulos posen una superficie mayor a doce`);
