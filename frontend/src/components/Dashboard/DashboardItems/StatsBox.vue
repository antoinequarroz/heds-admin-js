<template>
  <div className="row g-4 mb-4">
    <div className="col-xxl-12">
      <div className="card shadow h-100">
        <div className="card-header p-4 border-bottom">
          <h5 className="card-header-title">Stats</h5>
        </div>
        <div className="card-body chart-container">
          <div id="ChartPayout"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsBox',
  mounted() {
    const options = {
      chart: {
        type: 'line',
        height: 300  // ajuster la hauteur ici
      },
      series: [
        {
          name: "Simulations",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 12, 4, 4]
        },
        {
          name: "Heures",
          data: [12, 32, 23, 75, 49, 52, 69, 51, 38, 120, 84, 4]
        },

      ],
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", 'Dec']
      }
    };

    new window.ApexCharts(document.querySelector("#ChartPayout"), options).render();
  }
};
</script>

<style scoped>
/* Ajuster la hauteur du conteneur du graphique ici */
.chart-container {
  height: 320px;
}
</style>
