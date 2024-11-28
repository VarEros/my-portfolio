<template>
    <nav class="navbar">
        <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/about">About Me</router-link></li>
        <a href="#contact" class="contact-button">CONTACT ME</a>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
};
</script>

<style scoped>
/* Estilos para el nav */

.navbar {
    z-index: 100;
    position: absolute;
    width: 35%;
    min-width: 500px;
    max-width: 600px;
    padding: 30px 100px;
    font-family: 'Monserrat', sans-serif; /* Cambia según tu fuente */
    font-weight: bold;
}

/* Estilos para los links */
.nav-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-links li a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    color: #244b4d; /* Color del texto */
    transition: color 0.3s ease;
}

.nav-links li a:hover {
    color: #1c3b3d; /* Color al pasar el mouse */
}

/* Botón de contacto */
.contact-button {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    background-color: #244b4d; /* Color de fondo del botón */
    padding: 10px 20px;
    border-radius: 30px;
    transition: background-color 0.3s ease;
}

.contact-button:hover {
    background-color: #1c3b3d; /* Color del botón al pasar el mouse */
}
</style>
  