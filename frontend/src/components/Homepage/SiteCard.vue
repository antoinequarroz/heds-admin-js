<template>
  <section>
    <div class="container">
      <!-- Title -->
      <div class="row mb-4">
        <div class="col-lg-8 mx-auto text-center">
          <h2 class="fs-1">Les sites</h2>
          <p class="mb-0">Les différents sites de la HEdS et ES</p>
        </div>
      </div>
      <div class="row g-4">
        <div v-for="card in cards" :key="card.id" class="col-sm-6 col-lg-3">
          <div class="card" :class="card.bgClass">
            <img class="card-img" :src="card.imageUrl" alt="">
            <div class="card-body heightCard">
              <h2 class="card-title text-center">
                <a :href="siteDetail" class="card-title">{{ card.schoolType }}</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'SiteCard',
  data() {
    return {
      siteDetail : '/site_detail',
      cards: [
        {
          id: 1,
          schoolType: 'Sion',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fpformationheds.appspot.com/o/agasse.jpg?alt=media&token=9c5a887e-f7bd-4d55-840a-651c2c53092b',
          bgClass: 'bg-warning bg-opacity-50 p-4 overflow-hidden h-100'
        },
        {
          id: 2,
          schoolType: 'Loèche-les-Bains',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fpformationheds.appspot.com/o/LoecheLesBainsSiteCard.png?alt=media&token=18cb7dd8-b265-4b35-80ec-a643e56e483b',
          bgClass: 'bg-purple bg-opacity-50 p-4 overflow-hidden h-100'
        },
        {
          id: 3,
          schoolType: 'Viège',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fpformationheds.appspot.com/o/visp.jpg?alt=media&token=4d3f4b24-9051-408e-be3a-cf7c4cf5bacb',
          bgClass: 'bg-orange bg-opacity-50 p-4 overflow-hidden h-100'
        },
        {
          id: 4,
          schoolType: 'Monthey',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/fpformationheds.appspot.com/o/Infirmier_ES1.jpg?alt=media&token=7903b109-69c8-43be-8bbb-14fc697924ce',
          bgClass: 'bg-info bg-opacity-50 p-4 overflow-hidden h-100'
        }
      ]
    };
  }
};
</script>

<style scoped>
.heightCard {
  height: 405px;
  position: relative;
  display: flex;
  align-items: center; /* Centrer verticalement */
  justify-content: center; /* Centrer horizontalement */
  flex-direction: column; /* Organise les éléments en colonne */
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.card-title {
  z-index: 1;
  position: relative;
  color: #fff;
  transition: color 0.3s ease;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-top: 20%; /* Monter le titre */
}

.card-title:hover {
  color: #007bff; /* Couleur primaire lorsque la souris passe dessus */
}
.card {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transform: scale(1.05);
}
</style>
