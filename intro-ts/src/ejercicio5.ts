// Ejercicio 5: Enums y Estructuras de Control

// Definir el enum DiaSemana
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

// Función que determina si un día es fin de semana
function esFinDeSemana(dia: DiaSemana): boolean {
    switch (dia) {
        case DiaSemana.Sabado:
        case DiaSemana.Domingo:
            return true;
        case DiaSemana.Lunes:
        case DiaSemana.Martes:
        case DiaSemana.Miercoles:
        case DiaSemana.Jueves:
        case DiaSemana.Viernes:
            return false;
        default:
            return false;
    }
}

// Ejemplos de uso
console.log("Ejercicio 5: Enums y Estructuras de Control");
console.log("===========================================");

// Probar con todos los días de la semana
console.log(`Lunes es fin de semana: ${esFinDeSemana(DiaSemana.Lunes)}`);
console.log(`Martes es fin de semana: ${esFinDeSemana(DiaSemana.Martes)}`);
console.log(`Miércoles es fin de semana: ${esFinDeSemana(DiaSemana.Miercoles)}`);
console.log(`Jueves es fin de semana: ${esFinDeSemana(DiaSemana.Jueves)}`);
console.log(`Viernes es fin de semana: ${esFinDeSemana(DiaSemana.Viernes)}`);
console.log(`Sábado es fin de semana: ${esFinDeSemana(DiaSemana.Sabado)}`);
console.log(`Domingo es fin de semana: ${esFinDeSemana(DiaSemana.Domingo)}`);
