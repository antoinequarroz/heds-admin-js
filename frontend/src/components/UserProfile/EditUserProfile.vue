<template>
  <div class="col-xl-12">
    <!-- Edit profile START -->
    <div class="card bg-transparent border rounded-3">
      <!-- Card header -->
      <div class="card-header bg-transparent border-bottom">
        <h3 class="card-header-title mb-0">Edition du profil</h3>
      </div>
      <!-- Card body START -->
      <div class="card-body">
        <!-- Form -->
        <form class="row g-4">

          <!-- Profile picture -->
          <div class="col-12 justify-content-center align-items-center">
            <label class="form-label">Photo de profile</label>
            <div class="d-flex align-items-center">
              <label class="position-relative me-4" for="uploadfile-1" title="Replace this pic">
                <!-- Avatar place holder -->
                <span class="avatar avatar-xl">
                  <img id="uploadfile-1-preview" class="avatar-img rounded-circle border border-white border-3 shadow" src="../../assets/images/avatar/07.jpg" alt="">
                </span>
                <!-- Remove btn -->
                <button type="button" class="uploadremove"><i class="bi bi-x text-white"></i></button>
              </label>
              <!-- Upload button -->
              <label class="btn btn-primary-soft mb-0" for="uploadfile-1">Changer</label>
              <input id="uploadfile-1" class="form-control d-none" type="file">
            </div>
          </div>

          <!-- Full name -->
          <div class="col-12">
            <label class="form-label">Nom / Prénom</label>
            <div class="input-group">
              <input v-model="firstName" type="text" class="form-control" placeholder="Prénom">
              <input v-model="lastName" type="text" class="form-control" placeholder="Nom">
            </div>
          </div>

          <!-- Email id -->
          <div class="col-md-6">
            <label class="form-label">Email</label>
            <input v-model="email" class="form-control" type="email" placeholder="Email">
          </div>

          <!-- Phone number -->
          <div class="col-md-6">
            <label class="form-label">Numéro de téléphone</label>
            <input v-model="phoneNumber" type="text" class="form-control" placeholder="Phone number">
          </div>

          <!-- About me -->
          <div class="col-12">
            <label class="form-label">Sur moi</label>
            <textarea v-model="aboutMe" class="form-control" rows="3" placeholder="Ajouter des infos ..."></textarea>
          </div>

          <!-- Save button -->
          <div class="d-sm-flex justify-content-end">
            <button @click="updateProfile" type="button" class="btn btn-primary mb-0">Enregistrer</button>
          </div>
        </form>
      </div>
      <!-- Card body END -->
    </div>
    <!-- Edit profile END -->
  </div>
</template>

<script>
export default {
  name: 'EditUserProfile',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phoneNumber: '',
      location: '',
      aboutMe: '',
    };
  },
  methods: {
    updateProfile() {
      // Logic to update the profile
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant EditUserProfile ici */
</style>
