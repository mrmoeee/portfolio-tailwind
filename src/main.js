import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// import fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// fontawesome component 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faDownload, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faReact, faSquareJs, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faReact, faSquareJs, faHtml5, faCss3, faDownload)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app', document.getElementById("canvas"))