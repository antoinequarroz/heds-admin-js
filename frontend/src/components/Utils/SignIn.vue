<template>
  <main>
    <section class="p-0 d-flex align-items-center position-relative overflow-hidden">
      <div class="container-fluid">
        <div class="row">
          <!-- left -->
          <div class="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
            <div class="p-3 p-lg-5">
              <div class="text-center">
                <h2 class="fw-bold">Bienvenue sur la plateforme de formation pratique de la HEdS</h2>
              </div>
              <img src="../../assets/images/element/02.svg" class="mt-5" alt="">
            </div>
          </div>

          <!-- Right -->
          <div class="col-12 col-lg-6 m-auto">
            <div class="row my-5">
              <div class="col-sm-10 col-xl-8 m-auto">
                <span class="mb-0 fs-1">👋</span>
                <h1 class="fs-2">Se connecter</h1>
                <p class="lead mb-4">Ravi de vous voir! Veuillez vous connecter avec votre compte.</p>

                <form @submit.prevent="submitForm">
                  <div class="mb-4">
                    <label for="exampleInputEmail1" class="form-label">E-mail *</label>
                    <div class="input-group input-group-lg">
                      <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="bi bi-envelope-fill"></i></span>
                      <input type="email" class="form-control border-0 bg-light rounded-end ps-1" placeholder="E-mail" v-model="email">
                    </div>
                  </div>
                  <div class="mb-4">
                    <label for="inputPassword5" class="form-label">Mot de passe *</label>
                    <div class="input-group input-group-lg">
                      <span class="input-group-text bg-light rounded-start border-0 text-secondary px-3"><i class="fas fa-lock"></i></span>
                      <input type="password" class="form-control border-0 bg-light rounded-end ps-1" placeholder="Mot de passe" v-model="password">
                    </div>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-primary mb-0" type="submit">Login</button>
                  </div>
                </form>
                <div class="mt-4 text-center">
                  <span>Vous n'avez pas de compte <a :href="signUpPath">enregistrez-vous ici</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      signUpPath: '/sign_up',
      forgotPasswordPath: '/forgot_password',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:8000/login', {
          email: this.email,
          password: this.password
        });
        // Mise à jour de l'état de connexion
        this.$store.commit('setLoggedIn', true);
        localStorage.setItem('isLoggedIn', true);
        this.$store.commit('setUserData', userData);

        // Redirection vers la page d'accueil
        this.$router.push('/');
      } catch (error) {
        console.error("Erreur de connexion:", error);
      }
    },
  }
}
</script>


<style scoped>
/* Vos styles ici */
</style>
