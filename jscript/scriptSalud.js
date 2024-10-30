// Datos simulados de pacientes
const pacientes = [
    { id: 1, nombre: "Juan Pérez", edad: 32, sexo: "Masculino" },
    { id: 2, nombre: "María Gómez", edad: 27, sexo: "Femenino" },
    { id: 3, nombre: "Carlos López", edad: 40, sexo: "Masculino" },
    { id: 4, nombre: "Lucía Rodríguez", edad: 22, sexo: "Femenino" }
];

// Cargar pacientes al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarPacientes(pacientes);
});

// Mostrar pacientes en la tabla
function mostrarPacientes(pacientes) {
    const tbody = document.getElementById('patientTableBody');
    tbody.innerHTML = ''; // Limpiar tabla

    pacientes.forEach(paciente => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${paciente.id}</td>
            <td>${paciente.nombre}</td>
            <td>${paciente.edad}</td>
            <td>${paciente.sexo}</td>
            <td><button class="btn btn-sm btn-info">Detalles</button></td>
        `;
        tbody.appendChild(fila);
    });
}

// Búsqueda de pacientes por nombre o ID
document.getElementById('searchInput').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const pacientesFiltrados = pacientes.filter(paciente =>
        paciente.nombre.toLowerCase().includes(query) || paciente.id.toString().includes(query)
    );
    mostrarPacientes(pacientesFiltrados);
});
