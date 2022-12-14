import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// import fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// fontawesome component 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')