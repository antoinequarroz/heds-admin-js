<template>
  <div class="container">
    <!-- Title -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="fs-1">Liste des scénarios</h2>
        <p class="mb-0">Liste des scénarios se trouvant dans les différents fichiers de notre serveur / cloud</p>
      </div>
    </div>

    <!-- Tabs START -->
    <ul class="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0 active" id="course-pills-tab-5" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-5" type="button" role="tab" aria-controls="course-pills-tabs-5" aria-selected="false">Maturité Pro</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-6" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-6" type="button" role="tab" aria-controls="course-pills-tabs-6"	aria-selected="false">Bachelor</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-7" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-7" type="button" role="tab" aria-controls="course-pills-tabs-7" aria-selected="false">NTA</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-8" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-8" type="button" role="tab" aria-controls="course-pills-tabs-8" aria-selected="false">Formation continue</button>
      </li>
    </ul>
    <!-- Tabs END -->

    <div class="d-md-flex justify-content-md-between align-items-center">
      <span></span>
      <div>
        <a href="#" class="btn btn-sm btn-primary-soft mb-0">En savoir plus<i class="fas fa-angle-right ms-2"></i></a>
      </div>
    </div>
    <br>
  <!-- omitting other part for brevity -->
  <div class="tab-pane fade show active" id="scenario-pills-tabs-5" role="tabpanel" aria-labelledby="scenario-pills-tab-5">
    <div class="row g-4">
      <!-- Card item START -->
      <div class="col-sm-6 col-lg-4 col-xl-3" v-for="(scenario, index) in scenarios" :key="scenario.id" v-if="index < limit">
        <div class="card shadow h-100">
          <!-- Image -->
          <img :src="scenario.image" class="card-img-top" alt="scenario image">
          <!-- Card body -->
          <div class="card-body pb-0">
            <!-- Badge and favorite -->
            <div class="d-flex justify-content-between mb-2">
              <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
              <a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
            </div>
            <!-- Title -->
            <h5 class="card-title fw-normal"><a href="#">{{ scenario.title }}</a></h5>
            <p class="mb-2 text-truncate-2">{{ scenario.description }}</p>
            <!-- Rating star -->
            <ul class="list-inline mb-0">
              <!-- Your rating logic here -->
            </ul>
          </div>
          <!-- Card footer -->
          <div class="card-footer pt-0 pb-3">
            <hr>
            <div class="d-flex justify-content-between">
              <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>{{ scenario.duration }}</span>
              <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>{{ scenario.lectures }} lectures</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Card item END -->
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ScenarioList",
  props: {
    limit: {
      type: Number,
      default: Infinity,
    }
  },
  data() {
    return {
      scenarios: []
    }
  },
  created() {
    axios.get('http://localhost:3000/scenarios')
        .then(response => this.scenarios = response.data)
        .catch(error => console.error(error));
  }
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
