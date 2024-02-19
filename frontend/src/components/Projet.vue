<template>
  <div class="container">
    <!-- Title -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="fs-1">Liste des projets</h2>
        <p class="mb-0">Liste des projets se trouvant dans les différentes secteurs de la HEdS</p>
      </div>
    </div>

    <br>
    <!-- Tab content START -->
    <div class="tab-content" id="course-pills-tabContent">
      <!-- Tab pane START -->
      <div class="tab-pane fade show active" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
        <div class="row g-4">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="projets in projets" :key="projets.id">
            <div class="card shadow h-100">
              <!-- Image -->
              <img :src="projets.image_url" style="height: 200px" alt="Image aléatoire" />

              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a class="badge bg-purple bg-opacity-10 text-purple">{{ projets.secteur }}</a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal">
                  <router-link :to="`/projets/${projets.slug}`">{{ projets.nom }}</router-link>
                </h5>
                <p class="mb-2 text-truncate-2">{{ projets.description }}</p>

                <!-- Rating star -->
                <ul class="list-inline mb-0">
                  <!-- Your rating logic here -->
                </ul>
              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="fa fa-location-arrow text-info me-2"></i>{{ projets.localisation }}</span>
                  <span class="h6 fw-light mb-0"><i class="fa fa-user text-danger me-2"></i>{{ projets.responsable }}</span>
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
  name: "Projet",
  props: {
    limit: {
      type: Number,
      default: Infinity,
    }
  },
  data() {
    return {
      projets: []
    }
  },

  created() {
    axios.get('http://localhost:8000/projets')
        .then(response => {
          this.projets = response.data;
          console.log(this.projets);
        })
        .catch(error => console.error(error));
  }
}
</script>


<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>