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
import Error404 from "./components/Utils/Error404.vue";
import SignIn from "./components/Utils/SignIn.vue";
import SignUp from "./components/Utils/SignUp.vue";
import ForgotPassword from "./components/Utils/ForgotPassword.vue";
import TermOfUse from "./components/Utils/TermOfUse.vue";
import Reservation from "./components/Reservation/Reservation.vue";
import ReservationVide from "./components/Reservation/ReservationVide.vue";
import Wishlist from "./components/Reservation/Wishlist.vue";
import ComingSoon from "./components/Utils/ComingSoon.vue";
import FAQ from "./components/FAQ.vue";
import Profile from "./components/Profile.vue";
import SiteDetail from "./components/SiteDetail/SiteDetail.vue";
import EditUserProfile from "./components/UserProfile/EditUserProfile.vue";
import DeleteUserProfile from "./components/UserProfile/DeleteUserProfile.vue";
import DocumentsUserProfile from "./components/UserProfile/DocumentsUserProfile.vue";
import HomeUserProfile from "./components/UserProfile/HomeUserProfile.vue";
import ResumStageUserProfile from "./components/UserProfile/ResumStageUserProfile.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/projet', component: Projet, name: 'projet' },
    { path: '/material', component: Material, name: 'material' },
    { path: '/scenario', component: Scenario, name: 'scenario' },
    { path: '/event', component: Event, name: 'event' },
    { path: '/admin', component: Dashboard, name: 'dashboard' },
    { path: '/material_list', component: MaterialList, name: 'material-list' },
    { path: '/scenario_list', component: ScenarioList, name: 'scenario-list' },
    { path: '/event_list', component: EventList, name: 'event-list' },
    { path: '/statistiques', component: StatistiquesPage, name: 'statistiques' },
    { path: '/faq', component: Faq, name: 'faq' },
    { path: '/user', component: User, name: 'user' },
    { path: '/material_form', component: MaterialForm, name: 'MaterialForm'  },
    { path: '/material/:matSlug', component: MaterialDetails, name: 'material-details', props: true },
    { path: '/:pathMatch(.*)*', component: Error404, name: 'Error404' },
    { path: '/sign_in', component: SignIn, name: 'sign-in' },
    { path: '/sign_up', component: SignUp, name: 'sign-up' },
    { path: '/forgot_password', component: ForgotPassword, name: 'forgot-password' },
    { path: '/term_of_use', component: TermOfUse, name: 'term-of-use' },
    { path: '/reservation', component: Reservation, name: 'reservation' },
    { path: '/reservation_vide', component: ReservationVide, name: 'reservation-vide' },
    { path: '/wishlist', component: Wishlist, name: 'wishlist' },
    { path: '/coming_soon', component: ComingSoon, name: 'coming-soon' },
    { path: '/profile', component: Profile, name: 'profile' },
    { path: '/faq', component: FAQ, name: 'faq' },
    { path: '/site_detail', component: SiteDetail, name: 'site-detail' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
