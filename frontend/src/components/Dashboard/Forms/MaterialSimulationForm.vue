<template>
  <div class="container mt-5">
    <h1 class="mb-4">Ajouter un nouveau matériel de simulation</h1>
    <form @submit.prevent="submitForm" class="row g-3">
      <div class="col-md-4">
        <label for="reference" class="form-label">Référence</label>
        <input id="reference" v-model="simulationData.reference" type="text" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="materiel" class="form-label">Matériel</label>
        <input id="materiel" v-model="simulationData.materiel" type="text" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="secteur" class="form-label">Secteur</label>
        <input id="secteur" v-model="simulationData.secteur" type="text" class="form-control" />
      </div>
      <div class="col-12">
        <label for="description" class="form-label">Description</label>
        <textarea id="description" v-model="simulationData.description" class="form-control"></textarea>
      </div>
      <div class="col-md-6">
        <label for="responsable" class="form-label">Responsable</label>
        <input id="responsable" v-model="simulationData.responsable" type="text" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="date_acquisition_achat" class="form-label">Date d'Acquisition</label>
        <input id="date_acquisition_achat" v-model="simulationData.date_acquisition_achat" type="date" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="nom_societe_achat" class="form-label">Nom de la Société</label>
        <input id="nom_societe_achat" v-model="simulationData.nom_societe_achat" type="text" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="telephone_achat" class="form-label">Téléphone Achat</label>
        <input id="telephone_achat" v-model="simulationData.telephone_achat" type="tel" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="mail_achat" class="form-label">Mail Achat</label>
        <input id="mail_achat" v-model="simulationData.mail_achat" type="email" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="cout" class="form-label">Coût</label>
        <input id="cout" v-model="simulationData.cout" type="number" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="origine_f
ond" class="form-label">Origine du Fond</label>
        <input id="origine_fond" v-model="simulationData.origine_fond" type="text" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="localisation" class="form-label">Localisation</label>
        <input id="localisation" v-model="simulationData.localisation" type="text" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="quantite" class="form-label">Quantité</label>
        <input id="quantite" v-model="simulationData.quantite" type="number" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="stockage" class="form-label">Stockage</label>
        <input id="stockage" v-model="simulationData.stockage" type="text" class="form-control" />
      </div>
      <div class="col-md-4">
        <label for="duree_garantie" class="form-label">Durée de la Garantie</label>
        <input id="duree_garantie" v-model="simulationData.duree_garantie" type="number" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="date_derniere_intervention" class="form-label">Date de la Dernière Intervention</label>
        <input id="date_derniere_intervention" v-model="simulationData.date_derniere_intervention" type="date" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="nom_entretien" class="form-label">Nom de l'Entretien</label>
        <input id="nom_entretien" v-model="simulationData.nom_entretien" type="text" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="entreprise_entretien" class="form-label">Entreprise d'Entretien</label>
        <input id="entreprise_entretien" v-model="simulationData.entreprise_entretien" type="text" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="telephone_entretien" class="form-label">Téléphone Entretien</label>
        <input id="telephone_entretien" v-model="simulationData.telephone_entretien" type="tel" class="form-control" />
      </div>
      <div class="col-12">
        <label for="mail_entretien" class="form-label">E-mail Entretien</label>
        <input id="mail_entretien" v-model="simulationData.mail_entretien" type="email" class="form-control" />
      </div>
      <div class="col-12">
        <label for="liens" class="form-label">Liens</label>
        <input id="liens" v-model="simulationData.liens" type="url" class="form-control" />
      </div>
      <div class="col-12">
        <label for="slug" class="form-label">Slug</label>
        <input id="slug" v-model="simulationData.slug" type="text" class="form-control" />
      </div>
      <div class="col-12">
        <label for="image" class="form-label">Image</label>
        <input id="image" v-model="simulationData.image" type="url" class="form-control" />
      </div>
      <div class="text-center mt-4">
        <button type="submit" class="btn btn-primary">Enregistrer</button>
        <button type="button" class="btn btn-secondary"

                @click="goBack">Retour</button>
      </div>
    </form>

  </div>
</template>



  <script>
import axios from 'axios';

export default {
  name: 'MaterialSimulationForm',
  data() {
    return {
      simulationData: {
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
        cout: 0,
        origine_fond: '',
        localisation: '',
        quantite: 0,
        stockage: '',
        duree_garantie: 0,
        date_derniere_intervention: '',
        nom_entretien: '',
        entreprise_entretien: '',
        telephone_entretien: '',
        mail_entretien: '',
        liens: '',
        slug: ''
      },
    };
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:8000/simulation', this.simulationData)
          .then(response => {
            this.$router.push('/material-simulation-list');
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
<script setup>
</script>