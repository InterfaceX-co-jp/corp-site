<template>
  <div class="header">
    <div class="title">Interface-X</div>
    <div class="menu">三</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
// https://fonts.google.com/specimen/Saira+Condensed
@import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100;200;500;700&display=swap');
.header {
  z-index: 100;
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5% 5%;
}

.title {
  font-family: 'Saira Condensed', sans-serif !important;
  // font-family: unset !important;
  font-weight: 700;
  font-size: 1.3rem !important;
}
</style>
