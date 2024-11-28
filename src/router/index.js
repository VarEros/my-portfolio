import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from '../views/HomeView.vue';
import ProjectsPage from '../views/ProjectsView.vue';
import AboutPage from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/projects', name: 'Projects', component: ProjectsPage },
  { path: '/about', name: 'About', component: AboutPage },
];

const router = createRouter({
history: createMemoryHistory(),
routes,
})

export default router;
