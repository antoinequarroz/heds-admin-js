<template>
  <section class="py-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bg-light p-4 text-center rounded-3">
            <h1 class="m-0">Wishlist</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- =======================
  Page Banner END -->

  <!-- =======================
  Page content START -->
  <section class="pt-5">
    <div class="container">
      <!-- Content and button -->
      <div class="d-sm-flex justify-content-sm-between align-items-center mb-4">
        <h5 class="mb-2 mb-sm-0">Vous avez 1 items dans la wishlist</h5>
        <div class="text-end"> <button class="btn btn-danger-soft mb-0"><i class="fas fa-trash me-2"></i>Tout supprimer</button> </div>
      </div>
      <div class="row g-4">
        <!-- Card item START -->
        <div class="col-sm-6 col-lg-4 col-xl-3">
          <div class="card shadow">
            <!-- Image -->
            <img src="../../assets/images/courses/4by3/02.jpg" class="card-img-top" alt="course image">
            <div class="card-body pb-0">
              <!-- Badge and favorite -->
              <div class="d-flex justify-content-between mb-2">
                <a href="#" class="badge bg-success bg-opacity-10 text-success">Beginner</a>
                <a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
              </div>
              <!-- Title -->
              <h5 class="card-title fw-normal"><a href="#">Graphic Design Masterclass</a></h5>
              <p class="mb-2 text-truncate-2">Rooms oh fully taken by worse do Points afraid but may end Rooms
                Points afraid but may end Rooms</p>
              <!-- Rating star -->
              <ul class="list-inline mb-0">
                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                <li class="list-inline-item me-0 small"><i class="fas fa-star text-warning"></i></li>
                <li class="list-inline-item me-0 small"><i class="fas fa-star-half-alt text-warning"></i></li>
                <li class="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
              </ul>
            </div>
            <!-- Card footer -->
            <div class="card-footer pt-0 pb-3">
              <hr>
              <div class="d-flex justify-content-between ">
                <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>9h 56m</span>
                <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>65 lectures</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Card item END -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Wishlist'
  // Logique du composant ici, si nécessaire
};
</script>

<style scoped>
/* Vos styles CSS spécifiques au composant ici */
</style>
