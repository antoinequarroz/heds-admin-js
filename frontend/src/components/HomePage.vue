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
import MaterialList from "./MaterialList.vue";
import ScenarioList from "./ScenarioList.vue";
import EventList from "./EventList.vue";

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
