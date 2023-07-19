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
        <button class="nav-link mb-2 mb-md-0 active" id="course-pills-tab-1" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-1" type="button" role="tab" aria-controls="course-pills-tabs-1" aria-selected="true">Basse technologie</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-2" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-2" type="button" role="tab" aria-controls="course-pills-tabs-2"	aria-selected="false">Moyenne technologie</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-3" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-3" type="button" role="tab" aria-controls="course-pills-tabs-3" aria-selected="false">Haute technologie</button>
      </li>
      <!-- Tab item -->
      <li class="nav-item me-2 me-sm-5">
        <button class="nav-link mb-2 mb-md-0" id="course-pills-tab-4" data-bs-toggle="pill" data-bs-target="#course-pills-tabs-4" type="button" role="tab" aria-controls="course-pills-tabs-4" aria-selected="false">Petit matériels</button>
      </li>
    </ul>
    <!-- Tabs END -->
    <br>
    <!-- Tab content START -->
    <div class="tab-content" id="course-pills-tabContent">
      <!-- Tab pane START -->
      <div class="tab-pane fade show active" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
        <div class="row g-4">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="materiel in filteredMaterials('1')" :key="materiel.id">
            <div class="card shadow h-100">
              <!-- Image -->
              <img :src="materiel.matImage" class="card-img-top" alt="material image">
              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
                  <a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="#">{{ materiel.matTitre }}</a></h5>
                <p class="mb-2 text-truncate-2">{{ materiel.matDescription }}</p>
                <!-- Rating star -->
                <ul class="list-inline mb-0">
                  <!-- Your rating logic here -->
                </ul>
              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>{{ materiel.salId }}</span>
                  <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>{{ materiel.salId }} lectures</span>
                </div>
              </div>
            </div>
          <!-- Card item END -->
          </div>
        </div>
      </div>
      <!-- Tab pane END -->
      <!-- Tab pane START -->
      <div class="tab-pane fade" id="course-pills-tabs-2" role="tabpanel" aria-labelledby="course-pills-tab-2">
        <div class="row g-4">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="materiel in filteredMaterials('2')" :key="materiel.id">
            <div class="card shadow h-100">
              <!-- Image -->
              <img :src="materiel.matImage" class="card-img-top" alt="material image">
              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
                  <a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="#">{{ materiel.matTitre }}</a></h5>
                <p class="mb-2 text-truncate-2">{{ materiel.matDescription }}</p>
                <!-- Rating star -->
                <ul class="list-inline mb-0">
                  <!-- Your rating logic here -->
                </ul>
              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>{{ materiel.salId }}</span>
                  <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>{{ materiel.salId }} lectures</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->
          </div>
        </div>
      </div>
      <!-- Tab pane END -->
      <!-- Tab pane START -->
      <div class="tab-pane fade" id="course-pills-tabs-3" role="tabpanel" aria-labelledby="course-pills-tab-3">
        <div class="row g-4">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="materiel in filteredMaterials('3')" :key="materiel.id">
            <div class="card shadow h-100">
              <!-- Image -->
              <img :src="materiel.matImage" class="card-img-top" alt="material image">
              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
                  <a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="#">{{ materiel.matTitre }}</a></h5>
                <p class="mb-2 text-truncate-2">{{ materiel.matDescription }}</p>
                <!-- Rating star -->
                <ul class="list-inline mb-0">
                  <!-- Your rating logic here -->
                </ul>
              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>{{ materiel.salId }}</span>
                  <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>{{ materiel.salId }} lectures</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->
          </div>
        </div>
      </div>
      <!-- Tab pane END -->
      <!-- Tab pane START -->
      <div class="tab-pane fade" id="course-pills-tabs-4" role="tabpanel" aria-labelledby="course-pills-tab-4">
        <div class="row g-4">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="materiel in filteredMaterials('4')" :key="materiel.id">
            <div class="card shadow h-100">
              <!-- Image -->
              <img :src="materiel.matImage" class="card-img-top" alt="material image">
              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-purple bg-opacity-10 text-purple">All level</a>
                  <a href="#" class="h6 mb-0"><i class="far fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="#">{{ materiel.matTitre }}</a></h5>
                <p class="mb-2 text-truncate-2">{{ materiel.matDescription }}</p>
                <!-- Rating star -->
                <ul class="list-inline mb-0">
                  <!-- Your rating logic here -->
                </ul>
              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>{{ materiel.salId }}</span>
                  <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>{{ materiel.salId }} lectures</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->
          </div>
        </div>
      </div>
      <!-- Tab pane END -->
    </div>
    <!-- Tab content END -->
  </div>
  <br><br><br>
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
      materials: []
    }
  },
  methods: {
    filteredMaterials(categoryId) {
      return this.materials.filter(material => material.matCategorie === categoryId);
    },
  },
  created() {
    axios.get('http://localhost:8000/materiel')
        .then(response => {
          this.materials = response.data;
          console.log(this.materials);
        })
        .catch(error => console.error(error));
  }
}
</script>


<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
