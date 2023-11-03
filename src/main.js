import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.component('PButton', Button)

app.mount('#app')
