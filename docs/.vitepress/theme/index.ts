import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import QualisEventos from './components/QualisEventos.vue'
import QualisPeriodicos from './components/QualisPeriodicos.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('QualisEventos', QualisEventos)
    app.component('QualisPeriodicos', QualisPeriodicos)
  },
} satisfies Theme
