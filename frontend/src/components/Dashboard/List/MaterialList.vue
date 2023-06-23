<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="h3 mb-2">Liste des matériaux</h1>
              <p class="mb-2">Il y a {{materials.length}} matériels d'enregistrés dans la base de données</p>
              <div>
                <router-link :to="{ name: 'MaterialForm' }" class="btn btn-sm btn-primary-soft m-1">Ajouter du matériel</router-link>
                <button class="btn btn-sm btn-secondary m-1" @click="goBack">Retour</button>
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
                    <img class="w-60px card-img-top" :src="'src/assets/images/uploads/materials/' + material.filename" :alt="material.filename" />
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.id }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.titre }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.salle }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.nombre }}</h6>
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
      materials: [
        { id: 1, titre: 'Matériel 1', salle: 'Salle A', nombre: 5, filename: 'material3.jpg' },
        { id: 2, titre: 'Matériel 2', salle: 'Salle B', nombre: 7, filename: 'material2.jpg' },
        { id: 3, titre: 'Matériel 3', salle: 'Salle C', nombre: 10, filename: 'material3.jpg' },
        { id: 4, titre: 'Matériel 4', salle: 'Salle D', nombre: 230, filename: 'material2.jpg' },
        // Ajoutez plus de matériaux ici...
      ],
      homePath: '/dashboard',
    }
  },
  methods: {
    addMaterial() {
      console.log('Ajouter du matériel');
    },
    goBack() {
      console.log('Retour');
    },
    viewDetails(id) {
      console.log('Voir les détails du matériel avec id:', id);
    },
    editMaterial(id) {
      console.log('Modifier le matériel avec id:', id);
    },
    deleteMaterial(id) {
      console.log('Supprimer le matériel avec id:', id);
    }
  }
}
</script>

<style scoped>
/* Ajoutez vos styles CSS ici si nécessaire */
</style>
