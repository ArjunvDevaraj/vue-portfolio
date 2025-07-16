import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faLaravel, faVuejs, faJs, faGitAlt 
} from '@fortawesome/free-brands-svg-icons'
import { 
  faDatabase, faCode, faProjectDiagram
} from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(
  faLaravel,
  faVuejs,
  faJs,
  faGitAlt,
  faDatabase,
  faCode,
  faProjectDiagram
)

// ✅ Create the app FIRST
const app = createApp(App)

// ✅ Register the FontAwesomeIcon component
app.component('font-awesome-icon', FontAwesomeIcon)

// ✅ Mount the app
app.mount('#app')
