<template>
  <section class="position-relative overflow-hidden pt-0 pt-sm-5">
    <div class="container">
      <!-- Title -->
      <div class="row position-relative z-index-9">
        <div class="col-12 text-center mx-auto">
          <h2 class="mb-0">FAQ'S</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 col-xl-8 mx-auto text-center position-relative">
          <!-- SVG decoration -->
          <figure class="position-absolute top-0 start-0 translate-middle ms-8">
            <svg style="enable-background:new 0 0 141.7 143.9;">
              <path class="fill-success" d="M137.7,53.1c9.6,29.3,1.8,64.7-20.2,80.7s-58.1,12.6-83.5-5.8C8.6,109.5-6.1,76.1,2.4,48.7 C10.8,21.1,42.2-0.7,71.5,0S128.1,23.8,137.7,53.1z"/>
            </svg>
          </figure>
          <!-- SVG decoration -->
          <div class="card-body p-4">
            <!-- FAQ START -->
            <div class="accordion accordion-icon accordion-bg-light" id="accordionExample2">
              <!-- Item -->
              <div class="accordion-item mb-3" v-for="(faq, index) in faqs" :key="index">
                <h6 class="accordion-header font-base" :id="'heading-' + index">
                  <button
                      class="accordion-button fw-bold rounded d-inline-block collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse-' + index"
                      aria-expanded="false"
                      :aria-controls="'collapse-' + index"
                  >
                    {{ faq.question }}
                  </button>
                </h6>
                <!-- Body -->
                <div :id="'collapse-' + index" class="accordion-collapse collapse" :aria-labelledby="'heading-' + index" data-bs-parent="#accordionExample2">
                  <div class="accordion-body mt-3">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- FAQ END -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      faqs: [
        {
          question: "Comment enregistrer une video et la revoir sur SimCapture?",
          answer: "Pour enregistrer une vidéo sur SimCapture, vous devez tout d'abord vous assurer que votre session est configurée pour l'enregistrement vidéo. Ensuite, lorsque vous lancez votre simulation, vous pouvez cliquer sur le bouton \"Enregistrer\" pour commencer l'enregistrement vidéo. Une fois que vous avez terminé l'enregistrement, vous pouvez accéder à la vidéo enregistrée en naviguant vers la section \"Enregistrements\" de votre session. Vous pourrez alors la revoir et la partager avec d'autres membres de votre équipe. Il est important de noter que la procédure exacte pour enregistrer et accéder à une vidéo peut varier en fonction de la configuration spécifique de votre session SimCapture."
        },
        {
          question: "How to edit my Profile?",
          answer: "What deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be."
        },
        {
          question: "What's are the difference between a college and a university?",
          answer: "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors."
        },
        {
          question: "What's are the difference between a college and a university?",
          answer: "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors."
        },
        {
          question: "What's are the difference between a college and a university?",
          answer: "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors."
        },
        {
          question: "What's are the difference between a college and a university?",
          answer: "Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale. Subjects he prospect elegance followed no overcame possible it on. Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors."
        },
        // ajoutez plus de FAQ comme nécessaire
      ]
    }
  }
}
</script>

<style scoped>
/* Vos styles CSS ici si nécessaire */
</style>
