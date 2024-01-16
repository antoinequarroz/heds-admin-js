<template>
  <div class="col-xl-12">
    <!-- User Progress START -->
    <div class="card bg-transparent border rounded-3 mb-4">
      <!-- Card header -->
      <div class="card-header bg-transparent border-bottom">
        <h3 class="card-header-title mb-0">Antoine Quarroz</h3>
      </div>
      <!-- Card body START -->
      <div class="card-body">

        <!-- PFP Progress -->
        <div class="mb-4">
          <h5>Dernière location:</h5>
          <div class="table-responsive border-0">
            <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
              <tr>
                <th scope="col" class="border-0 rounded-start">Nom</th>
                <th scope="col" class="border-0">Nombre</th>
                <th scope="col" class="border-0">Status</th>
                <th scope="col" class="border-0">Prix</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="w-60px">
                      <img src="https://laerdal.com/cdn-4937d0/globalassets/images--blocks/products/training-products/simman-essential/adwcwcfk.jpg" class="rounded" alt="">
                    </div>
                    <div class="mb-0 ms-2">
                      <h6><a href="#">SimMan Essentiel</a></h6>
                      <div class="d-sm-flex">
                        <p class="h6 fw-light mb-0 small me-3"><i class="fas fa-table text-orange me-2"></i>2</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-center text-sm-start">1</td>
                <td>
                  <div class="badge bg-orange bg-opacity-10 text-orange">Rendu</div>
                </td>
                <td>350.- CHF</td>
              </tr>
              <!-- Fin de la section répétée -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- Internships Completed -->
        <div class="mb-4">
          <h5>Location en cours:</h5>
          <div class="table-responsive border-0">
            <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
              <thead>
              <tr>
                <th scope="col" class="border-0 rounded-start">Nom</th>
                <th scope="col" class="border-0">Nombre</th>
                <th scope="col" class="border-0">Status</th>
                <th scope="col" class="border-0">Prix</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="w-60px">
                      <img src="https://laerdal.com/cdn-4a1029/globalassets/images--blocks/products/training-products/simman-als/_8lr7552.jpg" class="rounded" alt="">
                    </div>
                    <div class="mb-0 ms-2">
                      <h6><a href="#">SimMan ALS</a></h6>
                      <div class="d-sm-flex">
                        <p class="h6 fw-light mb-0 small me-3"><i class="fas fa-table text-orange me-2"></i>1</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-center text-sm-start">1</td>
                <td>
                  <div class="badge bg-success bg-opacity-10 text-success">Loué</div>
                </td>
                <td>300.- CHF</td>
              </tr>
              <!-- Fin de la section répétée -->
              </tbody>
            </table>
          </div>
        </div>

        <!-- School Reference Teacher -->
        <div class="mb-4">
          <h5>Référent:</h5>
          <div class="d-flex align-items-center">
            <i class="bi bi-person-circle me-2" style="font-size: 1.5rem;"></i>
            <span>{{ referenceTeacher }}</span>
          </div>

          <div class="d-flex align-items-center">
            <i class="bi bi-phone me-2" style="font-size: 1.5rem;"></i>
            <span>{{referenceTelephone}}</span>
          </div>

          <div class="d-flex align-items-center">
            <i class="bi bi-mailbox me-2" style="font-size: 1.5rem;"></i>
            <span>{{referenceMail}}</span>
          </div>
        </div>

      </div>
      <!-- Card body END -->
    </div>
    <!-- User Progress END -->
  </div>
</template>

<script>
export default {
  name: 'HomeUserProfile',
  data() {
    return {
      pfpProgress: 60,  // Exemple de valeur
      internshipsCompleted: 2,  // Exemple de valeur
      referenceTeacher: 'Antoine Quarroz',  // Exemple de valeur
      referenceTelephone: '0791576450',  // Exemple de valeur
      referenceMail: 'antoine.quarroz@hes-so.ch',  // Exemple de valeur
      internshipCriteria: [  // Liste d'exemple
        { id: 1, description: 'Critère 1 à remplir' },
        { id: 2, description: 'Critère 2 à remplir' },
        // ... Ajoutez d'autres critères si nécessaire
      ]
    };
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant HomeUserProfile ici */
</style>
