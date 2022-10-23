import Vue from 'vue'
import { Plugin } from '@nuxt/types'

export interface Window {
  pageYOffset: number
  width: number
  height: number
}
declare module 'vue/types/vue' {
  interface Vue {
    $window: Window
  }
}

const $window = Vue.observable<Window>({
  width: 0,
  height: 0,
  pageYOffset: 0,
})

const plugin: Plugin = (_, inject) => {
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

  inject('window', $window)
}

export default plugin
