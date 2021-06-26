<template>
  <div class="footer">
    <div class="logo">InterfaceX</div>
    <div class="company">〒530-0027 大阪市北区堂山町1-5 三共梅田ビル7階</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.footer {
  height: 25vh;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 5vh 5vw;
}

.logo {
  color: black;
  font-size: 1.6rem;
  font-weight: bold;
}

.company {
  color: black;
}

@media (max-width: 767px) {
  .site-footer {
    flex-direction: column;
    padding: 30px;
  }
}
</style>
