function protectRoute() {
    const sessionItem = localStorage.getItem('session');

    if (!sessionItem) {
        // Redirige al usuario a la página de inicio de sesión si no tiene una sesión válida
        window.location.href = '/auth';
    }
}


protectRoute()