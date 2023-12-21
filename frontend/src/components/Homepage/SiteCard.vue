<template>
  <section>
    <div class="container">
      <div class="row g-4">
        <div v-for="card in cards" :key="card.id" class="col-sm-6 col-lg-3">
          <div class="card" :class="card.bgClass">
            <div class="card-body heightCard">
              <h3 class="mb-2 text-center mt-7">
                <a href="#" class="stretched-link">{{ card.schoolType }}</a>
              </h3>
              <img class="" :src="card.imageUrl" alt="">
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
      cards: [
        {
          id: 1,
          schoolType: 'Sion',
          imageUrl: 'assets/images/element/primary-school.svg',
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
          imageUrl: 'assets/images/element/high-school.svg',
          bgClass: 'bg-orange bg-opacity-50 p-4 overflow-hidden h-100'
        },
        {
          id: 4,
          schoolType: 'Monthey',
          imageUrl: 'assets/images/element/exam.svg',
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
  width: auto;
}
</style>
