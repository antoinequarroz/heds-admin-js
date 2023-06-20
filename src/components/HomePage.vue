<template>
  <div>
    <Navbar />
    <InformationView />
    <MaterialList />
    <ScenarioList />
    <EventList />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import InformationView from "./InformationView.vue";
import MaterialList from "./MaterialList.vue";
import ScenarioList from "./ScenarioList.vue";
import EventList from "./EventList.vue";
import Footer from "./Footer.vue";

export default {
  name: "HomePage",
  components: {
    Navbar,
    InformationView,
    MaterialList,
    ScenarioList,
    EventList,
    Footer
  },
  // Ajoutez votre logique Vue.js ici si nécessaire
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
