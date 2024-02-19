<template>
  <section class="py-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bg-light p-4 text-center rounded-3">
            <h1 class="m-0">Réservation</h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-5">
    <div class="container">

      <div class="row g-4 g-sm-5">
        <!-- Main content START -->
        <div class="col-lg-8 mb-4 mb-sm-0">
          <div class="card card-body p-4 shadow">



            <div class="table-responsive border-0 rounded-3">
              <!-- Table START -->
              <table class="table align-middle p-4 mb-0">
                <!-- Table head -->
                <!-- Table body START -->
                <tbody class="border-top-0">
                <!-- Table item -->
                <tr>
                  <!-- Course item -->
                  <td>
                    <div class="d-lg-flex align-items-center">
                      <!-- Image -->
                      <div class="w-100px w-md-80px mb-2 mb-md-0">
                        <img src="https://laerdal.com/cdn-4a1029/globalassets/images--blocks/products/training-products/simman-als/_8lr7552.jpg" class="rounded" alt="">
                      </div>
                      <!-- Title -->
                      <h6 class="mb-0 ms-lg-3 mt-2 mt-lg-0">
                        <a href="#">SimMan ALS</a>
                      </h6>
                    </div>
                  </td>

                  <!-- Amount item -->
                  <td class="text-center">
                    <h5 class="text-success mb-0">300.- CHF</h5>
                  </td>
                  <!-- Action item -->
                  <td>
                    <button class="btn btn-sm btn-danger-soft px-2 mb-0"><i class="fas fa-fw fa-times"></i></button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
        <!-- Main content END -->

        <!-- Right sidebar START -->
        <div class="col-lg-4">
          <!-- Card total START -->
          <div class="card card-body p-4 shadow">
            <!-- Title -->
            <h4 class="mb-3">Mon panier</h4>

            <!-- Price and detail -->
            <ul class="list-group list-group-borderless mb-2">
              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h6 fw-light mb-0">Prix</span>
                <span class="h6 fw-light mb-0 fw-bold">300.- CHF</span>
              </li>

              <li class="list-group-item px-0 d-flex justify-content-between">
                <span class="h5 mb-0">Total</span>
                <span class="h5 mb-0">300.- CHF</span>
              </li>
            </ul>

            <!-- Button -->
            <div class="d-grid">
              <a href="#" class="btn btn-lg btn-success">Louer le matériel</a>
            </div>

            <!-- Content -->
            <p class="small mb-0 mt-2 text-center">En finalisant votre achat, vous acceptez ces  <a :href="termOfUse"><strong>Conditions de Service</strong></a></p>

          </div>
          <!-- Card total END -->
        </div>
        <!-- Right sidebar END -->

      </div><!-- Row END -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Reservation',
  data() {
    return {
      user: null,  // Ajoutez cette ligne pour définir la propriété user

      termOfUse: '/term_of_use',
    };
  },
};
</script>

<style scoped>
/* Vos styles CSS spécifiques au composant ici */
</style>
