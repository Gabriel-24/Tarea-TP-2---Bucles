const maximo = prompt("Por favor, ingrese un número (no mayor de 50) para la pirámide inversa:");

if (!isNaN(maximo) && maximo > 0 && maximo <= 50) {
  for (let i = maximo; i >= 1; i--) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    console.log(linea);
  }
} else {
  alert("Por favor, ingrese un número válido entre 1 y 50.");
}
