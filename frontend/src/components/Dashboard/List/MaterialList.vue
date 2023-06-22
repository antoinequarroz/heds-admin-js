<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="h3 mb-2">Liste des matériaux</h1>
              <div>
                <button class="btn btn-sm btn-primary-soft" @click="addMaterial">Ajouter du matériel</button>
                <button class="btn btn-sm btn-secondary" @click="goBack">Retour</button>
              </div>
            </div>
            <div class="table-responsive mt-3">
              <table class="table table-dark-gray align-middle p-4 mb-0 table-hover w-100 text-center">
                <thead>
                <tr>
                  <th scope="col" class="border-0 rounded-start">Image</th>
                  <th scope="col" class="border-0">ID</th>
                  <th scope="col" class="border-0">Nom du matériel</th>
                  <th scope="col" class="border-0">Salle</th>
                  <th scope="col" class="border-0">Nombres</th>
                  <th scope="col" class="border-0 rounded-end">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="material in materials" :key="material.id">
                  <td>
                    <div class="w-60px">
                      <img :src="'assets/images/uploads/materials/' + material.filename" :alt="material.filename"  class="card-img-top" />
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center position-relative">
                      <h6 class="table-responsive-title mb-0 ms-2">
                        {{ material.id }}
                      </h6>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center position-relative">
                      <h6 class="table-responsive-title mb-0 ms-2">
                        {{ material.titre }}
                      </h6>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center position-relative">
                      <h6 class="table-responsive-title mb-0 ms-2">
                        {{ material.salle }}
                      </h6>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center position-relative">
                      <h6 class="table-responsive-title mb-0 ms-2">
                        {{ material.nombre }}
                      </h6>
                    </div>
                  </td>
                  <td>
                    <button class="btn btn-sm btn-warning-soft me-1 mb-1 mb-md-0" @click="viewDetails(material.id)">Détails</button>
                    <button class="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0" @click="editMaterial(material.id)">Modifier</button>
                    <button class="btn btn-sm btn-danger-soft mb-0" @click="deleteMaterial(material.id)">Supprimer</button>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaterialList',
  data() {
    return {
      materials: [] // Your data goes here
    }
  },
  methods: {
    addMaterial() {
      // Implement your method to add a material here
    },
    goBack() {
      // Implement your method to navigate back here
    },
    viewDetails(id) {
      // Implement your method to view details of a material here
    },
    editMaterial(id) {
      // Implement your method to edit a material here
    },
    deleteMaterial(id) {
      // Implement your method to delete a material here
    }
  }
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
