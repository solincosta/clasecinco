<template>
    <main>
        <menu-component></menu-component>
        <img width="100%" height="500px"
            src="https://www.toyotacredito.com.co/sites/default/files/2026-02/Banner-Web---Yaris-FEB.jpg" alt="">
        <section class="carros">
            <card-component v-for="carro in carros" :key="carro.id" :imagen="carro.imagen"
                :referencia="carro.referencia" 
                :disponibilidad="carro.disponible"
                :mostrar="carro.mostrar">
            </card-component>
           </section>

    </main>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'
export default {
    components: { CardComponent },
    data() {
        return {
            carros: [
                {
                    id: 1,
                    referencia: "Toyota 1",
                    imagen: "/toyota1.jpg",
                    disponible: true,
                    mostrar: true
                },
                {
                    id: 2,
                    referencia: "Toyota 2",
                    imagen: "/toyota2.jpg",
                    disponible: true,
                    mostrar: false
                },
                {
                    id: 3,
                    referencia: "Toyota 3",
                    imagen: "/toyota3.jpg",
                    disponible: false,
                    mostrar: true
                },
                {
                    id: 4,
                    referencia: "Toyota 4",
                    imagen: "/toyota1.jpg",
                    disponible: true,
                    mostrar: true
                },
            ]
        };
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
</style>