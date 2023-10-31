const texto = prompt("Por favor, ingrese una cadena de texto:");
let textoConGuiones = "";

for (let i = 0; i < texto.length; i++) {
  textoConGuiones += texto[i];
  if (i < texto.length - 1) {
    textoConGuiones += "-";
  }
}

alert(`Texto con guiones: ${textoConGuiones}`);
