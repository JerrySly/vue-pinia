import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia();
pinia.use(({store})=>{
    store.$subscribe(()=>{
        console.log('My store is updated')
    })
   return { secretName: 'Jerry'}
})

createApp(App).use(pinia).mount('#app')
