<template>
    <div class="project-card">
      <div class="project-content">
        <h2 class="project-title">{{ title }}</h2>
        <p class="project-description">{{ description }}</p>        
        <div class="skills-container">
          <img v-for="(skill, index) in skills" :key="index" :src="'/assets/languages/'+skill" :alt="'skill'"/>
        </div>
        <button class="project-button">View Project</button>

      </div>
      <div class="project-image">
        <img :src="'/assets/'+image" :alt="title" />
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: "ProjectCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      skills: {
        type: Array,
        required: true,
      }
    }
  };
  </script>
  
  <style scoped>
  .project-card {
    display: flex;
    border-radius: 20px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 50vw;
    min-width: 650px;
    height: 500px;
    margin: 20px auto;
  }
  
  .project-content {
    flex: 1;
    padding-left: 6%;
    padding-right: 4%;
    width: 40%;
    height: 100%;
    align-content: center;
    z-index: 10;
    background-color: var(--container-color);
  }
  
  .project-title {
    font-size: 24px;
    font-weight: bold;
    color: var(--primary-color);
    margin-bottom: 15px;
  }
  
  .project-description {
    font-size: 16px;
    color: var(--secondary-color);
    margin-bottom: 20px;
  }
  
  .project-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: transparent;
    color: #1a1a1a;
    border: 2px solid #1a1a1a;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
   
  .project-button:hover {
    background-color: #1a1a1a;
    color: white;
  }

  .skills-container {
    display: flex;
    gap: 7px;
    margin-bottom: 10px;
  }

  .skills-container img { 
    height: 30px;
    width: auto;
    filter: brightness(0%);
  }

  .project-image {
    flex: 1;
    display: flex;
    justify-content: center;
    height: auto;
    width: 50%;
    z-index: 9;
    background-color: #fbf8f1;
  }
  
  .project-image img {
    display: block;
    object-fit: cover;
  }
  </style>
  