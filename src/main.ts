import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import Index from './views/index.vue'

const app = createApp(App)
app.use(createRouter({
    history: createMemoryHistory(),
    routes: [
        {path: "/", component: Index}
    ]
}))
app.mount('#app')
