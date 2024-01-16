<template>
  <div class="dashboard">
    <nav class="navbar sidebar navbar-expand-xl navbar-dark bg-dark">
      <!-- Navbar brand for xl START -->
      <div class="d-flex align-items-center">
        <a class="navbar-brand" href="#">
          <img class="navbar-brand-item" src="assets/images/FR-DE_HEDS.png" alt="">
        </a>
      </div>

      <div class="offcanvas offcanvas-start flex-row custom-scrollbar h-100" data-bs-backdrop="true" tabindex="-1" id="offcanvasSidebar">
        <div class="offcanvas-body sidebar-content d-flex flex-column bg-dark">
          <!-- Navbar brand for xl END -->

          <!-- Sidebar menu START -->
          <ul class="navbar-nav flex-column" id="navbar-sidebar">

            <!-- Menu item 1 -->
            <li class="nav-item nav-link active"><i class="bi bi-house fa-fw me-2"></i>Dashboard</li>
            <hr>

            <h6 class="text-white">Projets</h6>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#collapsepage1" role="button" aria-expanded="false" aria-controls="collapsepage">
                <i class="fas fa-regular fa-box fa-fw me-2"></i>Simulation</a>
              <ul class="nav collapse flex-column" id="collapsepage1" data-bs-parent="#navabar-sidebar">
                <li class="nav-item"><a class="nav-link" :href="materialSimulationListPath">Materiel</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="collapse" href="#collapsepage2" role="button" aria-expanded="false" aria-controls="collapsepage">
                <i class="fas fa-regular fa-box fa-fw me-2"></i>Physiolab</a>
              <ul class="nav collapse flex-column" id="collapsepage2" data-bs-parent="#navabar-sidebar">
                <li class="nav-item"><a class="nav-link" :href="materialPhysiolabListPath">Materiel</a></li>
              </ul>
            </li>

            <hr>
            <!-- Menu item 6 -->
            <li class="nav-item"> <a class="nav-link" :href="statistiquesPath"><i class="fas fa-align-center fa-fw me-2"></i>Statistiques</a></li>

            <!-- Menu item 6 -->
            <li class="nav-item"> <a class="nav-link" :href="userPath"><i class="fas fa-user fa-fw me-2"></i>Utilisateurs</a></li>

            <!-- Menu item 7 -->
            <li class="nav-item"> <a class="nav-link" :href="faqPath"><i class="fas fa-question fa-fw me-2"></i>FAQ's</a></li>

          </ul>
          <!-- Sidebar menu end -->

          <!-- Sidebar footer START -->
          <div class="px-3 mt-auto pt-3">
            <div class="d-flex align-items-center justify-content-between text-primary-hover">
              <a class="h5 mb-0 text-body" href="admin-setting.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Settings">
                <i class="bi bi-gear-fill"></i>
              </a>
              <a class="h5 mb-0 text-body" href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Home">
                <i class="bi bi-globe"></i>
              </a>
              <a class="h5 mb-0 text-body" href="/" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign out">
                <i class="bi bi-power"></i>
              </a>
            </div>
          </div>
          <!-- Sidebar footer END -->

        </div>
      </div>
    </nav>

    <!-- Page content START -->
    <div class="page-content">
      <!-- Page main content START -->
      <div class="page-content-wrapper border">

        <!-- Title -->
        <div class="row">
          <div class="col-12 mb-3">
            <h1 class="h3 mb-2 mb-sm-0">Dashboard</h1>
          </div>
        </div>
        <CounterBoxes/>
        <StatsBox :chartId="'1'" :chartData="charts[0]" :chartTitle="`Stats Simulation 2023`" />

        <div class="row g-4">
          <TeamSection/>
          <FaqBox/>
        </div>

      </div>
    </div>



  </div>
</template>

<script>

import CounterBoxes from "./DashboardItems/CounterBoxes.vue";
import StatsBox from "./DashboardItems/StatsBox.vue";
import TeamSection from "./DashboardItems/TeamSection.vue";
import FaqBox from "./DashboardItems/FaqBox.vue";

export default {
  name: 'Dashboard',
  data() {
    return {
      charts: [
        [
          {
            name: "Simulations",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 12, 4, 4]
          },
          {
            name: "Heures",
            data: [12, 32, 23, 75, 49, 52, 69, 51, 38, 120, 84, 4]
          }
        ],
        // plus de données de graphique ici si nécessaire
      ],
      materialSimulationListPath: "/material_simulation_list",
      materialPhysiolabListPath: "/material_physiolab_list",
      scenarioListPath: "/scenario_list",
      eventListPath: "/event_list",
      statistiquesPath: "/statistiques",
      faqPath: "/faq",
      userPath: "/user",
    }
  },
  components: {
    FaqBox,
    TeamSection,
    StatsBox,
    CounterBoxes
    // importez vos composants ici
  },
};
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
