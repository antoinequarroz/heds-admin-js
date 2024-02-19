<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gérer le matériel</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3" v-for="(input, key) in formLeft" :key="key">
          <label :for="key" class="form-label">{{ input.label }}</label>
          <input v-if="input.type !== 'select'" :type="input.type" v-model="material[key]" class="form-control">
          <select v-else v-model="material[key]" class="form-control">
            <option value="1">Basse technologie</option>
            <option value="2">Moyenne technologie</option>
            <option value="3">Haute technologie</option>
            <option value="4">Petit matériel</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3" v-for="(input, key) in formRight" :key="key">
          <label :for="key" class="form-label">{{ input.label }}</label>
          <input :type="input.type" v-model="material[key]" class="form-control">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="matImage" class="form-label">Image</label>
          <input type="file" id="matImage" ref="matImage" @change="onImageChange" class="form-control">
        </div>
      </div>

      <div class="col-md-6">
        <div class="mb-3">
          <label for="matModeEmploi" class="form-label">Mode d'emploi (PDF)</label>
          <input type="file" id="matModeEmploi" ref="matModeEmploi" @change="onPdfChange" accept=".pdf" class="form-control">
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="mb-3" v-for="(input, key) in formBottom" :key="key">
          <label :for="key" class="form-label">{{ input.label }}</label>
          <textarea v-model="material[key]" class="form-control" :rows="input.rows"></textarea>
        </div>
        <button type="submit" class="btn btn-primary m-1" @click="submitForm">Enregistrer</button>
        <button class="btn btn-secondary m-1" @click="goBack">Retour</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MaterialForm',
  data() {
    return {
      material: {
        matTitre: '',
        matNombre: '',
        matDescription: '',
        matCategorie: '',
        matModeEmploi: '',
        matCaracteristique: '',
        matLien: '',
        matImage: '',
        salId: '',
      },
      formLeft: {
        matTitre: { label: 'Titre', type: 'text' },
        matCategorie: { label: 'Catégorie', type: 'select' },
        matLien: { label: 'Lien', type: 'text' },
      },
      formRight: {
        matNombre: {label: 'Nombre', type: 'number'},
        salId: { label: 'ID Salle', type: 'number' },
      },
      formBottom: {
        matDescription: { label: 'Description', rows: 5 },
        matCaracteristique: { label: 'Caractéristique', rows: 5 },
      },
    };
  },

  methods: {
    submitForm() {
      fetch('http://localhost:8000/materiel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.material),
      })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Succès:', data);
            // Naviguer vers MaterialList.vue si la requête a réussi
            this.$router.push('/material_list');
          })
          .catch((error) => {
            console.error('Erreur:', error);
          });
    },
    goBack() {
      this.$router.go(-1); // Revenir à la page précédente
    },
    // ...
  }
};
</script>

<style scoped>
.form-control {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>