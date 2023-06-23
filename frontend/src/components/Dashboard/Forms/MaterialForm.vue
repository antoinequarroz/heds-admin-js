<template>
  <div class="container mt-5">
    <h1 class="mb-4">Gérer le matériel</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3" v-for="(input, key) in formLeft" :key="key">
          <label :for="key" class="form-label">{{ input.label }}</label>
          <input :type="input.type" v-model="material[key]" class="form-control">
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
        titre: '',
        badge: '',
        salle: '',
        localite: '',
        liens: '',
        nombre: '',
        filename: '',
        modeEmploi: '',
        description: '',
        caracteristique: ''
      },
      formLeft: {
        titre: { label: 'Titre', type: 'text' },
        badge: { label: 'Badge', type: 'text' },
        salle: { label: 'Salle', type: 'text' },
        localite: { label: 'Localité', type: 'text' }
      },
      formRight: {
        nombre: { label: 'Nombre', type: 'number' },
        filename: { label: 'Image', type: 'file' },
        modeEmploi: { label: 'PDF', type: 'file' },
        liens: { label: 'Liens', type: 'text' }
      },
      formBottom: {
        description: { label: 'Description', rows: '6' },
        caracteristique: { label: 'Caractéristique', rows: '6' }
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Formulaire soumis', this.material);
      // Ici, vous pouvez ajouter le code pour soumettre le formulaire à votre API ou effectuer d'autres actions
    },
    goBack() {
      console.log('Retour');
      // Ici, vous pouvez ajouter le code pour naviguer vers la page précédente ou effectuer d'autres actions
    }
  }
};
</script>

<style scoped>
.form-control {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
