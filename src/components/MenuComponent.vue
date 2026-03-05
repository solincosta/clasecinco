<template>
  <menu class="menu">
    <h1 class="logo">LOGO</h1>

    <ul class="items">
        <li class="item">INICIO</li>
        <li class="item">COMPRAS</li>
        <li class="item">COTIZACION</li>
        <li class="item">CONTACTO</li>
    </ul>
  </menu>
</template>

<script>
export default {
    name: "MenuComponent"
}
</script>

<style scoped>
.menu{
    height: 80px;
    width: 100%;
    background: #000;
    font-family: sans-serif;
    color: #FFF;
    display: flex;
    /* justify-content: space-between; */
    padding: 0 1rem;
    align-items: center;
    border-bottom: #FFF 1px solid;
}

.logo{
    width: 30%;
}

.items{
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    width: 70%;
    gap: 2rem;
}

.item{
    list-style: none;
    border: solid #FFF 1px;
    padding: 1rem;
    cursor: pointer;
}
</style>