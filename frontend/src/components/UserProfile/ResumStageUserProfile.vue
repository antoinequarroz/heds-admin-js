<template>
  <div class="col-xl-9">
    <div class="card border bg-transparent rounded-3">
      <div class="card-header bg-transparent border-bottom">
        <h3 class="mb-0">Mes locations</h3>
      </div>

      <div class="card-body">
        <div class="row g-3 align-items-center justify-content-between mb-4">
          <div class="col-md-8">
            <form class="rounded position-relative">
              <input class="form-control pe-5 bg-transparent" type="search" placeholder="Rechercher" aria-label="Rechercher">
              <button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                <i class="fas fa-search fs-6 "></i>
              </button>
            </form>
          </div>
        </div>

        <div class="table-responsive border-0">
          <table class="table table-dark-gray align-middle p-4 mb-0 table-hover">
            <thead>
            <tr>
              <th scope="col" class="border-0 rounded-start">Nom</th>
              <th scope="col" class="border-0">Nombre</th>
              <th scope="col" class="border-0">Status</th>
              <th scope="col" class="border-0">Prix</th>
              <th scope="col" class="border-0 rounded-end">Supprimer</th>
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
              <td>
                <button class="btn btn-sm btn-danger-soft btn-round mb-0"><i class="fas fa-fw fa-times"></i></button>
              </td>
            </tr>
            <!-- Fin de la section répétée -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumStageUserProfile',
};
</script>

<style scoped>
/* Vos styles CSS ici */
</style>
