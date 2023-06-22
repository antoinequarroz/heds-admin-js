<template>
  <!-- Top instructors START -->
  <div class="col-lg-6 col-xxl-4">
    <div class="card shadow h-100">
      <!-- Card header -->
      <div class="card-header border-bottom d-flex justify-content-between align-items-center p-4">
        <h5 class="card-header-title">Team Simulation</h5>
      </div>
      <!-- Card body START -->
      <div class="card-body p-4">
        <!-- Instructor item START -->
        <div
            class="d-sm-flex justify-content-between align-items-center"
            v-for="(teamMember, index) in teamMembers"
            :key="index"
        >
          <!-- Avatar and info -->
          <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
            <!-- Avatar -->
            <div class="avatar avatar-md flex-shrink-0">
              <img class="avatar-img rounded-circle" :src="teamMember.avatarUrl" alt="avatar">
            </div>
            <!-- Info -->
            <div class="ms-0 ms-sm-2 mt-2 mt-sm-0">
              <h6 class="mb-1">{{ teamMember.name }}<i class="bi bi-patch-check-fill text-info small ms-1"></i></h6>
              <ul class="list-inline mb-0 small">
                <li class="list-inline-item fw-light me-2 mb-1 mb-sm-0"><i class="fas fa-book text-purple me-1"></i>{{ teamMember.role }}</li>
              </ul>
            </div>
          </div>
          <!-- Divider -->
          <hr v-if="index < teamMembers.length - 1">
        </div>
        <!-- Instructor item END -->
      </div>
      <!-- Card body END -->
    </div>
  </div>
  <!-- Top instructors END -->
</template>

<script>
export default {
  name: 'TeamSection',
  data() {
    return {
      teamMembers: [
        { name: 'Alain Berard', role: 'Coordinateur', avatarUrl: 'assets/images/avatar/09.jpg' },
        { name: 'Antoine Quarroz', role: 'Médiamaticien', avatarUrl: 'assets/images/avatar/03.jpg' },
        { name: 'Antoine Quarroz', role: 'Médiamaticien', avatarUrl: 'assets/images/avatar/01.jpg' },
        // ajoutez plus de membres d'équipe comme nécessaire
      ],
    };
  },
};
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
