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
                  <th scope="col" class="border-0">Catégorie</th>
                  <th scope="col" class="border-0">Slug</th>
                  <th scope="col" class="border-0 rounded-end">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="material in materials" :key="material.matId">
                  <td>
                    <img :src="randomImageUrl" alt="Image aléatoire" />
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.matId }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.matTitre }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.salId }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.matNombre }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ getCategoryName(material.matCategorie) }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ material.matSlug }}</h6>
                  </td>
                  <td>
                    <router-link :to="`/material/${material.matSlug}`" class="btn btn-sm btn-warning-soft me-1 mb-1 mb-md-0">Détails</router-link>
                    <button class="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0" @click="editMaterial(material.matSlug)">Modifier</button>
                    <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0" @click="deleteMaterial(material.matSlug)">Supprimer</button>
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
import material from "../../Material.vue";

export default {
  name: "MaterialList",
  props: {
    limit: {
      type: Number,
      default: Infinity,
    }
  },
  data() {
    return {
      materials: []
    }
  },
  created() {
    axios.get('http://localhost:8000/materiel')
        .then(response => this.materials = response.data)
        .catch(error => console.error(error));
  },
  computed: {
    randomImageUrl() {
      // Pour une image de 400x400 pixels. Modifiez les dimensions selon vos besoins.
      return 'https://picsum.photos/60/60';
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Revenir à la page précédente
    },
    editMaterial(slug) {
      this.$router.push({ name: 'MaterialEdit', params: { slug: slug } });
      // Ceci suppose que vous ayez une route nommée 'MaterialEdit' pour l'édition d'un matériel
    },
    deleteMaterial(slug) {
      axios.delete(`http://localhost:8000/materiel/${slug}`)
          .then(() => {
            this.materials = this.materials.filter(material => material.matSlug !== slug);
          })
          .catch(error => {
            console.error('Il y a eu une erreur lors de la suppression du matériel', error);
          });
    },
    getCategoryName(categoryId) {
      const categories = {
        1: "Basse technologie",
        2: "Moyenne technologie",
        3: "Haute technologie",
        4: "Petit matériels"
      };

      return categories[categoryId] || "Catégorie inconnue";
    },
  }
}
</script>

<style scoped>


</style>


