<template>
  <header class="navbar-light navbar-sticky header-static">
    <nav class="navbar navbar-expand-xl">
      <div class="container-fluid px-3 px-xl-5">
        <a class="navbar-brand" :href="homePath">
          <img class="light-mode-item navbar-brand-item" :src="logoPath" alt="logo">
        </a>
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" :href="homePath">Accueil</a>
                <a class="nav-link" :href="projetPath">Projets</a>
                <a class="nav-link" :href="faq">FAQ'S</a>
                <a class="nav-link" :href="profile" v-if="isLoggedIn">Profile</a>
                <a class="nav-link" :href="adminPath" v-if="isLoggedIn">Admin</a>
                <a class="nav-link" @click="logout" v-if="isLoggedIn">Déconnexion</a>
                <a class="nav-link" :href="reservationVide" v-if="isLoggedIn"><i class="fa fa-shopping-cart"></i></a>
                <a class="nav-link" :href="signIn" v-else>Se connecter</a>

              </div>
            </div>

            <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div class="nav-item w-100">
                <form class="position-relative">
                  <input class="form-control pe-5 bg-transparent" type="search" placeholder="Recherche" aria-label="Recherche">
                  <button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i class="fas fa-search fs-6"></i>
                  </button>
                </form>
              </div>
            </div>

            <div v-if="isLoggedIn" class="dropdown ms-1 ms-lg-0">
              <a class="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="avatar-img rounded-circle" src="src/assets/images/avatar/avatar99.png" alt="avatar">
              </a>
              <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                <li class="px-3 mb-3">
                  <div class="d-flex align-items-center">
                    <div class="avatar me-3">
                      <img class="avatar-img rounded-circle shadow" src="src/assets/images/avatar/avatar99.png" alt="avatar">
                    </div>
                    <div>
                      <a class="h6" :href="eventPath">{{ userName }}</a>
                      <p class="text-small m-0">{{ userEmail }}</p>
                    </div>
                  </div>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" :href="profile"><i class="bi bi-person fa-fw me-2"></i>Profile</a></li>
                <li><a class="dropdown-item" :href="reservation"><i class="bi bi-cart fa-fw me-2"></i>Panier</a></li>
                <li><a class="dropdown-item bg-danger-soft-hover li-logout" @click="logout"><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logoPath: './src/assets/images/FR-DE_HEdS.png',
      homePath: '/',
      projetPath: '/projet',
      scenarioPath: '/scenario',
      profile: '/profile',
      eventPath: '/event',
      adminPath: '/admin',
      signIn: '/sign_in',
      reservation: '/reservation',
      faq: '/faq',
      reservationVide: '/reservation_vide',
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
    userName() {
      return this.$store.state.user ? this.$store.state.user.firstName + ' ' + this.$store.state.user.lastName : 'Antoine Quarroz';
    },
    userEmail() {
      return this.$store.state.user ? this.$store.state.user.email : 'antoine.quarroz@hes-so.ch';
    },
  },
  methods: {
    logout() {
      this.$store.commit('setLoggedIn', false);
      localStorage.removeItem('isLoggedIn');
      this.$router.push('/');
    }
  },
  created() {
    this.$store.dispatch('initializeUser');
  }
}
</script>

<style scoped>
  .li-logout {
    cursor: pointer;
  }
  .li-logout[ @click="logout" ] {
    cursor: pointer;
  }
  .nav-link {
    cursor: pointer;
  }
  .nav-link[ @click="logout" ] {
    cursor: pointer;
  }

  .text-small{
    font-size: 10px;
  }
</style>
