function primeList(max){
    // Crea un arreglo de tamaño max + 1 para llevar un registro de los números que ya fueron marcados como múltiplos
    let flags = new Array(max + 1).fill(true); // Arreglo para marcar los números ya almacenados como primos o rechazados como primos
    flags[1] = false;
    let result = []; // Arreglo para almacenar los números primos
    let lastPrime = 0; // Último primo encontrado, para a partir de allí comenzar a validar los números no marcados o rechazados
    if(max === 2){
        return [2];
    }
    for(let i = 2; i**2 <= max; i++){ // Recorre número por número mientras que i al cuadrado sea menor que max
        for(let j = i; j <= max; j=j+i){ // Recorre múltiplos de i para marcar el primero como primo y los demás como rechazados
            if( i === j ){
                if(flags[i]){
                    result.push(i) // Agrega un número primo en el arreglo result
                    lastPrime = i; // Almacena último número primo encontrado
                }
            }else{
                    flags[j] = false // Rechaza números múltiplos
            }
        }
    }
    // Recorrer el arreglo de banderas y agregar los números que no fueron marcados
    for(let n = lastPrime + 1; n <= max; n++){
        if(flags[n]){
            result.push(n);
        }
    }
    return result;
}

console.log(primeList(20)); // Imprime por consola los números primos hasta el valor indicado (max)