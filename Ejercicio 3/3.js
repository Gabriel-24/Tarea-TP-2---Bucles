let textoConcatenado = '';

while (true) {
  const cadena = prompt("Por favor, ingrese una cadena de texto:");

  if (cadena === null) {
    const continuar = confirm("¿Desea continuar ingresando cadenas?");
    if (!continuar) {
      break;
    }
  } else {
    textoConcatenado += cadena + '-';
  }
}

if (textoConcatenado !== '') {
  
  textoConcatenado = textoConcatenado.slice(0, -1);
  alert(`Cadenas concatenadas: ${textoConcatenado}`);
} else {
  alert("No se ingresaron cadenas de texto.");
}