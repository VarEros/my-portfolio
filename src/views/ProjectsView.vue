<template>
<div class="title">Projects</div>
<div class="spacing"></div>
<div class="flex-projects">
  <div v-for="project in projects" :key="project.name" class="project">
    <img :src="`/assets/${project.image}`" :alt="project.name" />
    <div class="content"> 
      <div class="titles">
        <h2>{{ project.name }}</h2>
        <h3>{{ project.title }}</h3>
      </div>
      <p class="truncate">{{ project.description }}</p>
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
  font-family: 'Railway', sans-serif;
}

h2, h3 {
  color: var(--primary-color);
}

h2 {
  margin-bottom: 5px;
}

p {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 2px;
}

.truncate {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 4;
           line-clamp: 4;
   -webkit-box-orient: vertical;
}

.content {
  height: 100%;
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
  height: 300px;
  width: 65%;
  min-width: 900px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.project img {
  width: 300px;
  height: 300px;
  display: block;
}
</style>
