<template>
  <div>
    <InformationView />
    <MaterialList :limit="12" />
    <ScenarioList :limit="12" />
    <EventList :limit="12"/>
  </div>
</template>

<script>
import InformationView from "./InformationView.vue";
import MaterialList from "./Material.vue";
import ScenarioList from "./Scenario.vue";
import EventList from "./Event.vue";

export default {
  name: "HomePage",
  components: {
    InformationView,
    MaterialList,
    ScenarioList,
    EventList
  },
  // Ajoutez votre logique Vue.js ici si nécessaire
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
