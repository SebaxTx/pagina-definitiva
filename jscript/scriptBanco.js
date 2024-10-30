// Array local con 5 clientes iniciales
let clientes = [
    { nombre: "Juan Pérez", direccion: "Calle Falsa 123", telefono: "123456789", email: "juan@example.com", cuentas: [{ tipoCuenta: "Ahorro", saldo: 1500 }] },
    { nombre: "Ana López", direccion: "Av. Siempreviva 456", telefono: "987654321", email: "ana@example.com", cuentas: [{ tipoCuenta: "Corriente", saldo: 3000 }] },
    { nombre: "Carlos Gómez", direccion: "Calle Luna 12", telefono: "555123456", email: "carlos@example.com", cuentas: [] },
    { nombre: "María Fernández", direccion: "Av. Libertad 98", telefono: "444987654", email: "maria@example.com", cuentas: [{ tipoCuenta: "Ahorro", saldo: 5000 }] },
    { nombre: "Pedro Ruiz", direccion: "Calle Sol 7", telefono: "666777888", email: "pedro@example.com", cuentas: [] }
];

// Función para mostrar los clientes en la lista
function mostrarClientes() {
    let html = '<ul class="list-group">';
    clientes.forEach((cliente, index) => {
        html += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${cliente.nombre}</strong> - ${cliente.email}
                    <ul>
                        ${cliente.cuentas.map(cuenta => `
                            <li>${cuenta.tipoCuenta}: $${cuenta.saldo}</li>`).join('')}
                    </ul>
                </div>
                <button class="btn btn-danger btn-sm" onclick="borrarCliente(${index})">Borrar</button>
            </li>`;
    });
    html += '</ul>';
    document.getElementById('clientes-list').innerHTML = html;
}

// Función para agregar un cliente al array local
function agregarCliente(event) {
    event.preventDefault();

    const nuevoCliente = {
        nombre: document.getElementById('nombre').value,
        direccion: document.getElementById('direccion').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        cuentas: [] // Inicialmente sin cuentas
    };

    clientes.push(nuevoCliente); // Agregar cliente al array
    mostrarClientes(); // Actualizar la lista
    document.getElementById('form-agregar-cliente').reset(); // Limpiar formulario
}

// Función para borrar un cliente
function borrarCliente(index) {
    clientes.splice(index, 1); // Eliminar cliente del array
    mostrarClientes(); // Actualizar la lista
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', mostrarClientes);

// Manejar el envío del formulario
document.getElementById('form-agregar-cliente').addEventListener('submit', agregarCliente);
