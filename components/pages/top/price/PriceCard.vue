<template>
  <v-card :width="width" hover>
    <v-card-title class="card-title">
      {{ title }}
    </v-card-title>
    <img :height="width * 0.618" :width="width" :src="imageSrc" />
    <v-card-text style="align-items: center; display: flex; gap: 8px">
      <slot name="price-chip" />
      <span class="price">{{ price }}</span>
    </v-card-text>
    <slot />
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    width: {
      default: 374,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
    imageSrc: {
      required: true,
      type: String,
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  &-text {
    text-align: left;
  }
}

.price {
  font-size: 32px;
  color: white;
  font-weight: bold;
}
</style>
