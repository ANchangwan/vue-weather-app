import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons' // 모든 solid 아이콘
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import store from './store/store';


library.add(faUserSecret,faBars, faLocationDot, faMagnifyingGlass );
createApp(App)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
