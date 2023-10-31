for (let numero = 1; numero <= 500; numero++) {
    if (numero % 4 === 0 && numero % 9 === 0) {
      console.log(`${numero} (Múltiplo de 4 y 9)`);
    } else if (numero % 4 === 0) {
      console.log(`${numero} (Múltiplo de 4)`);
    } else if (numero % 9 === 0) {
      console.log(`${numero} (Múltiplo de 9)`);
    } else {
      console.log(numero);
    }
  
    if (numero % 5 === 0) {
      console.log("-----------------------------------------------------------------");
    }
  }
  