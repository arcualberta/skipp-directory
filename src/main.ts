import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

/* Import Google Login */
import vue3GoogleLogin from 'vue3-google-login'
import BootstrapVue3 from 'bootstrap-vue-3'
// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import {default as config} from './appsettings'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import * as faIcons from '@fortawesome/free-solid-svg-icons'

import * as ArcAuthorization from '@arc/authorization'

/* add icons to the library */
library.add(faIcons.faQuestionCircle)
library.add(faIcons.faMagnifyingGlass)
library.add(faIcons.faCircleXmark)
library.add(faIcons.faCirclePlus)

const vuetify = createVuetify({
    components,
    directives
  })

const app = createApp(App)
app.use(createPinia())
app.use(BootstrapVue3)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.use(vue3GoogleLogin, {
    //refer to https://docs.google.com/document/d/1N_y4aQupxPKPGh2eaxpOqCmc_75QionPp4U_MoY3gZQ/edit#heading=h.4zlex6l80fxx
    clientId: config.googleLoginClientId
})
app.component("Login", ArcAuthorization.Login)

// app.component("FormSubmission", CatfishUI.Components.FormSubmission)
// app.component("SolrSearchPanel", CatfishUI.Components.SolrSearchPanel)
// app.component("FontAwesomeIcon", CatfishUI.Components.FontAwesomeIcon)

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
