import { createApp } from 'vue';
import App from './App.vue';
import { createWebHistory, createRouter } from "vue-router";
import Login from './components/form/Login.vue';
import Cats from './components/cats/CatList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/cats', 
        component: Cats,
        meta: { requiresAuth: true } },
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app')

export default router