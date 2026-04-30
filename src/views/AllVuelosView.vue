<template>
    <div>
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
        </DataTable>
    </div>
</template>

<script>
export default {
    name: "AllVuelosView",
    data() {
        return {
            onLoading: false,
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
        }
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
    },

    created() {
        this.getVuelos();
    }
}
</script>

<style></style>