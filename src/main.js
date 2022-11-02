
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import swal from 'sweetalert2'
window.Swal = swal
window.$=window.jquery=require('jquery')
createApp(App).use(store).use(router).mount('#app')
