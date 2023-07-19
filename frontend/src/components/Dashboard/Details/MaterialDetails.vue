<template>
  <div>
    <h1>{{ material.matTitre }}</h1>
    <img :src="material.matImage" alt="Material Image">
    <p>{{ material.matDescription }}</p>
    <!-- Autres détails du matériel ici -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MaterialDetails',
  data() {
    return {
      material: {}
    }
  },
  created() {
    axios.get(`http://localhost:8000/materiel/${this.$route.params.id}`)
        .then(response => {
          this.material = response.data;
        })
        .catch(error => console.error(error));
  }
}
</script>
