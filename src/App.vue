<template>
  <div id="app">
    <NavBar/>
    <div class="all">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar, // Registra el componente
  },
};
</script>

<style>
.all {
  overflow: hidden;
}

body {
  background: radial-gradient(rgba(255,255,255,1) 0%, rgba(214,214,214,1) 44%);  
  background-size: 100% 250%;
  background-position: 0% 50%;
  margin: 0px;
}

.spacing {
  height: 15vh;
}

.title {
  z-index: 100;
  color: var(--primary-color);
  font-family: 'Railway', sans-serif;
  font-weight: 700;
  font-size: 4.5rem;
  right: 5vw;
  position: absolute;
  text-align: end;
  padding: 10px;
}

.flex {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.gradient-background {
  background: radial-gradient(rgba(255,255,255,1) 0%, rgba(214,214,214,1) 44%);  
  background-size: 100% 250%;
  background-position: 0% 50%;
}

.special-button {
  font-family: 'Monserrat', sans-serif;
  margin-top: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent; /* Color de fondo */
  color: var(--primary-color); /* Color del texto */
  border: 3px solid var(--primary-color);
  padding: 15px 40px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  overflow: hidden;
  transition: all 0.3s ease;
  bottom: 0;
}

.special-button span {
  position: relative;
}

.special-button:hover {
  color: var(--container-color);
  background-color: var(--primary-color)
}

</style>
