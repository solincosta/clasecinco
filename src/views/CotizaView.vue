<template>
    <div>
        <menu-component></menu-component>
        <main class="panel-cotizacion">
            <h2 class="tittle">Cotiza tu vehículo</h2>
            <input v-model="cotizacion.cedula" class="text-field" placeholder="Digite su Cedula" type="text">
            <input v-model="cotizacion.nombre" class="text-field" placeholder="Digite su Nombre" type="text">
            <input v-model="cotizacion.telefono" class="text-field" placeholder="Digite Teléfono" type="text">
            <input v-model="cotizacion.correo" class="text-field" placeholder="Digite Correo" type="text">
            <select v-model="cotizacion.vehiculo" class="text-field" name="" id="">
                <option value="0">Seleccione un vehículo</option>
                <option v-for="veh in vehiculos" :key="veh.id" :value="veh.id">{{ veh.referencia }}</option>
                <!-- <option value="2">Toyota 4Runner</option>
            <option value="3">Toyota Sahara</option> -->
            </select>
            <select v-model="cotizacion.plazo" class="text-field" name="" id="">
                <option value="0">Seleccione un plazo</option>
                <option v-for="p in plazos" :key="p.id" :value="p.id">{{ p.plazo }}</option>
                <!-- <option value="2">36 meses</option>
            <option value="3">48 meses</option>
            <option value="4">72 meses</option> -->
            </select>

            <button @click="cotizar" class="btn-cotizar">Cotizar</button>

            <div v-show="error" class="error-msj">
                {{ mensaje }}
            </div>

            <div v-show="mostrarCotizacion" class="cotizacion-msj">
                {{ mensajeCotizacion }}
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: "CotizaView",
    data() {
        return {
            cotizacion: {
                cedula: "",
                nombre: "",
                correo: "",
                telefono: "",
                plazo: 0,
                vehiculo: 0
            },

            error: false,
            mostrarCotizacion: false,

            mensaje: "ESTE ES UN MENSAJE DE ERROR",
            mensajeCotizacion: "",

            plazos: [
                { id: 24, plazo: "24 meses" },
                { id: 36, plazo: "36 meses" },
                { id: 48, plazo: "48 meses" },
                { id: 72, plazo: "72 meses" },
            ],

            vehiculos: [
                { id: 1, referencia: "Toyota Corolla", precio: 120000000 },
                { id: 2, referencia: "Toyota 4Runner", precio: 350000000 },
                { id: 3, referencia: "Toyota Sahara", precio: 400000000 },
                { id: 4, referencia: "Toyota Fortuner", precio: 280000000 },
            ],
        }
    },

    methods: {

        fmonedaCOL(valor) {
            return new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            }).format(valor);
        },

        cotizar: function () {
            if (this.cotizacion.cedula === "") {
                this.mensaje = "POR FAVOR DIGITE UNA CEDULA";
                this.error = true;
                return;
            }
            if (this.cotizacion.nombre === "") {
                this.mensaje = "POR FAVOR DIGITE UN NOMBRE";
                this.error = true;
                return;
            }
            if (this.cotizacion.telefono === "") {
                this.mensaje = "POR FAVOR DIGITE UN TELEFONO";
                this.error = true;
                return;
            }
            if (this.cotizacion.correo === "") {
                this.mensaje = "POR FAVOR DIGITE UN CORREO";
                this.error = true;
                return;
            }
            if (this.cotizacion.vehiculo === 0) {
                this.mensaje = "POR FAVOR SELECCIONE UN VEHICULO";
                this.error = true;
                return;
            }
            if (this.cotizacion.plazo === 0) {
                this.mensaje = "POR FAVOR SELECCIONE UN PLAZO";
                this.error = true;
                return;
            }

            let valor = this.vehiculos.filter(veh => veh.id === this.cotizacion.vehiculo);
            this.mensajeCotizacion = "TOTAL A PAGAR: " + this.fmonedaCOL(valor[0].precio / this.cotizacion.plazo);
            this.mostrarCotizacion = true;
            this.error = false;


            console.log(this.cotizacion);
        }
    }
}
</script>

<style scoped>
.panel-cotizacion {
    border: solid rgb(126, 122, 122) 1px;
    padding: 1rem;
    width: 40%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    gap: 10px;
}

.text-field {
    height: 2rem;
    font-size: 20px;
    width: 100%;
}

.btn-cotizar {
    height: 2rem;
    background-color: rgb(0, 0, 0);
    color: aliceblue;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
}


.tittle {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgb(80, 77, 77);
}

.error-msj {
    border: solid 2px red;
    color: red;
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cotizacion-msj {
    border: solid 2px green;
    color: green;
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>