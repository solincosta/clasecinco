<template>
    <section class="section-banner">
        <img class="banner" src="../assets/excavator.jpg" alt="">
        <button class="button-suscribe open-sans-button">INSCRIBETE</button>
    </section>
</template>

<script>
export default {
    name: "BannerComponent"
}
</script>

<style scoped>
.open-sans-button {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
}

.section-banner {
    background-color: black;
    position: relative;
}

.banner {
    width: 80%;
    margin: 0 10%;
    height: 500px;
    object-fit: cover;
    object-position: top center;
}

.button-suscribe {
    position: absolute;
    top: 75%;
    left: 20%;
    background-color: #ED3237;
    color: aliceblue;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
}

.button-suscribe:hover {
    background-color: #000;
    cursor: pointer;

}

.open-sans-button-card {
    font-family: "Red Hat Display", sans-serif;
    font-weight: 650;
    font-size: 1rem;
}
</style>