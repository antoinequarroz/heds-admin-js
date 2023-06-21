<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterSection from './components/Footer.vue'
import Footer from "./components/Footer.vue";

export default {
  components: {
    Footer,
    Navbar,
    FooterSection
  }
}
</script>

