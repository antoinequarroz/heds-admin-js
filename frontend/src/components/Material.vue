<template>
  <div class="container">
    <!-- Title -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="fs-1">Liste du matériels</h2>
        <p class="mb-0">Liste du matériel se trouvant dans les différentes salles de nos écoles</p>
      </div>
    </div>

    <!-- Tabs START -->
    <ul class="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1" aria-selected="false">Maturité Pro</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2"	aria-selected="false">Bachelor</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3" aria-selected="false">NTA</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4" aria-selected="false">Formation continue</button>
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
  <div class="tab-pane fade show active" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
    <div class="row g-4">
      <!-- Card item START -->
      <div class="col-sm-6 col-lg-4 col-xl-3" v-for="(course, index) in courses" :key="course.id" v-if="index < limit">
        <div class="card shadow h-100">
          <!-- Image -->
          <img :src="course.image" class="card-img-top" alt="course image">
          <!-- Card body -->
          <div class="card-body pb-0">
            <!-- Badge and favorite -->
            <div class="d-flex justify-content-between mb-2">
              <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
              <a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
            </div>
            <!-- Title -->
            <h5 class="card-title fw-normal"><a href="#">{{ course.title }}</a></h5>
            <p class="mb-2 text-truncate-2">{{ course.description }}</p>
            <!-- Rating star -->
            <ul class="list-inline mb-0">
              <!-- Your rating logic here -->
            </ul>
          </div>
          <!-- Card footer -->
          <div class="card-footer pt-0 pb-3">
            <hr>
            <div class="d-flex justify-content-between">
              <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>{{ course.duration }}</span>
              <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>{{ course.lectures }} lectures</span>
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
  name: "MaterialList",
  props: {
    limit: {
      type: Number,
      default: Infinity,
    }
  },
  data() {
    return {
      courses: []
    }
  },
  created() {
    axios.get('http://localhost:3000/courses')
        .then(response => this.courses = response.data)
        .catch(error => console.error(error));
  }
}
</script>


<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
