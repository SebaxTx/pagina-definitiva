document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación para usuario y contraseña "root"
    if (username === 'root' && password === 'root') {
        alert('Inicio de sesión exitoso');
        // Redirigir a otra página o realizar otra acción
    } else {
        document.getElementById('message').innerText = 'Credenciales incorrectas, por favor inténtelo de nuevo.';
    }
});
