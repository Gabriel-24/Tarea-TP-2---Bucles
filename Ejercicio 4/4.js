let suma = 0;

while (true) {
  const entrada = prompt("Por favor, ingrese un número (o haga clic en 'Cancelar' para detenerse):");

  if (entrada === null) {
    break; 
  }

  const numero = parseFloat(entrada);

  if (!isNaN(numero)) {
    suma += numero;
  } else {
    alert("Esto no es un número válido. Por favor, ingrese un número.");
  }
}

if (suma !== 0) {
  alert(`La suma total de los números introducidos es: ${suma}`);
} else {
  alert("No se ingresaron números válidos.");
}
