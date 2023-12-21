import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./components/HomePage.vue";
import Material from "./components/Material.vue";
import Scenario from "./components/Scenario.vue";
import Event from "./components/Event.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";
import MaterialList from "./components/Dashboard/List/MaterialList.vue";
import ScenarioList from "./components/Dashboard/List/ScenarioList.vue";
import EventList from "./components/Dashboard/List/EventList.vue";
import StatistiquesPage from "./components/Dashboard/StatistiquesPage.vue";
import Faq from "./components/Dashboard/Faq.vue";
import User from "./components/Dashboard/User.vue";
import MaterialForm from "./components/Dashboard/Forms/MaterialForm.vue";
import MaterialDetails from "./components/Dashboard/Details/MaterialDetails.vue";
import Projet from "./components/Projet.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/projet', component: Projet, name: 'projet' },
    { path: '/material', component: Material },
    { path: '/scenario', component: Scenario },
    { path: '/event', component: Event },
    { path: '/admin', component: Dashboard },
    { path: '/material_list', component: MaterialList },
    { path: '/scenario_list', component: ScenarioList },
    { path: '/event_list', component: EventList },
    { path: '/statistiques', component: StatistiquesPage },
    { path: '/faq', component: Faq },
    { path: '/user', component: User },
    { path: '/material_form', component: MaterialForm, name: 'MaterialForm'  },
    { path: '/material/:matSlug', component: MaterialDetails, name: 'material-details', props: true }

    // ... autres routes si nécessaires
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
