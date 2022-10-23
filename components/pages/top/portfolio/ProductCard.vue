<template>
  <v-card :width="width" class="title">
    <img :height="width * 0.618" :width="width" :src="imageSrc" />

    <v-card-title class="card-title">{{ title }}</v-card-title>

    <v-card-text v-if="description" class="card-text">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    width: {
      default: 374,
      type: Number,
    },
    title: {
      required: true,
      type: String,
    },
    imageSrc: {
      required: true,
      type: String,
    },
    description: {
      default: undefined,
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.card {
  &-text {
    text-align: left;
  }
}
</style>
