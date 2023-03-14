import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import { createPersistedState } from 'pinia-plugin-persistedstate'
const pinia = createPinia()

// Автоматический режим по умолчанию включает сохранение всех хранилищ.
pinia.use(createPersistedState({
    auto: true
}))

const app = createApp(App)

app.use(pinia)
app.use(router)


app.mount('#app')
