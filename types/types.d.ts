declare module 'vue/types/vue' {
  // eslint-disable-next-line import/no-duplicates
  import { Window as PluginWindow } from '@/plugins/window'

  interface Vue {
    $window: PluginWindow
  }
}

// declare module '@nuxt/types' {
//   // eslint-disable-next-line import/no-duplicates
//   import { Window as PluginWindow } from '@/plugins/window'

//   interface NuxtAppOptions {
//     $window: PluginWindow
//   }
//   interface Context {
//     $window: PluginWindow
//   }
// }
