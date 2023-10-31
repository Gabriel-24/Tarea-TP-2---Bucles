const texto = prompt("Por favor, ingrese una cadena de texto:");
let textoAlReves = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoAlReves += texto[i];
}

alert(`Texto al revés: ${textoAlReves}`);
