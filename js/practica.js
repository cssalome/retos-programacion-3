function saludar(nombre, cd) {
  const saludo = `Hola como estas,${nombre}`;
  cd(saludo);
  console.log("Muchas otras cosas");
}

function despues(mensaje) {
  setTimeout(() => {
    alert(`Desde el callback: ${mensaje}`);
  }, 5000);
  console.log("Puedo hacer otras cosas");
}

saludar(`Pepe`, despues);
