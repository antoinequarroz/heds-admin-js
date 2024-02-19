<template>
  <div class="col-xl-12">
    <!-- Title and select START -->
    <div class="card border bg-transparent rounded-3 mb-0">
      <!-- Card header -->
      <div class="card-header bg-transparent border-bottom">
        <h3 class="card-header-title mb-0">Supprimer le compte</h3>
      </div>
      <!-- Card body -->
      <div class="card-body">
        <h6>Avant de partir ...</h6>
        <ul>
          <li>Si vous supprimez votre compte, vous perdrez toutes vos données.</li>
          <li>Si vous souhaitez revenir, vous devrez vous réinscrire.</li>
        </ul>
        <div class="form-check form-check-md my-4">
          <input class="form-check-input" type="checkbox" value="" id="deleteaccountCheck">
          <label class="form-check-label" for="deleteaccountCheck">
            Oui, je souhaite supprimer mon compte</label>
        </div>
        <a href="#" class="btn btn-danger mb-0">Supprimer mon compte</a>
      </div>
    </div>
    <!-- Title and select END -->
  </div>
</template>

<script>
export default {
  name: 'DeleteUserProfile',
  data() {
    return {
      // Any reactive data properties you might need
    };
  },
  methods: {
    // Any methods you might need
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant DeleteUserProfile ici */
</style>
