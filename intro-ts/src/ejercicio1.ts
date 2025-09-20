// Ejercicio 1: Interfaces, Enums y Tipos de Unión

// Enum EstadoProducto
enum EstadoProducto {
    Disponible = "Disponible",
    Agotado = "Agotado",
    Descontinuado = "Descontinuado"
}

// Tipo de unión IDProducto
type IDProducto = string | number;

// Interfaz Producto
interface Producto {
    id: IDProducto;
    nombre: string;
    precio: number;
    estado: EstadoProducto;
    descripcion?: string;
}

// Función mostrarDetallesProducto
function mostrarDetallesProducto(producto: Producto): void {
    console.log("=== DETALLES DEL PRODUCTO ===");
    console.log(`ID: ${producto.id}`);
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio.toFixed(2)}`);
    console.log(`Estado: ${producto.estado}`);
    
    if (producto.descripcion) {
        console.log(`Descripción: ${producto.descripcion}`);
    } else {
        console.log("Descripción: No disponible");
    }
    console.log("=============================\n");
}

// Creación de objetos Producto y pruebas

// Producto con ID numérico y descripción
const producto1: Producto = {
    id: 1,
    nombre: "Laptop Gaming MSI",
    precio: 1299.99,
    estado: EstadoProducto.Disponible,
    descripcion: "Laptop para gaming con procesador Intel i7, 16GB RAM, RTX 4060"
};

// Producto con ID string sin descripción
const producto2: Producto = {
    id: "iPhone-1",
    nombre: "iPhone 15 Pro",
    precio: 999.99,
    estado: EstadoProducto.Agotado
};

console.log("Gestión de productos tienda en línea\n");

mostrarDetallesProducto(producto1);
mostrarDetallesProducto(producto2);