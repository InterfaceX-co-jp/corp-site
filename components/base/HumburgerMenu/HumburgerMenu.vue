<template>
  <div class="hamburger_btn" @click="shouldShow = !shouldShow">
    <span class="line line_01" :class="{ btn_line01: shouldShow }"></span>
    <span class="line line_02" :class="{ btn_line02: shouldShow }"></span>
    <span class="line line_03" :class="{ btn_line03: shouldShow }"></span>
    <transition name="menu">
      <div v-show="shouldShow" class="menu">
        <ul class="menu-list">
          <li class="menu-list-item"><a href="#">About</a></li>
          <li class="menu-list-item"><a href="#">Works</a></li>
          <li class="menu-list-item"><a href="#">Company</a></li>
          <li class="menu-list-item"><a href="#">Contact</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      shouldShow: false,
    }
  },
})
</script>

<style scoped lang="scss">
.hamburger_btn {
  position: absolute;
  top: 5%;
  right: 0vw;
  width: 57px;
  height: 57px;
  cursor: pointer;
  z-index: 50;
}

.hamburger_btn .line {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 2px;
  background: white;
  text-align: center;
  z-index: 50;
}

.hamburger_btn .line_01 {
  top: 24px;
  transition: 0.4s ease;
}
.hamburger_btn .line_02 {
  top: 34px;
  transition: 0.4s ease;
}
.hamburger_btn .line_03 {
  top: 44px;
  transition: 0.4s ease;
}

.btn_line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
  background: black;
}
.btn_line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn_line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/*サイドバー*/
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
.menu-leave,
.menu-enter-to {
  opacity: 1;
}

.menu-list-item {
  list-style: none;
  line-height: 1;
  padding: 1rem;
  text-align: center;
}
.menu {
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 30;
  padding: 2rem 1rem;
  position: fixed;
  width: 100%;
  height: 80rem;
  top: 0;
  right: 0;
}
.menu a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
}
.menu-list {
  margin: 1rem;
  padding: 0;
}
</style>
