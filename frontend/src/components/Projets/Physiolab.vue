<template>
  <div class="container">
    <!-- Title -->
    <div class="row mb-4">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="fs-1">Liste du matériel de simulation</h2>
      </div>
    </div>

    <!-- Tabs END -->
    <br>
    <!-- Tab content START -->
    <div class="tab-content" id="course-pills-tabContent">
      <!-- Tab pane START -->
      <div class="tab-pane fade show active" id="course-pills-tabs-1" role="tabpanel" aria-labelledby="course-pills-tab-1">
        <div class="row g-4">
          <div class="col-sm-6 col-lg-4 col-xl-3" v-for="physiolab in physiolab" :key="physiolab.id">
            <div class="card shadow h-100">
              <!-- Image -->
              <img style="height: 290px" :src="randomImageUrl" alt="Image aléatoire" />

              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a class="badge bg-purple bg-opacity-10 text-purple">{{ physiolab.secteur }}</a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal">
                  <router-link :to="`/projets/physiolab/${physiolab.slug}`">{{ physiolab.materiel }}</router-link>
                </h5>
                <p class="mb-2 text-truncate-2">{{ physiolab.description }}</p>

              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="fa fa-user text-danger me-2"></i>{{ physiolab.responsable }}</span>
                </div>
              </div>
            </div>
            <!-- Card item END -->
          </div>
        </div>
      </div>
      <!-- Tab pane END -->
      <!-- Tab pane START -->
    </div>
    <!-- Tab content END -->
  </div>
  <br><br><br>
</template>

<script>
import axios from 'axios';

export default {
  name: "Physiolab",
  props: {
    limit: {
      type: Number,
      default: Infinity,
    }
  },
  data() {
    return {
      physiolab: []
    }
  },
  /* methods: {
    filteredProjets(categoryId) {
      return this.projet.filter(projet => projet.secteur === secteurId);
    }
  },
  },

   */
  computed: {
    randomImageUrl() {
      return 'https://img.medicalexpo.fr/images_me/photo-g/93693-17737775.webp';
    }
  },
  created() {
    axios.get('http://localhost:8000/physiolab')
        .then(response => {
          this.physiolab = response.data;
          console.log(this.physiolab);
        })
        .catch(error => console.error(error));
  }
}
</script>


<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>