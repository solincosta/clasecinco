<template>
    <div>
        <button @click="cerrarSesion()">Cerrar sesion</button>
        <DataTable v-show="onLoading" :value="skeleton" tableStyle="min-width: 50rem">
            <ColumnTable field="id" header="ORIGEN">
                <template #body>
                    <SkeletonComponent />
                </template>

            </ColumnTable>
            <ColumnTable field="nombre" header="DESTINO">
                <template #body>
                    <SkeletonComponent />
                </template>
            </ColumnTable>
            <ColumnTable field="documento" header="FECHA RESERVA">
                <template #body>
                    <SkeletonComponent />
                </template>
            </ColumnTable>
            <ColumnTable field="matriculado" header="HORA LLEGADA">
                <template #body>
                    <SkeletonComponent />
                </template>
            </ColumnTable>
            <ColumnTable field="matriculado" header="HORA SALIDA">
                <template #body>
                    <SkeletonComponent />
                </template>
            </ColumnTable>
            <ColumnTable field="matriculado" header="TARIFA">
                <template #body>
                    <SkeletonComponent />
                </template>
            </ColumnTable>
        </DataTable>

        <DataTable v-show="!onLoading" :value="vuelos" tableStyle="min-width: 50rem">
            <ColumnTable field="ciudad_origen" header="ORIGEN"></ColumnTable>
            <ColumnTable field="ciudad_destino" header="DESTINO"></ColumnTable>
            <ColumnTable field="fecha" header="FECHA RESERVA"></ColumnTable>
            <ColumnTable field="hora_salida" header="HORA SALIDA"></ColumnTable>
            <ColumnTable field="hora_llegada" header="HORA LLEGADA"></ColumnTable>
            <ColumnTable field="tarifa" header="TARIFA"></ColumnTable>
            <ColumnTable field="id" header="ID">
                <template #body="slotProps">
                    <div v-show="!onLoading">
                        <button @click="reservar(slotProps.data.id)">RESERVAR</button>
                    </div>
                </template>
            </ColumnTable>
        </DataTable>
    </div>
</template>

<script>
export default {
    name: "ReservarView",
    data() {
        return {
            onLoading: false,
            token: "",
            documentoUsuario: "",
            vuelos: [],
            skeleton: [
                {
                    "ORIGEN": "",
                    "DESTINO": " ",
                    "FECHA RESERVA": "",
                    "HORA SALIDA": "",
                    "HORA LLEGADA": "",
                    "TARIFA": ""
                },
                {
                    "ORIGEN": "",
                    "DESTINO": " ",
                    "FECHA RESERVA": "",
                    "HORA SALIDA": "",
                    "HORA LLEGADA": "",
                    "TARIFA": ""
                },
                {
                    "ORIGEN": "",
                    "DESTINO": " ",
                    "FECHA RESERVA": "",
                    "HORA SALIDA": "",
                    "HORA LLEGADA": "",
                    "TARIFA": ""
                },
                {
                    "ORIGEN": "",
                    "DESTINO": " ",
                    "FECHA RESERVA": "",
                    "HORA SALIDA": "",
                    "HORA LLEGADA": "",
                    "TARIFA": ""
                },

            ],
        };
    },
    methods: {
        getVuelos: async function () {
            this.onLoading = true;
            await this.axios.get('http://192.168.1.245/vuelos/apivuelos.php?endpoint=vuelos')
                .then(response => {
                    this.vuelos = response.data.data;
                    console.log(this.vuelos);
                })
                .catch(error => console.log(error)
                )
                .finally(() => {
                    this.onLoading = false;
                });
        },

        async reservar(id) {
            this.token = localStorage.getItem("token");
            this.documentoUsuario = localStorage.getItem("documento");

            if (!this.token || !this.documentoUsuario) {
                alert('Debes iniciar sesión para reservar un vuelo.');
                return;
            }

            try {
                const response = await this.axios.post('http://192.168.1.245/vuelos/apivuelos.php?endpoint=reservar',
                    {
                        documento: this.documentoUsuario,
                        vuelo_id: id
                    },
                    {
                        headers: {
                            //Aquí se envía el token
                            'Authorization': `Bearer ${this.token}`,
                            'Content-Type': 'application/json'
                        }
                    }
                );
                if (response.data.status === 'success') {
                    alert('¡Reserva realizada con éxito!');
                }
            } catch (error) {
                console.error('Error al reservar:', error.response?.data?.message || error);
                alert(error.response?.data?.message || 'Error al procesar la reserva');
            }
        },

        cerrarSesion: function (){
            localStorage.removeItem("token");
            localStorage.removeItem("documento");
            this.$router.push({ name: 'login' });
        }

      
    },
    created() {

        this.getVuelos();

        if (localStorage.getItem("token") == null && localStorage.getItem("documento") == null) {
            this.$router.push({ name: 'login' })
        }


    }
}
</script>

<style></style>