<template>
    <div>
        <menu-component></menu-component>
        <section id="section-curso" class="section-banner">
            <img class="banner" :src="require(`@/assets/${cursoRecieve.imageCourse}`)" :alt="cursoRecieve.nombre">
            <div class="fondo">
                <h1 class="curso-name">{{ cursoRecieve.nombre }}</h1>
            </div>
        </section>

        <section class="info-panel">
            <h1 id="nombre-info" class="curso-name-panel">{{ cursoRecieve.nombre }}</h1>

            <p id="descripcion-info" class="open-sans-card"> {{ cursoRecieve.descripcion }}</p>

            <article id="details-course" class="details-course open-sans-card">
                <div class="item-course">Duración:{{ cursoRecieve.duracion }}</div>
                <div class="item-course">Jornada: {{ cursoRecieve.jornada }}</div>
                <div class="item-course">Valor: {{ cursoRecieve.valor }}</div>
            </article>

            <p id="beneficios-info" class="open-sans-card">
                {{ cursoRecieve.beneficios }}
            </p>

            <h2 class="curso-name-panel">Las habilidades que desarrollarás...</h2>

            <section id="content-learn" class="content-learn open-sans-card">
                <div v-for="habilidad in cursoRecieve.habilidades" :key="habilidad" class="item-learn">{{ habilidad }}</div>
                <!-- <div class="item-learn">Instalación de Software</div>
                <div class="item-learn">Reparación de Hardware</div>
                <div class="item-learn">Cambio de Pantallas</div>
                <div class="item-learn">Manejo de Herramientas Técnicas</div>
                <div class="item-learn">Atención al Cliente</div> -->
            </section>


            <h2 class="curso-name-panel">lo que aprenderás...</h2>

            <section id="content-plan" class="content-plan open-sans-card">
                <div v-for="plan in cursoRecieve.planEstudios" :key="plan" class="item-plan">{{ plan }}</div>
                <!-- <div class="item-plan">Instalación de Software</div>
                <div class="item-plan">Reparación de Hardware</div>
                <div class="item-plan">Cambio de Pantallas</div>
                <div class="item-plan">Manejo de Herramientas Técnicas</div>
                <div class="item-plan">Atención al Cliente</div> -->
            </section>

        </section>
    </div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue';
