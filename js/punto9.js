//Desarrollar un programa que solicite la carga de 10
//números e imprima la suma de los últimos 5 valores ingresados.

let ultimosNum = [];

for (let i = 1; i <= 10; i++) {
  const num = Number(prompt("Ingrese un numero"));
  ultimosNum.push(num);
}

let [, , , , , a, b, c, d, e] = ultimosNum;

alert(`La suma de los numeros da como resultado: ${a + b + c + d + e}`);
