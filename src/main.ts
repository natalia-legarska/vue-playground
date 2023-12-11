import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import '@mdi/font/scss/materialdesignicons.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints/md3'

const vuetify = createVuetify({
    components,
    directives,
    blueprint: md3,
    theme: {
        defaultTheme: 'dark'
    },
    icons: {
        defaultSet: 'mdi',
    }
})

createApp(App)
    .use(vuetify)
    .mount('#app')
