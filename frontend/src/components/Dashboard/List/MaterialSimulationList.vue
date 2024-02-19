<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="h3 mb-2">Liste des matériaux</h1>
              <p class="mb-2">Il y a {{ simulations.length }} matériels d'enregistrés dans la base de données</p>
              <div>
                <router-link :to="{ name: 'MaterialSimulationForm' }" class="btn btn-sm btn-primary-soft m-1">Ajouter du matériel</router-link>
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
                  <th scope="col" class="border-0">Coût</th>
                  <th scope="col" class="border-0">Nombres</th>
                  <th scope="col" class="border-0">Catégorie</th>
                  <th scope="col" class="border-0">Slug</th>
                  <th scope="col" class="border-0 rounded-end">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in simulations" :key="item.id">
                  <td>
                    <img style="height: 60px" :src="item.image_url || randomImageUrl" alt="Image de matériel" />
                  </td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.materiel }}</td>
                  <td>{{ item.cout }}.- CHF</td>
                  <td>{{ item.quantite }}</td>
                  <td>{{ item.secteur }}</td>
                  <td>{{ item.slug }}</td>
                  <td>
                    <router-link :to="`/projets/simulation/${item.slug}`" class="btn btn-sm btn-warning-soft me-1 mb-1 mb-md-0">Détails</router-link>
                    <button class="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0" @click="editMaterial(item.slug)">Modifier</button>
                    <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0" @click="deleteMaterial(item.slug)">Supprimer</button>
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
import axios from 'axios';

export default {
  name:
      "MaterialSimulationList",
  data() {
    return {
      simulations: [],
      randomImageUrl: 'https://picsum.photos/60/60'
    };
  },
  created() {
    this.fetchSimulations();
  },
  methods: {
    fetchSimulations() {
      axios.get('http://localhost:8000/simulation')
          .then(response => {
            this.simulations = response.data;
          })
          .catch(error => console.error(error));
    },
    goBack() {
      this.$router.go(-1);
    },
    editMaterial(slug) {
      this.$router.push({ name: 'MaterialSimulationEdit', params: { slug: slug } });
    },
    deleteMaterial(slug) {
      axios.delete(`http://localhost:8000/simulation/${slug}`)
          .then(() => {
            this.simulations = this.simulations.filter(item => item.slug !== slug);
          })
          .catch(error => console.error('Il y a eu une erreur lors de la suppression du matériel', error));
    },
    getCategoryName(categoryId) {
      const categories = {
        1: "Basse technologie",
        2: "Moyenne technologie",
        3: "Haute technologie",
        4: "Petit matériels"
      };
      return categories[categoryId] || "Catégorie inconnue";
    }
  }
}
</script>

<style scoped>
</style>
