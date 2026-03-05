<template>
    <section v-show="mostrar" class="card">
        <img class="image-car" width="100%" height="70%" :src="imagen" alt="">
        <div class="referencia">{{ referencia }}</div>
        <span v-if="disponibilidad" class="status green">DISPONIBLE</span>
        <span v-else class="status red"> NO DISPONIBLE</span>
    </section>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        imagen: String,
        referencia: String,
        disponibilidad: Boolean,
        mostrar: Boolean
    }
}
</script>

<style scoped>
.card {
    height: 250px;
    width: 100%;
    border: solid #070606 1px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}

.image-car {
    border-radius: 10px 10px 0 0;
}

.referencia {
    width: 100%;
    height: 15%;
    background-color: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: 700;
}

.status {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    font-weight: 700;
}

.red {
    background-color: red;
    color: white;
}

.green{
    background-color: green;
    color: white;
}
</style>