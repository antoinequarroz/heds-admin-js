<template>
  <!-- Chart and Ticket START -->
  <div class="row g-4 mb-4">
    <!-- Chart START -->
    <div class="col-xxl-12">
      <div class="card shadow h-100">
        <!-- Card header -->
        <div class="card-header p-4 border-bottom">
          <h5 class="card-header-title">Stats</h5>
        </div>
        <!-- Card body -->
        <div class="card-body">
          <!-- Apex chart -->
          <div id="ChartPayout"></div>  <!-- A tester -->
        </div>
      </div>
    </div>
    <!-- Chart END -->
  </div>
  <!-- Chart and Ticket END -->
</template>

<script>
export default {
  name: 'StatsBox',
};
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
