const edad = prompt("Por favor, ingrese su edad:");

if (!isNaN(edad)) { 
  const edadNumero = parseFloat(edad);

  if (edadNumero >= 18) {
    console.log("¡Ya puede conducir!");
  } else {
    console.log("Lo siento, aún no puede conducir.");
  }
} else {
  console.log("La entrada no es un número válido.");
}