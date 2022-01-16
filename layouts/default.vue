<template>
  <v-app>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/layouts/header/index.vue'
import Footer from '@/layouts/footer/index.vue'

export default Vue.extend({
  components: { Header, Footer },
})
</script>
