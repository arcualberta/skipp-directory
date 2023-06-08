import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Import Google Login */
import vue3GoogleLogin from 'vue3-google-login'

import * as CatfishUI from 'applets'

import {default as config} from './appsettings'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, {
    //refer to https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit#heading=h.4zlex6l80fxx
    clientId: config.googleLoginClientId
})

app.component("Login", CatfishUI.Components.Login)
app.component("FontAwesomeIcon", CatfishUI.Components.FontAwesomeIcon)

/*
for (const entry of Object.entries({ 
    ...CatfishUI
   })) { 
      if(entry[0] === 'Components'){
        app.component("Login", entry[1].Login)
        app.component("FontAwesomeIcon",  entry[1].FontAwesomeIcon)
      }
   }
*/
   
app.mount('#app')
