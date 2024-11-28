import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/styles.css';  // Asegúrate de importar tus estilos globales



createApp(App)
  .use(router)
  .mount('#app')