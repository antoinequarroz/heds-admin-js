<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <footer-section></footer-section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterSection from './components/Footer.vue'

export default {
  components: {
    Navbar,
    FooterSection
  }
}
</script>

