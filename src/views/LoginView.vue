<template>
    <div class="login">
        <h3>Ingreso al sistema</h3>
        <input v-model="usuario" type="text">
        <input v-model="clave" type="password">
        <button @click="login()">Iniciar sesión</button>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    data() {
        return {
            onLoading: false,
            usuario: "",
            clave: "",

        }
    },
    methods: {
        login: async function () {
            try {

                const response = await this.axios.post('http://192.168.1.245/vuelos/apivuelos.php?endpoint=login', {
                    documento: this.usuario,
                    clave: this.clave
                });

                if (response.data.status === 'success') {
                    console.log(response.data);

                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("documento", response.data.viajero.documento);

                    this.$router.push({ name: 'reservar'})
                    
                }


            } catch (error) {
                console.error('Error en autenticación:', error.response?.data?.message || error);
                alert('Credenciales incorrectas');
            }
        },
    },

    created() {

    }
}
</script>

<style>
.login {
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
}
</style>