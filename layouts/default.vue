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
import Header from '@/components/pages/header/index.vue'
import Footer from '@/components/pages/footer/index.vue'

export default Vue.extend({
  components: { Header, Footer },
})
</script>
