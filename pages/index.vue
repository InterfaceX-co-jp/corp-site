<template>
  <v-app>
    <v-carousel hide-delimiters :height="screenHeight">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <div class="carousel-overlay">
          <div class="carousel-overlay-title">{{ item.title }}</div>
          <div class="carousel-overlay-description">
            {{ item.description }}
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <Portfolio />
    <Price />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Portfolio from '~/components/pages/top/portfolio/Products.vue'
import Price from '~/components/pages/top/price/Price.vue'
/**
 * almost clone of https://dope.ghost.io/
 */
export default Vue.extend({
  components: {
    Portfolio,
    Price,
  },
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'About',
          description: `WEBサービスをフリーランスチームが成功させる`,
        },
        // {
        //   src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        //   title: 'Works / Portfolio',
        //   description: 'これまでの制作実績',
        // },
        // {
        //   src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        //   title: 'Company',
        //   description: '私たちの組織について',
        // },
        // {
        //   src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        //   title: 'Contact',
        //   description: 'お問い合わせはこちらから',
        // },
      ],
      scrollY: 0,
      docHeight: 0,
    }
  },
  head: {
    title: 'HOME',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   hid: 'description',
      //   name: 'description',
      //   content: 'my website description'
      // }
    ],
  },
  computed: {
    screenHeight(): number {
      return (this as any).$window.height
    },
  },
})
</script>

<style lang="scss" scoped>
.carousel-overlay {
  z-index: 50;
  position: absolute;
  width: 100%;
  top: 75%;
  padding-left: 5%;
  font-size: 2.4rem;

  &-description {
    font-size: 1.2rem;
    color: gray;
  }
}

.fixed {
  position: fixed;
}
</style>
