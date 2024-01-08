<template>
  <main>
    <section class="p-0 d-flex align-items-center position-relative overflow-hidden">
      <div class="container-fluid">
        <div class="row">
          <!-- left -->
          <div
              class="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
            <div class="p-3 p-lg-5">
              <!-- Title -->
              <div class="text-center">
                <h2 class="fw-bold">Bienvenue sur la plateforme de formation pratique de la HEdS</h2>
              </div>
              <!-- SVG Image -->
              <img src="../../assets/images/element/02.svg" class="mt-5" alt="">

            </div>
          </div>

          <!-- Right -->
          <div class="col-12 col-lg-6 m-auto">
            <div class="row my-5">
              <div class="col-sm-10 col-xl-8 m-auto">
                <!-- Title -->
                <span class="mb-0 fs-1">👋</span>
                <h1 class="fs-2">Se connecter</h1>
                <p class="lead mb-4">Ravi de vous voir! Veuillez vous connecter avec votre compte.</p>

                <!-- Form START -->
                <form>
                  <!-- Email -->
                  <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">E-mail *</label>
                    <div class="input-group input-group-lg">
                      <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i
                          class="bi bi-envelope-fill"></i></span>
                      <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail"
                             id="exampleInputEmail1">
                    </div>
                  </div>
                  <!-- Password -->
                  <div class="mb-4">
                    <label for="inputPassword5" class="form-label">Mot de passe *</label>
                    <div class="input-group input-group-lg">
                      <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i
                          class="fas fa-lock"></i></span>
                      <input type="password" class="form-control border-0 bg-light rounded-end ps-1"
                             placeholder="Mot de passe" id="inputPassword5">
                    </div>
                    <div id="passwordHelpBlock" class="form-text">
                      Votre mot de passe doit comporter au moins 8 caractères.
                    </div>
                  </div>
                  <!-- Check box -->
                  <div class="mb-4 d-flex justify-content-between mb-4">
                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Se souvenir de moi</label>
                    </div>
                    <div class="text-primary-hover">
                      <a :href="forgotPasswordPath" class="text-secondary">
                        <u>Mot de passe oublié?</u>
                      </a>
                    </div>
                  </div>
                  <!-- Button -->
                  <div class="align-items-center mt-0">
                    <div class="d-grid">
                      <button class="btn btn-primary mb-0" type="button" @click="submitForm">Login</button>
                    </div>
                  </div>
                </form>
                <!-- Form END -->
                <div class="mt-4 text-center">
                  <span>
                    Vous n'avez pas de compte <a :href="signUpPath">enregistrez-vous ici</a></span>
                </div>
              </div>
            </div> <!-- Row END -->
          </div>
        </div> <!-- Row END -->
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'SignIn',
  data() {
    return {
      user: null,  // Ajoutez cette ligne pour définir la propriété user

      signUpPath: '/sign_up',
      forgotPasswordPath: '/forgot_password',
    };
  },
  methods: {
    submitForm() {
      // Ajoutez cette ligne pour afficher le contenu de la propriété user dans la console
      console.log(this.user);
    },
  }

}
</script>

<style scoped>/* Vos styles ici */</style>
