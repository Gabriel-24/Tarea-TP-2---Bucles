const texto = prompt("Por favor, ingrese un texto:");
const textoEnMinusculas = texto.toLowerCase(); 

let posicion = -1; 

for (let i = 0; i < textoEnMinusculas.length; i++) {
  const caracter = textoEnMinusculas[i];
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    posicion = i;
    break; 
  }
}

if (posicion !== -1) {
  const vocalEncontrada = texto[posicion];
  alert(`La vocal '${vocalEncontrada}' está en la posición ${posicion}.`);
} else {
  alert("No se encontraron vocales en el texto.");
}
