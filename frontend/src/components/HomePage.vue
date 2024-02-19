<template>
  <div>
    <InformationView />
    <SiteCard />
    <InformationCard />
    <Projet :limit="8" />
    <Steps />
    <ContactForm />
  </div>
</template>

<script>
import InformationView from "./Homepage/InformationView.vue";
import InformationCard from "./Homepage/InformationCard.vue";
import Projet from "./Projet.vue";
import SiteCard from "./Homepage/SiteCard.vue";
import Steps from "./Homepage/Steps.vue";
import ContactForm from "./Homepage/ContactForm.vue";


export default {
  name: "HomePage",
  components: {
    SiteCard,
    InformationView,
    InformationCard,
    Projet,
    Steps,
    ContactForm,
  },
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
