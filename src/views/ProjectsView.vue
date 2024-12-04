<template>
<div class="title">Projects</div>
<div class="spacing"></div>
<div class="flex-projects">
  <div v-for="(project, index) in projects" :key="project.name" class="project animate__animated animate__fadeInRight"
  :style="{ animationDelay: `${index * 0.2}s` }">
    <img :src="`/assets/${project.image}`" :alt="project.name" />
    <div class="content"> 
      <div class="titles">
        <h2>{{ project.name }}</h2>
        <h3>{{ project.title }}</h3>
      </div>
      <p class="truncate">{{ project.description }}</p>
      <SkillChip :skills="project.skills"/>
    </div>
  </div>
  <FooterComponent/>
</div>
</template>

<script>
import SkillChip from '@/components/SkillChip.vue';
import projectsData from '../assets/projects.json';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'ProjectsPage',
  components: {
    SkillChip,
    FooterComponent
  },
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
  height: 100%;
  object-fit: cover;
  max-width: 300px;
  max-height: 300px;
  display: block;
}

@media (max-width: 900px) {
  .project {
    min-width: 0;
    width: 98%;
  }
  .project img {
    width: 40vw;
    height: 100%;
    object-fit: cover;
  }
}

@media (max-width: 480px) {
  p {
    letter-spacing: 0px;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    /* font-size: 1.2rem;
    margin-bottom: 10px; */
    display: none;
  }
  .project {
    gap: 10px;
    height: 200px;
  }
}



</style>
