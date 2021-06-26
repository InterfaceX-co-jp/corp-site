<template>
  <div>
    <v-carousel hide-delimiters :height="screenHeight">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <div class="carousel-overlay">
          <div class="carousel-overlay-title">{{ item.title }}</div>
          <div class="carousel-overlay-description">{{ item.title }}</div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
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
          title: 'Web App Development',
          desicription: 'hogehogehoge',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Web Site Design / Development',
          desicription: 'hogehogehoge',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Web Marketing',
          desicription: 'hogehogehoge',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          title: 'Web Consulting',
          desicription: 'hogehogehoge',
        },
      ],
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
  top: 80%;
  padding-left: 5%;
  font-size: 2.4rem;

  &-description {
    font-size: 1.6rem;
    color: gray;
  }
}
</style>
