import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

//IMPORTANDO MI COMPONENTE DE MANERA GLOBAL
import MenuComponent from './components/MenuComponent.vue'
import CardComponent from './components/CardComponent.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Skeleton from 'primevue/skeleton';
import Badge from 'primevue/badge';

//Este valor lo trae VUE por defecto
//createApp(App).use(router).mount('#app')

//Necesito crear una constante de la APP
const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

import Button from "primevue/button"

//Importar mis componentes en el OBJ app
app.component('menu-component', MenuComponent)
app.component('card-component', CardComponent)
app.component('ButtonComponent', Button);
app.component('DataTable', DataTable);
app.component('ColumnTable', Column);
app.component('SkeletonComponent', Skeleton);
app.component('BadgeComponent', Badge);

//Montan la APP
app.mount('#app')
