<template>
    <div class="social-icons">
      <a
        v-for="icon in icons"
        :key="icon.name"
        :href="icon.link"
        target="_blank"
        class="social-icon"
      >
        <img :src="icon.src" :alt="icon.name" />
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialIcons',
    data() {
      return {
        icons: [
          {
            name: 'Email',
            src: require('@/assets/icons/media/email.svg'), // Ruta de tu ícono de email
            link: 'mailto:erickgonzalezg2004@gmail.com',
          },
          {
            name: 'GitHub',
            src: require('@/assets/icons/media/github.svg'), // Ruta de tu ícono de GitHub
            link: 'https://github.com/vareros',
          },
          {
            name: 'LinkedIn',
            src: require('@/assets/icons/media/linkedin.svg'), // Ruta de tu ícono de LinkedIn
            link: 'https://www.linkedin.com/in/erick-oswaldo-gonzález-gallegos-13b8b2267/',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .social-icons {
    z-index: 100;
    display: flex;
    gap: 15px;
    justify-content: start;
    align-items: center;
  }
  
  .social-icon {
    display: inline-block;
    width: 70px;
    height: 70px;
    border-radius: 8px;
    background-color: #d6d6d6;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  
  @media (max-width: 768px) {
    .social-icon {
      width: 60px;
      height: 60px;
    }
  }
  
  .social-icon img {
    width: 50%;
    height: 50%;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  }
  </style>
  