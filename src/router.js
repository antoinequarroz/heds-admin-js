import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./components/HomePage.vue";
import MaterialList from "./components/MaterialList.vue";
import ScenarioList from "./components/ScenarioList.vue";
import EventList from "./components/EventList.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/material', component: MaterialList },
    { path: '/scenario', component: ScenarioList },
    { path: '/calendar', component: EventList }
    // ... autres routes si nécessaires
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
