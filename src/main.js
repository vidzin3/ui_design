import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/utils/vuetify'
import router from './plugins/router'
import '@/styles/global.css'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
