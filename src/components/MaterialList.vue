<template>
  <!-- omitting other part for brevity -->
  <div class="tab-pane fade show active" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
    <div class="row g-4">
      <!-- Card item START -->
      <div class="col-sm-6 col-lg-4 col-xl-3" v-for="course in courses" :key="course.id">
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
</template>

<script>
import axios from 'axios'; // Make sure you have installed axios with `npm install axios`

export default {
  name: "MaterialList",
  data() {
    return {
      courses: []
    }
  },
  async created() {
    try {
      const response = await axios.get('https://your-api-endpoint/courses');
      this.courses = response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
