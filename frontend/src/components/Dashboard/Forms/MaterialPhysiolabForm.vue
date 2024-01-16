<template>
  <div class="container mt-5">
    <h1 class="mb-4">Ajouter un nouveau matériel de Physiolab</h1>
    <form @submit.prevent="submitForm" class="row g-3">
      <!-- Column 1 -->
      <div class="col-md-4">
        <label for="reference" class="form-label">Référence</label>
        <input id="reference" v-model="physiolabData.reference" type="text" class="form-control" />

        <label for="materiel" class="form-label">Matériel</label>
        <input id="materiel" v-model="physiolabData.materiel" type="text" class="form-control" />

        <label for="secteur" class="form-label">Secteur</label>
        <input id="secteur" v-model="physiolabData.secteur" type="text" class="form-control" />

        <label for="description" class="form-label">Description</label>
        <textarea id="description" v-model="physiolabData.description" class="form-control"></textarea>
      </div>

      <!-- Column 2 -->
      <div class="col-md-4">
        <label for="responsable" class="form-label">Responsable</label>
        <input id="responsable" v-model="physiolabData.responsable" type="text" class="form-control" />

        <label for="date_acquisition_achat" class="form-label">Date d'Acquisition</label>
        <input id="date_acquisition_achat" v-model="physiolabData.date_acquisition_achat" type="date" class="form-control" />

        <label for="nom_societe_achat" class="form-label">Nom de la Société</label>
        <input id="nom_societe_achat" v-model="physiolabData.nom_societe_achat" type="text" class="form-control" />

        <label for="telephone_achat" class="form-label">Téléphone Achat</label>
        <input id="telephone_achat" v-model="physiolabData.telephone_achat" type="tel" class="form-control" />
      </div>

      <!-- Column 3 -->
      <div class="col-md-4">
        <label for="mail_achat" class="form-label">Mail Achat</label>
        <input id="mail_achat" v-model="physiolabData.mail_achat" type="email" class="form-control" />

        <label for="cout" class="form-label">Coût</label>
        <input id="cout" v-model="physiolabData.cout" type="number" class="form-control" />

        <label for="origine_fond" class="form-label">Origine du Fond</label>
        <input id="origine_fond" v-model="physiolabData.origine_fond" type="text" class="form-control" />

        <label for="localisation" class="form-label">Localisation</label>
        <input id="localisation" v-model="physiolabData.localisation" type="text" class="form-control" />
      </div>

      <!-- Remaining Fields -->
      <div class="col-md-4">
        <label for="quantite" class="form-label">Quantité</label>
        <input id="quantite" v-model="physiolabData.quantite" type="number" class="form-control" />

        <label for="stockage" class="form-label">Stockage</label>
        <input id="stockage" v-model="physiolabData.stockage" type="text" class="form-control" />

        <label for="duree_garantie" class="form-label">Durée de la Garantie</label>
        <input id="duree_garantie" v-model="physiolabData.duree_garantie" type="number" class="form-control" />
      </div>

      <div class="col-md-4">
        <label for="date_derniere_intervention" class="form-label">Date de la Dernière Intervention</label>
        <input id="date_derniere_intervention" v-model="physiolabData.date_derniere_intervention" type="date" class="form-control" />

        <label for="nom_entretien" class="form-label">Nom de l'Entretien</label>
        <input id="nom_entretien" v-model="physiolabData.nom_entretien" type="text" class="form-control" />

        <label for="entreprise_entretien" class="form-label">Entreprise d'Entretien</label>
        <input id="entreprise_entretien" v-model="physiolabData.entreprise_entretien" type="text" class="form-control" />
      </div>

      <div class="col-md-4">
        <label for="telephone_entretien" class="form-label">Téléphone Entretien</label>
        <input id="telephone_entretien" v-model="physiolabData.telephone_entretien" type="tel" class="form-control" />

        <label for="mail_entretien" class="form-label">E-mail Entretien</label>
        <input id="mail_entretien" v-model="physiolabData.mail_entretien" type="email" class="form-control" />
      </div>

      <div class="col-12">
        <label for="liens" class="form-label">Liens</label>
        <input id="liens" v-model="physiolabData.liens" type="url" class="form-control" />
      </div>

      <div class="col-12">
        <label for="slug" class="form-label">Slug</label>
        <input id="slug" v-model="physiolabData.slug" type="text" class="form-control" />
      </div>

      <div class="col-12">
        <label for="image" class="form-label">Image</label>
        <input id="image" v-model="physiolabData.image" type="url" class="form-control" />
      </div>

      <div class="text-center mt-4">
        <button type="submit" class="btn btn-primary">Enregistrer</button>
        <button type="button" class="btn btn-secondary" @click="goBack">Retour</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MaterialPhysiolabForm',
  data() {
    return {
      physiolabData: {
        reference: '',
        materiel: '',
        description: '',
        secteur: '',
        responsable: '',
        date_acquisition_achat: '',
        nom_societe_achat: '',
        nom_du_contact_achat: '',
        telephone_achat: '',
        mail_achat: '',
        cout: null,
        origine_fond: '',
        localisation: '',
        quantite: null,
        stockage: '',
        duree_garantie: null,
        date_derniere_intervention: '',
        nom_entretien: '',
        entreprise_entretien: '',
        telephone_entretien: '',
        mail_entretien: '',
        liens: '',
        slug: '',
        image: ''
      },
    };
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:8000/physiolab', this.physiolabData)
          .then(response => {
            this.$router.push('/material-physiolab-list');
          })
          .catch(error => {
            console.error('Erreur:', error.response.data);
          });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.form-simulation .col-md-4, .form-simulation .col-12 {
  margin-bottom: 1rem;
}
</style>
