<template>
  <div class="container">
    <!-- Title -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="fs-1">Calendrier</h2>
        <p class="mb-0">Calendrier des simulations et des events de l'école</p>
      </div>
    </div>

    <!-- Tabs START -->
    <ul class="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0 active" id="course-pills-tab-9" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-9" type="button" role="tab" aria-controls="course-pills-tabs-9" aria-selected="false">Simulations</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-10" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-10" type="button" role="tab" aria-controls="course-pills-tabs-10"	aria-selected="false">Events</button>
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
  <div class="tab-pane fade show active" id="event-pills-tabs-10" role="tabpanel" aria-labelledby="event-pills-tab-10">
    <div class="row g-4">
      <!-- Card item START -->
      <div class="col-sm-6 col-lg-4 col-xl-3" v-for="(event, index) in events" :key="event.id" v-if="index < limit">
        <div class="card shadow h-100">
          <!-- Image -->
          <img :src="event.image" class="card-img-top" alt="event image">
          <!-- Card body -->
          <div class="card-body pb-0">
            <!-- Badge and favorite -->
            <div class="d-flex justify-content-between mb-2">
              <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
              <a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
            </div>
            <!-- Title -->
            <h5 class="card-title fw-normal"><a href="#">{{ event.title }}</a></h5>
            <p class="mb-2 text-truncate-2">{{ event.description }}</p>
            <!-- Rating star -->
            <ul class="list-inline mb-0">
              <!-- Your rating logic here -->
            </ul>
          </div>
          <!-- Card footer -->
          <div class="card-footer pt-0 pb-3">
            <hr>
            <div class="d-flex justify-content-between">
              <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>{{ event.duration }}</span>
              <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>{{ event.lectures }} lectures</span>
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
  name: "Event",
  props: {
    limit: {
      type: Number,
      default: Infinity,
    }
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    axios.get('http://localhost:3000/events')
        .then(response => this.events = response.data)
        .catch(error => console.error(error));
  }
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
