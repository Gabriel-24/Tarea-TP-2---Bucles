const nota = prompt("Por favor, ingrese una nota (número del 0 al 10):");

if (!isNaN(nota)) { 
  const notaNumero = parseFloat(nota);

  if (notaNumero >= 0 && notaNumero <= 10) {
    if (notaNumero >= 0 && notaNumero <= 2) {
      alert("Muy deficiente");
    } else if (notaNumero >= 3 && notaNumero <= 4) {
      alert("Insuficiente");
    } else if (notaNumero >= 5 && notaNumero <= 6) {
      alert("Suficiente");
    } else if (notaNumero === 7) {
      alert("Bien");
    } else if (notaNumero >= 8 && notaNumero <= 9) {
      alert("Notable");
    } else if (notaNumero === 10) {
      alert("Sobresaliente");
    }
  } else {
    alert("Número erróneo");
  }
} else {
  alert("Introduce un número válido");
}




