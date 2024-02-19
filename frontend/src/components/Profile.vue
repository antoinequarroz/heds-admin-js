<template>
  <section class="pt-0">
    <div class="container-fluid px-0">
      <div class="card bg-blue h-100px h-md-200px rounded-0" style="background:url(assets/images/pattern/04.png) no-repeat center center; background-size:cover;"></div>
    </div>
    <div class="container mt-n4">
      <div class="row">
        <div class="col-12">
          <div class="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
            <div class="row d-flex justify-content-between mt-2 mt-md-0">
              <div class="col-auto">
                <div class="avatar avatar-xxl position-relative mt-n3">
                  <img class="avatar-img rounded-circle border border-white border-3 shadow" src="../assets/images/avatar/avatar99.png" alt="">
                  <span class="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Admin</span>
                </div>
              </div>
              <div class="col d-flex justify-content-between align-items-center">
                <div>
                  <h1 class="my-1 fs-4">Antoine Quarroz</h1>
                  <span class="badge text-bg-primary rounded-pill">HEdS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-xl-3">
          <div class="offcanvas-xl offcanvas-end" tabindex="-1" id="offcanvasSidebar">
            <div class="offcanvas-header bg-light">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">{{ profileTitle }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body p-3 p-xl-0">
              <div class="bg-dark border rounded-3 p-3 w-100">
                <div class="list-group list-group-dark list-group-borderless collapse-list">
                  <a @click="setActiveTab('homeUserProfile')" class="list-group-item nav-link" :class="{ active: activeTab === 'homeUserProfile' }"><i class="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a>
                  <a @click="setActiveTab('resumStageUserProfile')" class="list-group-item nav-link" :class="{ active: activeTab === 'resumStageUserProfile' }"><i class="far fa-fw fa-file-alt me-2"></i>Locations</a>
                  <a @click="setActiveTab('documentsUserProfile')" class="list-group-item nav-link" :class="{ active: activeTab === 'documentsUserProfile' }"><i class="bi bi-question-diamond fa-fw me-2"></i>Documents</a>
                  <a @click="setActiveTab('editUserProfile')" class="list-group-item nav-link" :class="{ active: activeTab === 'editUserProfile' }"><i class="bi bi-pencil-square fa-fw me-2"></i>Edit Profile</a>
                  <a @click="setActiveTab('deleteUserProfile')" class="list-group-item nav-link" :class="{ active: activeTab === 'deleteUserProfile' }"><i class="bi bi-trash fa-fw me-2"></i>Delete Profile</a>
                  <a class="list-group-item text-danger bg-danger-soft-hover nav-link" href="#"><i class="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-9">
          <HomeUserProfile v-if="activeTab === 'homeUserProfile'" />
          <ResumStageUserProfile v-if="activeTab === 'resumStageUserProfile'" />
          <DocumentsUserProfile v-if="activeTab === 'documentsUserProfile'" />
          <EditUserProfile v-if="activeTab === 'editUserProfile'" />
          <DeleteUserProfile v-if="activeTab === 'deleteUserProfile'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeUserProfile from './UserProfile/HomeUserProfile.vue';
import ResumStageUserProfile from './UserProfile/ResumStageUserProfile.vue';
import DocumentsUserProfile from './UserProfile/DocumentsUserProfile.vue';
import EditUserProfile from './UserProfile/EditUserProfile.vue';
import DeleteUserProfile from './UserProfile/DeleteUserProfile.vue';




export default {
  name: 'Profile',
  components: {
    HomeUserProfile,
    ResumStageUserProfile,
    DocumentsUserProfile,
    EditUserProfile,
    DeleteUserProfile
  },
  data() {
    return {
      activeTab: 'homeUserProfile'
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    }
  }
}
</script>

<style scoped>
.nav-link {
  cursor: pointer;
}
</style>
