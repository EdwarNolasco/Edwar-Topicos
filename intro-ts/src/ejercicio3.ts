// Ejercicio 3: Arrays
// Función que recibe un nombre y un número de veces, y devuelve un array con el nombre repetido

function repetirNombre(nombre: string, veces: number): string[] {
    const resultado: string[] = [];
    
    for (let i = 0; i < veces; i++) {
        resultado.push(nombre);
    }
    
    return resultado;
}

// Ejemplos de uso
console.log("Ejercicio 3: Arrays");
console.log("===================");

// Ejemplo del ejercicio
console.log('repetirNombre("Juan", 3):', repetirNombre("Juan", 3));

// Más ejemplos
console.log('repetirNombre("María", 5):', repetirNombre("María", 5));
console.log('repetirNombre("Pedro", 1):', repetirNombre("Pedro", 1));
console.log('repetirNombre("Ana", 0):', repetirNombre("Ana", 0));
