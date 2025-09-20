// Ejercicio 4: Clases y Métodos

class CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string) {
        this.titular = titular;
        this.saldo = 0;
    }

    depositar(monto: number): void {
        if (monto <= 0) {
            console.log("Error: El monto debe ser positivo");
            return;
        }
        this.saldo += monto;
        console.log(`Depósito realizado: $${monto}. Nuevo saldo: $${this.saldo}`);
    }

    retirar(monto: number): void {
        if (monto <= 0) {
            console.log("Error: El monto debe ser positivo");
            return;
        }
        if (monto > this.saldo) {
            console.log("Error: Saldo insuficiente");
            return;
        }
        this.saldo -= monto;
        console.log(`Retiro realizado: $${monto}. Nuevo saldo: $${this.saldo}`);
    }

    consultarSaldo(): void {
        console.log(`Saldo actual de ${this.titular}: $${this.saldo}`);
    }
}

// Crear instancia y realizar operaciones
console.log("Ejercicio 4: Clases y Métodos");
console.log("==============================");

const cuenta = new CuentaBancaria("Juan Pérez");

// Consultar saldo inicial
cuenta.consultarSaldo();

// Realizar depósitos
cuenta.depositar(1000);
cuenta.depositar(500);

// Realizar retiros
cuenta.retirar(200);
cuenta.retirar(2000); // Error: saldo insuficiente

// Consultar saldo final
cuenta.consultarSaldo();
