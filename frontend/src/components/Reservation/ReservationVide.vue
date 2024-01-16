<template>

  <section class="py-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bg-light p-4 text-center rounded-3">
            <h1 class="m-0">Mon panier</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- =======================
  Page Banner END -->

  <!-- =======================
  Page content START -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <!-- Image -->
          <img src="../../assets/images/element/cart.svg" class="h-200px h-md-300px mb-3" alt="">
          <!-- Subtitle -->
          <h2>Votre panier est momentanément vide</h2>
          <!-- info -->
          <p class="mb-0">Veuillez consulter tous les cours disponibles et acheter des cours qui répondent à vos besoins.</p>
          <!-- Button -->
          <a href="#" class="btn btn-primary mt-4 mb-0">Retour aux matériels</a>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'ReservationVide'
  // Logique du composant ici, si nécessaire
};
</script>

<style scoped>
/* Vos styles CSS spécifiques au composant ici */
</style>