export default {
    components: { MenuComponent },
    data() {
        return {
            cursoRecieve: null,
            courses: [

                {
                    id: 1,
                    imageCourse: "repair-phone.jpg",
                    nombre: "TECNICO EN REPARACIÓN DE MÓVILES",
                    duracion: "3 semestres",
                    jornada: "Nocturna",
                    detalle: "Este curso contiene....",
                    valor: "$220.000 MENSUAL",
                    descripcion: "Aprende a diagnosticar, reparar y dar mantenimiento a dispositivos móviles, abordando tanto fallas de hardware como de software en diferentes marcas y modelos.",
                    beneficios: "Obtendrás conocimientos prácticos en reparación de equipos móviles, acceso a herramientas especializadas, y habilidades para emprender tu propio negocio o trabajar en centros de servicio técnico.",
                    habilidades: ["Diagnóstico de Fallas", "Reparación de Hardware", "Instalación de Software", "Cambio de Pantallas", "Manejo de Herramientas Técnicas", "Atención al Cliente"],
                    planEstudios: ["Electrónica Básica", "Diagnóstico de Equipos", "Reparación de Smartphones", "Sistemas Operativos Móviles", "Micro soldadura", "Mantenimiento Preventivo y Correctivo"]
                },
                {
                    id: 2,
                    imageCourse: "barbero.png",
                    nombre: "TECNICO BARBERÍA",
                    duracion: "3 semestres",
                    jornada: "Diurna",
                    valor: "$210.000 MENSUAL",
                    descripcion: "Fórmate como barbero profesional dominando técnicas modernas y clásicas de corte, afeitado y cuidado de la barba.",
                    beneficios: "Desarrollarás habilidades prácticas con herramientas profesionales, tendencias actuales y la posibilidad de trabajar de manera independiente o en barberías reconocidas.",
                    habilidades: ["Corte de Cabello", "Diseño de Barba", "Afeitado Clásico", "Uso de Máquinas y Tijeras", "Atención al Cliente", "Estilismo Masculino"],
                    planEstudios: ["Técnicas de Corte", "Diseño de Barba", "Higiene y Bioseguridad", "Tendencias de Barbería", "Colorimetría Básica", "Atención al Cliente"]
                },
                {
                    id: 3,
                    imageCourse: "belleza.jpg",
                    nombre: "TECNICO EN BELLEZA Y SPA",
                    duracion: "2 semestres",
                    jornada: "Diurna",
                    valor: "$250.000 MENSUAL",
                    descripcion: "Capacítate en tratamientos estéticos, cuidado de la piel y técnicas de spa para brindar bienestar y belleza integral.",
                    beneficios: "Aprenderás técnicas modernas de estética, acceso a prácticas reales y oportunidades laborales en spas, centros de estética o emprendimientos propios.",
                    habilidades: ["Tratamientos Faciales", "Masajes Corporales", "Depilación", "Cuidado de la Piel", "Atención al Cliente", "Relajación y Bienestar"],
                    planEstudios: ["Cosmetología", "Masoterapia", "Estética Facial", "Estética Corporal", "Bioseguridad", "Atención al Cliente"]
                },
                {
                    id: 4,
                    imageCourse: "desarrollo-de-software.jpg",
                    nombre: "TECNICO EN DESARROLLO DE SOFTWARE",
                    duracion: "3 semestres",
                    jornada: "Diurna",
                    valor: "$270.000 MENSUAL",
                    descripcion: "Aprende a desarrollar aplicaciones web y de escritorio utilizando tecnologías modernas y buenas prácticas de programación.",
                    beneficios: "Obtendrás habilidades altamente demandadas en el mercado laboral, posibilidad de trabajar de forma remota y crear tus propios proyectos tecnológicos.",
                    habilidades: ["Programación", "Desarrollo Web", "Bases de Datos", "Resolución de Problemas", "Trabajo en Equipo", "Control de Versiones"],
                    planEstudios: ["Lógica de Programación", "HTML, CSS y JavaScript", "Bases de Datos", "Backend", "Frameworks", "Despliegue de Aplicaciones"]
                },
                {
                    id: 5,
                    imageCourse: "cocina.jpg",
                    nombre: "TECNICO EN COCINA INTERNACIONAL",
                    duracion: "3 semestres",
                    jornada: "Nocturna",
                    valor: "$310.000 MENSUAL",
                    descripcion: "Conviértete en un profesional de la gastronomía dominando recetas y técnicas culinarias de diferentes culturas del mundo.",
                    beneficios: "Aprenderás cocina práctica, manejo de alimentos, presentación de platos y podrás trabajar en restaurantes o emprender tu propio negocio gastronómico.",
                    habilidades: ["Preparación de Alimentos", "Cocina Internacional", "Manipulación de Alimentos", "Creatividad Culinaria", "Trabajo en Cocina", "Presentación de Platos"],
                    planEstudios: ["Cocina Básica", "Cocina Internacional", "Panadería y Repostería", "Manipulación de Alimentos", "Costos y Presupuestos", "Presentación de Platos"]
                },
                {
                    id: 6,
                    imageCourse: "marketing.png",
                    nombre: "TECNICO EN MARKETING Y REDES SOCIALES",
                    duracion: "3 semestres",
                    jornada: "Diurna",
                    valor: "$190.000 MENSUAL",
                    descripcion: "Aprende a crear estrategias de marketing digital, gestionar redes sociales y posicionar marcas en entornos digitales.",
                    beneficios: "Desarrollarás habilidades en publicidad digital, creación de contenido y análisis de métricas para impulsar negocios o proyectos personales.",
                    habilidades: ["Gestión de Redes Sociales", "Publicidad Digital", "Creación de Contenido", "Análisis de Métricas", "SEO Básico", "Community Management"],
                    planEstudios: ["Fundamentos de Marketing", "Redes Sociales", "Publicidad Digital", "Diseño de Contenido", "Analítica Web", "Estrategias de Marketing"]
                },
                {
                    id: 7,
                    imageCourse: "auxiliar-administrativo.jpg",
                    nombre: "TECNICO EN ASISTENTE ADMINSTRATIVO",
                    duracion: "3 semestres",
                    jornada: "Diurna",
                    valor: "$220.000 MENSUAL",
                    descripcion: "Prepárate para apoyar procesos administrativos, manejo de documentación y atención al cliente en entornos empresariales.",
                    beneficios: "Obtendrás habilidades organizativas, manejo de herramientas ofimáticas y oportunidades laborales en diferentes sectores empresariales.",
                    habilidades: ["Gestión Documental", "Atención al Cliente", "Manejo de Office", "Organización", "Comunicación", "Archivo y Correspondencia"],
                    planEstudios: ["Ofimática", "Gestión Documental", "Contabilidad Básica", "Atención al Cliente", "Administración", "Archivo Empresarial"]
                },
                {
                    id: 8,
                    imageCourse: "farmacia.jpg",
                    nombre: "TECNICO EN FARMACIA",
                    duracion: "3 semestres",
                    jornada: "Diurna",
                    valor: "$240.000 MENSUAL",
                    descripcion: "Con este curso en farmacia obtendrás una formación completa, especializada y práctica que te permitirá hacerle frente a los desafíos del sector de la salud enfocado a la venta de medicamentos y generar un impacto positivo en la calidad de la atención y la gestión de los procesos farmacéuticos",
                    beneficios: "El programa de técnico en farmacia cuenta con un conjunto de contenidos conceptuales y metodológicos de carácter interdisciplinar. Este programa te permitirá fortalecer tu visión en la formulación de medicamentos, conocimientos del uso de los medicamentos para cada patología, desarrollar habilidades de negociación para la venta de medicamentos y gestionar organizaciones del sector farmacéutico",
                    habilidades: ["Atención al Cliente", "Dispensación de Medicamentos", "Manejo de Inventarios", "Asesoramiento Farmacéutico", "Etiquetado y Envasado", "Registro y Documentación"],
                    planEstudios: ["Logística Farmacéutica", "Principios de Farmacología", "Bioseguridad y Técnicas Asépticas", "Gestión de Farmacias", "Dispensación de Medicamentos", "Administración de Medicamentos e Inmunobiológicos", "Farmacología y Toxicología de los Medicamentos", "Seguridad del Paciente"]
                },
                {
                    id: 9,
                    imageCourse: "electricidad.jpg",
                    nombre: "TECNICO EN ELECTRICIDAD",
                    duracion: "3 semestres",
                    jornada: "Diurna",
                    valor: "$260.000 MENSUAL",
                    descripcion: "Con este curso en técnico en electricidad obtendrás una formación completa, especializada y práctica que te permitirá hacerle frente a los desafíos del sector eléctrico e industrial, desarrollando competencias clave en instalación, mantenimiento y automatización, generando un impacto positivo en la seguridad, eficiencia energética y calidad de los proyectos eléctricos.",

                    beneficios: "El programa de técnico en electricidad cuenta con un conjunto de contenidos conceptuales y metodológicos de carácter interdisciplinar. Este programa te permitirá fortalecer tu visión en el diseño e interpretación de planos eléctricos, conocimientos de normatividad vigente y seguridad industrial, desarrollar habilidades de diagnóstico y solución de fallas, y gestionar proyectos de instalación y mantenimiento eléctrico en entornos residenciales, comerciales e industriales.",

                    habilidades: [
                        "Interpretación de Planos Eléctricos",
                        "Instalaciones Eléctricas Residenciales y Comerciales",
                        "Diagnóstico y Reparación de Fallas",
                        "Manejo de Normatividad y Seguridad",
                        "Automatización y Control Industrial",
                        "Eficiencia Energética",
                        "Gestión de Proyectos Eléctricos"
                    ],

                    planEstudios: [
                        "Fundamentos de Electricidad y Mediciones",
                        "Interpretación de Diagramas y Planos Eléctricos",
                        "Instalaciones Eléctricas Residenciales",
                        "Instalaciones Eléctricas Comerciales e Industriales",
                        "Normatividad Eléctrica y Seguridad Industrial",
                        "Motores y Control Industrial",
                        "Automatización y Sistemas de Control",
                        "Mantenimiento Preventivo y Correctivo"
                    ]
                },
            ],
        };


    },


    created() {
        let idQuery = this.$route.params.id;
        this.cursoRecieve = this.courses.find(curso => curso.id == idQuery);
        console.log("CURSO RECIBIDO");
        console.log(this.cursoRecieve.imageCourse);
    }
}
</script>

<style scope>
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

.fondo {
    background-color: #910000;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
}

.curso-name {
    border: solid #FFF 2px;
    padding: 1rem;
    font-family: "Red Hat Display", sans-serif;
    border-radius: 10px;
}

.info-panel {
    width: 80%;
    margin: 1rem auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.curso-name-panel {
    font-family: "Red Hat Display", sans-serif;
}

.open-sans-card {
    font-family: "Red Hat Display", sans-serif;
    color: #000;
}


.details-course{
    display: flex;
    justify-content: center;
    width: 100%;

    gap: 4rem;
    font-size: 1.2rem;
}

.item-course{
    height: 100px;
    width: 20%;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: #ED3237;
    color: aliceblue;
}

.curso-name-panel{
    font-family: "Red Hat Display", sans-serif;
}


.content-learn{

    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    height: fit-content;
}

.item-learn{
    background-color: #000;
    color: aliceblue;
    padding: 1rem;
    border-radius: 10px;
}

.content-plan{
    display: flex;
    flex-direction: column;
    gap: 2px;
    height: fit-content;
}

.item-plan{
    background-color: #000;
    color: aliceblue;
    padding: 1rem;
}
</style>
