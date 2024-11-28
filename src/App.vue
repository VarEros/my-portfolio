<template>
  <div id="app">
    <NavBar/>
    <router-view></router-view>
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
  color: var(--primary-color);
  font-family: 'Railway', sans-serif;
  font-weight: 700;
  font-size: 5rem;
  right: 5vw;
  position: absolute;
  text-align: end;
  padding: 20px;
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


</style>
