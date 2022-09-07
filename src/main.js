import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {
  faUserSecret,
  faArrowRightFromBracket,
  faHouse,
  faChartColumn,
  faMagnifyingGlass,
  faCalculator,
  faGraduationCap,
  faSliders,
} from '@fortawesome/free-solid-svg-icons'
import {
  faBell,
  faFlag,
  faAddressCard,
  faSun,
  faMoon,
} from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(
  faUserSecret,
  faArrowRightFromBracket,
  faHouse,
  faChartColumn,
  faMagnifyingGlass,
  faCalculator,
  faGraduationCap,
  faSliders
)
library.add(faBell, faFlag, faAddressCard, faSun, faMoon)

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
