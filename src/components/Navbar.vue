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
                <a class="nav-link active" :href="materialPath">Matériels</a>
                <a class="nav-link active" href="#">Scénario</a>
                <a class="nav-link active" href="#">Calendrier</a>
                <a class="nav-link active" :href="adminPath">Admin</a>
              </div>
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
      logoPath: 'path_to_your_logo',  // Remplacez 'path_to_your_logo' par le chemin réel vers votre logo
      homePath: '/', // Remplacez par le chemin réel vers la page d'accueil si différent
      materialPath: '/material', // Remplacez par le chemin réel vers la page Matériel si différent
      adminPath: '/admin' // Remplacez par le chemin réel vers la page Admin si différent
    };
  },
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
