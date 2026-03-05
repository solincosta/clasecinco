import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//IMPORTANDO MI COMPONENTE DE MANERA GLOBAL
import MenuComponent from './components/MenuComponent.vue'
import CardComponent from './components/CardComponent.vue'

//Este valor lo trae VUE por defecto
//createApp(App).use(router).mount('#app')

//Necesito crear una constante de la APP
const app = createApp(App)

app.use(router)

//Importar mis componentes en el OBJ app
app.component('menu-component', MenuComponent)
app.component('card-component', CardComponent)

//Montan la APP
app.mount('#app')
