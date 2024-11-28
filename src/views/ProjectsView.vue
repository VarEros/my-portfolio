<template>
<div class="title">Projects</div>
<div class="spacing"></div>
<div class="flex-projects">
  <div v-for="project in projects" :key="project.name" class="project">
    <img :src="`/assets/${project.image}`" :alt="project.name" />
    <div class="content"> 
      <div>
        <h2>{{ project.name }}</h2>
        <h3>{{ project.title }}</h3>
      </div>
      <div>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import projectsData from '../assets/projects.json';

export default {
  name: 'ProjectsPage',
  data() {
    return {
      projects: projectsData
    };
  }
};
</script>

<style scoped>
@import '@/assets/fonts.css';

h1, h2, h3, p {
  font-family: 'Sarala', sans-serif;
}

h2, h3 {
  color: var(--primary-color);
}

p {
  text-align: justify;
}

.content {
  height: fit-content;
  margin-top: 10px;
}

.ProjectsPage {
  display: flex;
}

.flex-projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.project {
  width: 65vw;
  display: flex;
  align-items: center;
  gap: 20px;
}

.project img {
  width: 200px;
  height: 200px;
  display: block;
}
</style>
