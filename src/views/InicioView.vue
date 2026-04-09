<template>
    <main>
        <menu-component></menu-component>
        <banner-component></banner-component>
        <CardComponentTwo></CardComponentTwo>

        <!-- <img width="100%" height="500px"
            src="https://www.toyotacredito.com.co/sites/default/files/2026-02/Banner-Web---Yaris-FEB.jpg" alt="">

        <div class="precio-container">
            <input class="precio" v-model="preciocarro" type="text" @keyup.enter="buscarCarros" placeholder="Digite precio" name="" id="">

        </div>

        <section class="carros">
            <card-component v-show="preciocarro > carro.precio" v-for="carro in carros" :key="carro.id" :imagen="carro.imagen"
                :referencia="carro.referencia" :disponibilidad="carro.disponible" :mostrar="carro.mostrar" :precio="carro.precio">
            </card-component>
        </section> -->

    </main>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';
//import CardComponent from '@/components/CardComponent.vue'
import MenuComponent from '@/components/MenuComponent.vue';
import CardComponentTwo from '@/components/CardComponentTwo.vue';
export default {
    components: {  BannerComponent, MenuComponent, CardComponentTwo },
    data() {
        return {
            preciocarro: 0,
            carros: [
                {
                    id: 1,
                    referencia: "Toyota 1",
                    imagen: "/toyota1.jpg",
                    disponible: true,
                    mostrar: true,
                    precio: 56000000
                },
                {
                    id: 2,
                    referencia: "Toyota 2",
                    imagen: "/toyota2.jpg",
                    disponible: true,
                    mostrar: false,
                    precio: 46000000
                },
                {
                    id: 3,
                    referencia: "Toyota 3",
                    imagen: "/toyota3.jpg",
                    disponible: false,
                    mostrar: true,
                    precio: 96000000
                },
                {
                    id: 4,
                    referencia: "Toyota 4",
                    imagen: "/toyota1.jpg",
                    disponible: true,
                    mostrar: true,
                    precio: 26000000
                },
            ]
        };
    },
    methods: {
         buscarCarros: function() {
            
        }
    },


    created() {
        console.log(this.carros);
    }
}
</script>

<style scoped>
.carros {
    width: 85%;
    margin: 2rem auto;
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

.precio-container {
    width: 75%;
    height: 2rem;
    margin: 1rem auto;
}

.precio {
    width: 100%;
    height: 100%;
    font-size: 2rem;
}
</style>