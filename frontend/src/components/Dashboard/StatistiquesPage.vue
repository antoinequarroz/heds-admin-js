<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6" v-for="chartNumber in 2" :key="chartNumber" >
        <!-- Inclure votre composant StatsBox ici -->
        <StatsBox :chartId="chartNumber" :chartData="charts[chartNumber-1]" :chartTitle="`Stats ${chartNumber}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import StatsBox from "./DashboardItems/StatsBox.vue";

export default {
  name: 'StatisticsPage',
  components: {
    StatsBox
  },
  data() {
    return {
      charts: [
        [
          {
            name: "Simulations",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 12, 4, 4]
          },
          {
            name: "Heures",
            data: [12, 32, 23, 75, 49, 52, 69, 51, 38, 120, 84, 4]
          }
        ],
        [
          {
            name: "Simulations",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 12, 4, 4]
          },
          {
            name: "Heures",
            data: [12, 32, 23, 75, 49, 52, 69, 51, 38, 120, 84, 4]
          }
        ]
      ]
    }
  }
};
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
