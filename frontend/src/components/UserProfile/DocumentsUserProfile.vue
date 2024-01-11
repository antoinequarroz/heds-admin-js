<template>
  <div class="col-xl-12">
    <!-- Document Upload START -->
    <div class="card bg-transparent border rounded-3">
      <!-- Card header -->
      <div class="card-header bg-transparent border-bottom">
        <h3 class="card-header-title mb-0">Ajouter des documents</h3>
      </div>
      <!-- Card body START -->
      <div class="card-body">
        <!-- Upload Form -->
        <form class="row g-4" @submit.prevent="uploadDocument">
          <!-- Document Upload -->
          <div class="col-12">
            <label class="form-label">Ajouter un document</label>
            <input type="file" class="form-control" ref="fileInput" @change="handleFileUpload">
          </div>

          <!-- Upload button -->
          <div class="d-sm-flex justify-content-end">
            <button type="submit" class="btn btn-primary mb-0">Enregistrer</button>
          </div>
        </form>

        <!-- Uploaded Documents List -->
        <div class="mt-4">
          <h5>Vos documents:</h5>
          <ul>
            <li v-for="doc in uploadedDocuments" :key="doc.id">
              <a :href="doc.url" target="_blank">{{ doc.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Card body END -->
    </div>
    <!-- Document Upload END -->
  </div>
</template>

<script>
export default {
  name: 'DocumentUserProfile',
  data() {
    return {
      selectedFile: null,
      uploadedDocuments: []  // This should ideally be fetched from your server
    };
  },
  methods: {
    handleFileUpload() {
      this.selectedFile = this.$refs.fileInput.files[0];
    },
    async uploadDocument() {
      if (!this.selectedFile) {
        alert('Please select a document to upload.');
        return;
      }
      // Here, you can add the logic to upload the document to your server or storage.
      // For example, using FormData and an AJAX request.
      const formData = new FormData();
      formData.append('document', this.selectedFile);
      // Send formData to your server...

      // After successful upload, you can add the document to the uploadedDocuments array
      // or fetch the updated list from your server.
    }
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant DocumentUserProfile ici */
</style>
