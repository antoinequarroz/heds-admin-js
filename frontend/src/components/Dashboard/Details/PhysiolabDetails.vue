<template>
  <div class="container">
    <section class="pt-5">
      <div class="container" data-sticky-container>
        <div class="row g-4 g-sm-5">
          <!-- Left sidebar START -->
          <div class="col-xl-4">
            <div data-sticky data-margin-top="80" data-sticky-for="992">
              <div class="row justify-content-center">
                <div class="col-md-8 col-xl-12">
                  <!-- Card START -->
                  <div class="card shadow">
                    <!-- Image -->
                    <div class="rounded-3">
                      <img :src="randomImageUrl" alt="Image aléatoire" />
                    </div>
                  </div>
                  <br>

                  <!-- Card END -->
                  <div>
                    <button class="btn btn-primary-soft me-1 mb-1 mb-md-0 mb-3 col-3">Réserver</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Left sidebar END -->

          <!-- Main content START -->
          <div class="col-xl-8">
            <!-- Title -->
            <h1 class="mb-4">{{ physiolab.materiel}}</h1>

            <!-- Rating -->
            <div class="d-flex align-items-center mb-4">
              <h2 class="me-3 mb-0">Loèche les bains</h2>
              <div>
                <a class="badge bg-primary bg-opacity-10 text-primary">{{ getCategoryName(physiolab.secteur) }}</a>
              </div>
            </div>

            <!-- Content -->
            <h5>Description</h5>
            <p>{{ physiolab.description }}</p>

            <!-- Additional info -->
            <div class="row mb-3">
              <div class="col-md-6">
                <ul class="list-group list-group-borderless">
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><i class="fas fa-table text-primary me-2"></i>Nombre:</span>
                    <span class="h6">{{ physiolab.quantite }}</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><i class="fas fa-fw fa-door-open text-primary me-2"></i>Salle:</span>
                    <span class="h6">{{ physiolab.localisation }}</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><i class="fas fa-fw fa-toolbox text-primary me-2"></i>Date de la dernière maintenance:</span>
                    <span class="h6">{{ physiolab.date_derniere_intervention }}</span>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group list-group-borderless">
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><i class="bi fa-fw bi-person-circle text-primary me-2"></i>Ajouter par:</span>
                    <span class="h6">Antoine Quarroz</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><i class="bi fa-fw bi-eye-fill text-primary me-2"></i>ID:</span>
                    <span class="h6">{{ physiolab.id }}</span>
                  </li>
                  <li class="list-group-item px-0">
                    <span class="h6 fw-light"><i class="fa fa-tools text-primary me-2"></i>Responsable:</span>
                    <span class="h6">{{ physiolab.responsable }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Book detail START -->
            <div class="col-12">
              <!-- Tabs START -->
              <ul class="nav nav-pills nav-pills-bg-soft px-3" id="book-pills-tab" role="tablist">
                <!-- Tab item -->
                <li class="nav-item me-2 me-sm-4" role="presentation">
                  <button class="nav-link mb-0 active" id="book-pills-tab-1" data-bs-toggle="pill" data-bs-target="#book-pills-1" type="button" role="tab" aria-controls="book-pills-1" aria-selected="true">Mode d'emploi</button>
                </li>
                <!-- Tab item -->
                <li class="nav-item me-2 me-sm-4" role="presentation">
                  <button class="nav-link mb-0" id="book-pills-tab-2" data-bs-toggle="pill" data-bs-target="#book-pills-2" type="button" role="tab" aria-controls="book-pills-2" aria-selected="false">Entertien</button>
                </li>
                <!-- Tab item -->
                <li class="nav-item me-2 me-sm-4" role="presentation">
                  <button class="nav-link mb-0" id="book-pills-tab-3" data-bs-toggle="pill" data-bs-target="#book-pills-3" type="button" role="tab" aria-controls="book-pills-3" aria-selected="false">Liens important</button>
                </li>
              </ul>
              <!-- Tabs END -->

              <!-- Tab contents START -->
              <div class="tab-content pt-4 px-3" id="book-pills-tabContent">
                <!-- Content START -->
                <div class="tab-pane fade show active" id="book-pills-1" role="tabpanel" aria-labelledby="book-pills-tab-1">
                  <div class="row g-4">
                    <div class="col-md-9">
                      <div class="d-sm-flex justify-content-sm-between">

                        <!-- Title -->
                        <div class="mb-3">
                          <h3 class="mb-0">Mode d'emploi</h3>
                        </div>
                      </div>
                      <!-- Content -->
                      <p class="mt-3 mt-sm-0 mb-0">Cliquez sur le bouton ci-dessous pour télécharger le PDF lié au l'objet</p>
                    </div>
                    <button class="btn btn-sm btn-primary-soft me-1 mb-1 mb-md-0 mb-3 col-3">Télécharger le PDF</button>
                  </div>
                </div>
                <!-- Content END -->

                <!-- Content START -->
                <div class="tab-pane fade" id="book-pills-2" role="tabpanel" aria-labelledby="book-pills-tab-2">
                  <!-- Review START -->
                  <div class="row mb-4">
                    <h4 class="mb-4">Entretien</h4>
                    <!-- Progress-bar and star -->
                    <div class="col-md-12">
                      <div class="row align-items-center">
                        <p>{{ physiolab.date_derniere_intervention }}</p>
                        <p>{{ physiolab.nom_entretien }}</p>
                        <p>{{ physiolab.entreprise_entretien }}</p>
                        <p>{{ physiolab.telephone_entretien }}</p>
                        <p>{{ physiolab.mail_entretien }}</p>
                        <p>{{ physiolab.duree_garantie }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Content END -->

                <!-- Content START -->
                <div class="tab-pane fade" id="book-pills-3" role="tabpanel" aria-labelledby="book-pills-tab-3">

                  <a :href="physiolab.liens" target="_blank" rel="noopener noreferrer">
                    <p>{{ physiolab.liens }}</p>
                  </a>

                </div>
                <!-- Content END -->

              </div>
              <!-- Tab contents END -->
            </div>
            <!-- Book detail END -->
          </div>
          <!-- Main content END -->
        </div> <!-- Row END -->
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PhysiolabDetails',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      physiolab: {},
      randomImageUrl: 'https://img.medicalexpo.fr/images_me/photo-g/93693-17737775.webp'
    };
  },
  created() {
    console.log("Slug reçu:", this.slug); // Pour déboguer
    this.fetchMaterialDetails();
  },

  methods: {
    getCategoryName(categoryId) {
      const categories = {
        1: "Institut",
        2: "Soins infirmier",
        3: "Physiothérapie",
        4: "Autre"
      };

      return categories[categoryId] || "Catégorie inconnue";
    },
    fetchMaterialDetails() {
      axios.get(`http://localhost:8000/physiolab/${this.slug}`)
          .then(response => {
            this.physiolab = response.data;
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des détails: ", error);
            // Afficher un message à l'utilisateur ou gérer l'erreur de manière appropriée
          });
    }
  }
};
</script>


<style scoped>
/* Vos styles CSS ici si nécessaire */
</style>
