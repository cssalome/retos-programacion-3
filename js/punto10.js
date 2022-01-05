//Desarrollar un programa que muestre la tabla de multiplicar del 5 (del 5 al 50)

const tabla = [];

for (let i = 1; i <= 10; i++) {
  const resul = i * 5;
  const multip = `${i} x 5 = ${resul}
  `;
  tabla.push(multip);
}

alert(`Tabla de multiplicar del 5:
${tabla}`);
