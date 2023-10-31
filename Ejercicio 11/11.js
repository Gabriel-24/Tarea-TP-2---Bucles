let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  const nombre = prompt(`Por favor, ingrese el nombre ${i + 1}:`);
  const edad = parseFloat(prompt(`Por favor, ingrese la edad de ${nombre}:`));

  if (!isNaN(edad)) {
    nombres.push(nombre);
    edades.push(edad);
  } else {
    alert("Por favor, ingrese una edad válida.");
    i--; 
  }
}

if (nombres.length > 0) {
  const indiceMayor = edades.indexOf(Math.max(...edades));
  const nombreMayor = nombres[indiceMayor];
  alert(`La persona de mayor edad es ${nombreMayor}.`);
} else {
  alert("No se ingresaron edades válidas.");
}
