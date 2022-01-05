/* Realizar un programa que imprima 25 términos de la 
serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado)
 */
let i = 1;
resultado = [];
const once = 11;

while (i <= 25) {
  let multip = i * once;
  resultado.push(multip);
  i++;
}

alert(resultado);
