<script>
import myPic from '../assets/images/eros_vanna_background.png';

export default {
  name: 'AboutPage',
  data() {
    return {
        myPic,
        icons: [
          {
            name: 'Coding',
            src: require('@/assets/icons/hobbies/code-solid.svg')
          },
          {
            name: 'Reading',
            src: require('@/assets/icons/hobbies/book-solid.svg')
          },
          {
            name: 'Piano',
            src: require('@/assets/icons/hobbies/music-solid.svg')
          },
          {
            name: 'Gaming',
            src: require('@/assets/icons/hobbies/gamepad-solid.svg')
          },
          {
            name: 'Exercise',
            src: require('@/assets/icons/hobbies/dumbbell-solid.svg')
          },
        ],
      };
  }
}
</script>
<template>
  <h1 class="title">About me</h1>
  <div class="main">
    <div class="image-container">
      <img :src="myPic" alt="Ejemplo" class="main-image" />
    </div>
    <div class="flex content">
      <div class="flex text">
        <h2>How am I?</h2>
        <p>I am currently a master’s student in Applied Geoinformatics at the  University of Salzburg, Austria. I have a keen interest in front-end and  GIS development. My goal is to use my expertise in building exciting  and functional user interfaces. Additionally, employ my geospatial  analysis, modeling, and process automation skills to engineer  innovative, customizable, and sustainable software solutions. The following are tech stacks that I use regularly:</p>
        <div class="hobbies-list">
          <div class="flex" v-for="hobby in icons" :key="hobby.name">
            <img :src="hobby.src" class="icon"/>
            <h4>{{ hobby.name }}</h4>
          </div>
        </div>
      </div>
      <button class="special-button ">
        <span>Download Resume</span>
      </button>
    </div>
  </div>

</template>

<style scoped>
.main {
  padding-top: 15vh;
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.content {
  width: 500px;
  height: 60%;
  justify-content: space-between;
  align-items: start;
}

.text {
  font-family: 'Satoshi', sans-serif;
  color: var(--text-color);
  height: 100%;
  width: 100%;
  gap: 30px;
  align-items: start;
}

span {
  font-size: 0.9rem;
}

h2 {
  color: var(--primary-color);
  font-size: 2.3rem;
}

p {
  font-size: 1.1rem;
  font-weight: 500;
}

h4 {
  font-size: 0.9rem;
  font-weight: 800;
}

.hobbies-list {
  display: flex;
  width: 100%;
  align-content: space-between;
}

.icon {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  filter: invert(1%) sepia(14%) saturate(261%) hue-rotate(314deg) brightness(101%) contrast(79%);
  /* filter: invert(24%) sepia(51%) saturate(290%) hue-rotate(137deg) brightness(97%) contrast(95%); */
}

/* Contenedor para posicionamiento */
.image-container {
  position: relative;
  display: inline-block; /* Permite ajustar el tamaño al contenido */
  height: 60%;
}

/* Imagen principal */
.main-image {
  display: block;
  position: relative;
  z-index: 2; /* Asegura que la imagen esté delante */
  height: 100%;
  width: 100%;
}

/* Forma detrás de la imagen */
.image-container::before {
  content: '';
  position: absolute;
  bottom: 20px; /* Ajusta para mover la forma */
  left: -20px; /* Ajusta para mover la forma */
  width: 30%;
  height: 100%;
  background-color: var(--primary-color); /* Color de la forma */
  z-index: 1; /* Asegura que esté detrás de la imagen */
}

</style>

  