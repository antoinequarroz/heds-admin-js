<template>
  <div class="row g-4 mb-4">
    <div v-for="(box, index) in counterBoxes" :key="index" class="col-md-6 col-xxl-3">
      <div class="card card-body p-4 h-100" :class="box.bgClass">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h2 class="purecounter mb-0 fw-bold" :data-purecounter-start="box.start" :data-purecounter-end="box.end" :data-purecounter-duration="1.0">0</h2>
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
        { start: 0, end: 48, title: 'Nombre de matériel', bgClass: 'bg-warning bg-opacity-15', iconClass: 'fas fa-tv fa-fw', iconBgClass: 'bg-warning' },
        { start: 0, end: 81, title: 'Simulations', bgClass: 'bg-danger bg-opacity-10', iconClass: 'fas fa-user-nurse fa-fw', iconBgClass: 'bg-danger' },
        { start: 0, end: 2, title: 'Nombre de prêts', bgClass: 'bg-primary bg-opacity-10', iconClass: 'fas fa-robot fa-fw', iconBgClass: 'bg-primary' },
        { start: 0, end: 1, title: 'Nombre de compte', bgClass: 'bg-success bg-opacity-10', iconClass: 'fas fa-user fa-fw', iconBgClass: 'bg-success' },
      ],
    }
  },
  mounted() {
    new PureCounter();
  }
}
</script>

<style scoped>
/* Vos styles vont ici */
</style>
