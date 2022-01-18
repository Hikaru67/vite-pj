import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import HelloWorld from './components/HelloWorld.vue'

createApp(App)
  .use(router)
  .mount('#app')