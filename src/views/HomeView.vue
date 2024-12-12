<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import SocialIcons from '@/components/SocialIcons.vue';
import myPic from '../assets/images/eros_vanna_pic.png'
import ButtonTemplate from '@/components/ButtonTemplate.vue';
import skillsData from '../assets/skills.json';
import ProjectCard from '@/components/ProjectCard.vue';
import projectsData from '../assets/projects.json';
import ContactForm from '@/components/ContactForm.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MobileTopDiv from '@/components/MobileTopDiv.vue';
import 'animate.css';

export default {
  name: 'HomePage',
  components: {
    MobileTopDiv,
    SocialIcons,
    ButtonTemplate,
    ProjectCard,
    ContactForm,
    FooterComponent
  },
  setup() {
    const windowWidth = ref(window.innerWidth);

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    const isDesktop = computed(() => windowWidth.value > 1000);

    onMounted(() => {
      window.addEventListener('resize', updateWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateWindowWidth);
    });

    return {
      isDesktop,
      myPic,
      skillsData,
      projectsData
    };
  },
};
</script>

<template>
<div class="flex main">
  <div v-if="isDesktop" class="top-div">
    <h1 class="title on-primary">Home</h1>
    <div class="spacing"/>
    <div class="top-div-content">
      <div class="home-texts animate__animated animate__fadeInLeft">
        <h2>Hi, I am</h2>
        <h1>Erick Gonzalez</h1>
        <h3>Backend / Mobile Developer</h3>
        <div class="spacing"></div>
        <SocialIcons />
      </div>
      <div class="pic-container animate__animated animate__fadeInRight">
        <img :src="myPic" class="" />
      </div>
    </div>
  </div>
  <MobileTopDiv v-else></MobileTopDiv>
  <div class="recent-project">
    <h2 class="recent-project-title"><b>Proyecto mas reciente:</b> {{ projectsData[0].name }}</h2>
    <p class="recent-project-text">{{ projectsData[0].description }}</p>
    <ButtonTemplate/>
    <img :src="`/assets/${projectsData[0].image}`"/>
  </div>
  <div class="skill-div flex gradient-background">
    <h2 class="content-title">SKILLS</h2>
    <h2 class="skills-list-title">Languages</h2>
    <div class="skills-list">
      <div v-for="skill in skillsData.filter(skill => skill.type === 'Language')" :key="skill.name" class="skill">
        <img :src="`/assets/languages/${skill.image}`" class="skill-image" :alt="skill.name" />
        <h4 class="skill-text">{{ skill.name.toUpperCase() }}</h4>
      </div>
    </div>
    <h2 class="skills-list-title">Database</h2>
    <div class="skills-list">
      <div v-for="skill in skillsData.filter(skill => skill.type === 'Database')" :key="skill.name" class="skill">
        <img :src="`/assets/languages/${skill.image}`" class="skill-image" :alt="skill.name" />
        <h4 class="skill-text">{{ skill.name.toUpperCase() }}</h4>
      </div>
    </div>
    <h2 class="skills-list-title">Frameworks</h2>
    <div class="skills-list">
      <div v-for="skill in skillsData.filter(skill => skill.type === 'Framework')" :key="skill.name" class="skill">
        <img :src="`/assets/languages/${skill.image}`" class="skill-image" :alt="skill.name" />
        <h4 class="skill-text">{{ skill.name.toUpperCase() }}</h4>
      </div>
    </div>
    <h2 class="skills-list-title">Softwares</h2>
    <div class="skills-list">
      <div v-for="skill in skillsData.filter(skill => skill.type === 'Software')" :key="skill.name" class="skill">
        <img :src="`/assets/languages/${skill.image}`" class="skill-image" :alt="skill.name" />
        <h4 class="skill-text">{{ skill.name.toUpperCase() }}</h4>
      </div>
    </div>
  </div>
  <div class="project-div flex">
    <h2 class="content-title-dark">PROJECTS</h2>
    <ProjectCard
      v-for="(project, index) in projectsData.slice(0, 3)"
      :key="index"
      :title="project.name"
      :description="project.description"
      :image="project.image"
      :skills="project.skills"
    />
  </div>
  <div class="contact-div flex gradient-background">
    <h2 class="content-title">CONTACT</h2>
    <p>Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.</p>
    <ContactForm/>
  </div>
  <FooterComponent/>
</div>
</template>

<style scoped>

.on-primary{
  color: var(--background-color);
}

.main {
  overflow: hidden;
}

.top-div {
  z-index: 10;
  font-family: 'Railway', sans-serif;
  height: 100vh;
  width: 100%;
  background-image: -webkit-linear-gradient(170deg, var(--primary-color) 55%, var(--background-color) 55%);
  display: flex;
  flex-direction: column;
  align-items: start;
}

.top-div-content {
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

img {
  width: 800px;
  height: auto;
  display: block;
}

.pic-container {
  overflow: hidden;
  animation: 1.5s infinte img;
}

.home-texts{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8%;
  width: 35vw;
  height: 100%;
  color: var(--primary-color);
}

.recent-project {
  position: relative;
  font-family: 'Monserrat', sans-serif;
  padding: 50px 100px;
  background-color: var(--text-color);
  color: var(--container-color);
}

@media (max-width: 768px) {
  .recent-project-text {
    width: 100% !important;
  }
  .recent-project {
    padding: 50px 50px;
  }
}

@media (max-width: 480px) {
  .skill-image {
  width: 80px !important;
}
}

.recent-project img {
  z-index: 9;
  position: absolute;
  right: 60px;
  top: -20px;
  height: 300px;
  width: auto;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
  opacity: 0.2;
  border-radius: 10px;
  transform: rotate3d(1, 1, 0.4, 35deg);
}

.recent-project-title {
  margin-bottom: 20px;
  letter-spacing: 5px;
}

.recent-project-text {
  width: 80%;
}

.skill-div {
  z-index: 10;
  color: var(--primary-color);
  font-family: 'Monserrat', sans-serif;
  padding: 5vh 0px;
}

.skills-list-title {
  width: 60%;
  max-width: 800px;
  letter-spacing: 5px;
  text-align: start;
}

.skills-list {
  display: grid;
  justify-content: space-between;
  justify-items: center;
  width: 60%;
  max-width: 800px;
  grid-gap: 70px;
  grid-template-columns: repeat(auto-fill, 120px);
  margin-bottom: 70px;
}

@media (max-width: 540px) {
  .skills-list {
    grid-gap: 40px;
    width: 80%;
    justify-content: space-around;
  }
}

.skill-image {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.skill-text {
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 5px;
}

.skill {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-title {
  padding: 30px 7.5rem;
  letter-spacing: 5px;
  font-weight: 700;
  border: 7px solid var(--primary-color);
}

.content-title-dark {
  padding: 30px 7.5rem;
  letter-spacing: 5px;
  border: 7px solid var(--container-color);
}

.project-div {
  font-family: 'Monserrat', sans-serif;
  padding: 5vh 0px;
  background-color: var(--text-color);
  color: var(--container-color);
}

.contact-div {
  height: 90vh;
  width: auto;
  color: var(--primary-color);
  font-family: 'Monserrat', sans-serif;
  padding: 5vh 15vw;
}

@media (max-width: 768px) {
  .contact-div {
    padding: 5vh 5vw;
  }
}

@media (max-height: 700px) {
  .contact-div p {
    display: none;
  }
}

h1 {
  font-size: 5rem;
}

h2 {
  font-weight: 500;
  margin-bottom: 10vh;
}

h3 {
  color: var(--secondary-color);
  font-weight: 800;
  margin-bottom: 100px;
}


</style>