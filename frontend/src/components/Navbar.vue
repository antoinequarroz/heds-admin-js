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
                <a class="nav-link active" :href="homePath">Accueil</a>
                <a class="nav-link active" :href="projetPath">Projets</a>
                <a class="nav-link active" :href="eventPath">FAQ'S</a>
                <a class="nav-link active" :href="eventPath">Profil</a>
                <a class="nav-link active" :href="adminPath">Admin</a>
              </div>
            </div>

            <!-- Nav Search START -->
            <div class="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
              <div class="nav-item w-100">
                <form class="position-relative">
                  <input class="form-control pe-5 bg-transparent" type="search" placeholder="Recherche" aria-label="Recherche">
                  <button class="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                    <i class="fas fa-search fs-6 "></i>
                  </button>
                </form>
              </div>
            </div>
            <!-- Nav Search END -->

            <!-- Profile START -->
            <div class="dropdown ms-1 ms-lg-0">
              <a class="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="avatar-img rounded-circle" src="src/assets/images/avatar/avatar99.png" alt="avatar">
              </a>
              <ul class="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
                <!-- Profile info -->
                <li class="px-3 mb-3">
                  <div class="d-flex align-items-center">
                    <!-- Avatar -->
                    <div class="avatar me-3">
                      <img class="avatar-img rounded-circle shadow" src="src/assets/images/avatar/avatar99.png" alt="avatar">
                    </div>
                    <div>
                      <a class="h6" href="#">Antoine Quarroz</a>
                      <p class="small m-0">antoine.quarroz@hes-so.ch</p>
                    </div>
                  </div>
                </li>
                <li> <hr class="dropdown-divider"></li>
                <!-- Links -->
                <li><a class="dropdown-item" href="#"><i class="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                <li><a class="dropdown-item bg-danger-soft-hover" href="#"><i class="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
              </ul>
            </div>
            <!-- Profile START -->
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
      logoPath: './src/assets/images/FR-DE_HEdS.png',  // Remplacez 'path_to_your_logo' par le chemin réel vers votre logo
      homePath: '/', // Remplacez par le chemin réel vers la page d'accueil si différent
      projetPath: '/projet', // Remplacez par le chemin réel vers la page Matériel si différent
      scenarioPath: '/scenario', // Remplacez par le chemin réel vers la page Scénario si différent
      eventPath: '/event', // Remplacez par le chemin réel vers la page Calendrier si différent
      adminPath: '/admin' // Remplacez par le chemin réel vers la page Admin si différent
    };
  },
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
