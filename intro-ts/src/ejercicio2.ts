// Ejercicio 2: Interfaces y Objetos

// Definición de la interfaz Usuario
interface Usuario {
    nombre: string;
    edad: number;
    email?: string; // Propiedad opcional
}

// Función para imprimir información del usuario
function imprimirUsuario(usuario: Usuario): void {
    console.log("=== INFORMACIÓN DEL USUARIO ===");
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Edad: ${usuario.edad} años`);
    
    // Manejo de la propiedad opcional email
    if (usuario.email) {
        console.log(`Email: ${usuario.email}`);
    } else {
        console.log("Email: No proporcionado");
    }
    console.log(" ---- \n");
}

// Usuario con email
const usuario1: Usuario = {
    nombre: "Ana García",
    edad: 28,
    email: "ana.garcia@email.com"
};

// Usuario sin email (email no incluido)
const usuario2: Usuario = {
    nombre: "Carlos Rodríguez",
    edad: 35
};

// Usuario con email vacío (string vacío)
const usuario3: Usuario = {
    nombre: "María López",
    edad: 24,
    email: ""
};

// Usuario adicional sin email
const usuario4: Usuario = {
    nombre: "Pedro Martínez",
    edad: 42
};

console.log("Gestión de Usuarios\n");

imprimirUsuario(usuario1);
imprimirUsuario(usuario2);
imprimirUsuario(usuario3);
imprimirUsuario(usuario4);