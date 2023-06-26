<template>
  <div class="d-flex flex-column justify-content-center align-content-center">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="h3 mb-4">FAQ's</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <FaqBox :numQuestions="5" />
      </div>
    </div>
  </div>
</template>

<script>
import FaqBox from "./DashboardItems/FaqBox.vue";

export default {
  name: 'Faq',
  components: {
    FaqBox
  },
};
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
h1 {
  margin-bottom: 2rem;
}
.row {
  margin-bottom: 1rem;
}
</style>
