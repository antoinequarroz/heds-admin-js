import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./components/HomePage.vue";
import MaterialList from "./components/MaterialList.vue";
import ScenarioList from "./components/ScenarioList.vue";
import EventList from "./components/EventList.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/material', component: MaterialList },
    { path: '/scenario', component: ScenarioList },
    { path: '/event', component: EventList },
    { path: '/admin', component: Dashboard }
    // ... autres routes si nécessaires
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
