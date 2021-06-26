<template>
  <v-carousel hide-delimiters :height="screenHeight">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <div class="carousel-overlay">
        <div class="carousel-overlay-title">{{ item.title }}</div>
        <div class="carousel-overlay-description">
          {{ item.desicription }}
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
/**
 * almost clone of https://dope.ghost.io/
 */
export default {
  components: {},
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'About',
          desicription: `WEBサービスをフリーランスチームが成功させる`,
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Works / Portfolio',
          desicription: 'これまでの制作実績',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Company',
          desicription: '私たちの組織について',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Contact',
          desicription: 'お問い合わせはこちらから',
        },
      ],
      scrollY: 0,
      docHeight: 0,
    }
  },
  computed: {
    screenHeight() {
      return this.$window.height
    },
  },
}
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
