<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="h3 mb-2">Liste des utilisateurs</h1>
              <p class="mb-2">Il y a {{ users.length }} utilisateurs enregistrés dans la base de données</p>
            </div>
            <div class="table-responsive mt-3">
              <table class="table table-dark-gray align-middle p-4 mb-0 table-hover w-100 text-center">
                <thead>
                <tr>
                  <th scope="col" class="border-0 rounded-start">ID</th>
                  <th scope="col" class="border-0">Prénom</th>
                  <th scope="col" class="border-0">Nom</th>
                  <th scope="col" class="border-0">Email</th>
                  <th scope="col" class="border-0">Slug</th>
                  <th scope="col" class="border-0 rounded-end">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ user.id }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ user.firstName }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ user.lastName }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ user.email }}</h6>
                  </td>
                  <td>
                    <h6 class="table-responsive-title mb-0 ms-2">{{ user.slug }}</h6>
                  </td>
                  <td>
                    <router-link :to="`/users/${user.slug}`" class="btn btn-sm btn-warning-soft me-1 mb-1 mb-md-0">Détails</router-link>
                    <button class="btn btn-sm btn-success-soft me-1 mb-1 mb-md-0" @click="editUser(user.slug)">Modifier</button>
                    <button class="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0" @click="deleteUser(user.slug)">Supprimer</button>
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
  name: 'UserList',
  data() {
    return {
      users: []
    }
  },
  created() {
    axios.get('http://localhost:8000/users')
        .then(response => this.users = response.data)
        .catch(error => console.error('Il y a eu une erreur lors de la récupération des utilisateurs:', error));
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Revenir à la page précédente
    },
    editUser(slug) {
      this.$router.push({ name: 'UserEdit', params: { slug: slug } });
      // Ceci suppose que vous ayez une route nommée 'MaterialEdit' pour l'édition d'un matériel
    },
    deleteUser(slug) {
      axios.delete(`http://localhost:8000/users/${slug}`)
          .then(() => {
            this.materials = this.materials.filter(users => users.slug !== slug);
          })
          .catch(error => {
            console.error('Il y a eu une erreur lors de la suppression de la personne', error);
          });
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant UserList */
</style>
