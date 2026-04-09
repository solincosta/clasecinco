<template>
    <header class="menu open-sans-menu">
        <img class="logo" src="../assets/logo-c-recorte.png" alt="">

        <nav class="navbar-main">
            <li class="nav-item">INICIO</li>
            <li class="nav-item">OFERTA EDUCATIVA</li>
            <li class="nav-item">INSCRIPCION</li>
            <li class="nav-item">PORTAL</li>
            <li class="nav-item">DOCENTES</li>
        </nav>
    </header>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style scoped>
.menu {
    width: 100%;
    height: 80px;
    background-color: #ED3237;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px #FFF solid;
}

.logo {

    height: 100%;
    margin: 0 2rem;
}

.navbar-main {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 80%;

}

.nav-item {
    list-style: none;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
}

.nav-item:hover {
    background-color: #000;
    cursor: pointer;
}

.open-sans-menu {
    font-family: "Red Hat Display", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
}
</style>