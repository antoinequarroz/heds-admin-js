<template>
  <div class="row g-4 mb-4">
    <div v-for="(box, index) in counterBoxes" :key="index" class="col-md-6 col-xxl-3">
      <div class="card card-body p-4 h-100" :class="box.bgClass">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h2 class="purecounter mb-0 fw-bold" :data-purecounter-start="box.start" :data-purecounter-end="box.end" data-purecounter-delay="200">0</h2>
            <span class="mb-0 h6 fw-light">{{ box.title }}</span>
          </div>
          <div class="icon-lg rounded-circle text-white mb-0" :class="box.iconBgClass">
            <i :class="box.iconClass"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterBoxes',
  data() {
    return {
      counterBoxes: [
        { start: 0, end: 35, title: 'Nombre de simu', bgClass: 'bg-warning bg-opacity-15', iconClass: 'fas fa-tv fa-fw', iconBgClass: 'bg-warning' },
        { start: 0, end: 13, title: 'Simu de patient simulé', bgClass: 'bg-danger bg-opacity-10', iconClass: 'fas fa-user-nurse fa-fw', iconBgClass: 'bg-danger' },
        { start: 0, end: 22, title: 'Simu en haute fidélité', bgClass: 'bg-primary bg-opacity-10', iconClass: 'fas fa-robot fa-fw', iconBgClass: 'bg-primary' },
        { start: 0, end: 845, title: 'Total des heures', bgClass: 'bg-success bg-opacity-10', iconClass: 'bi bi-stopwatch-fill fa-fw', iconBgClass: 'bg-success' },
      ],
    }
  }
}
</script>

<style scoped>
/* Vos styles vont ici */
</style>
