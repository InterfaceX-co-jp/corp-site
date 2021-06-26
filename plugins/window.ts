import Vue from 'vue'
import { Plugin } from '@nuxt/types'

export interface window {
  pageYOffset: number
  width: number
  height: number
}

declare module 'vue/types/vue' {
  interface Vue {
    $window: window
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $window: window
  }
  interface Context {
    $window: window
  }
}

const $window = Vue.observable<window>({
  width: 0,
  height: 0,
  pageYOffset: 0,
})

// SSR 時にエラーが出るため process.browser で分岐
// Nuxt を使用しなければこの分岐は削除してください
if (process.browser) {
  const onScroll = () => {
    $window.pageYOffset = window.pageYOffset
  }
  const onResize = () => {
    $window.width = document.documentElement.clientWidth
    $window.height = window.innerHeight
  }
  global.addEventListener('scroll', onScroll)
  global.addEventListener('resize', onResize)
  // 一度だけスクロールハンドラとリサイズハンドラを直接呼んで初期値をセット
  onScroll()
  onResize()
}

const plugin: Plugin = (_, inject) => {
  inject('window', $window)
}

export default plugin
