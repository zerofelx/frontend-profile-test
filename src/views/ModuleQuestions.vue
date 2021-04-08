<template>
    <div>
        <div class="route light-background pt-3 border-top border-bottom">
            <print-route current-route="Preguntas módulos" :routes="route"/>
        </div>
        <div class="module-questions-zone border-top pt-3 container">
            <div class="card rounded-0">
                <div class="container light-background">
                    <div class="row py-2">
                        <div class="col-md-4 text-center">
                            <form @submit.prevent>
                                <div class="d-flex">
                                    <input type="search" name="buscar" id="search" placeholder="Buscar" class="form-control mr-1">
                                    <input type="submit" id="filter" value="Filtrar" class="form-control">
                                </div>
                            </form>
                        </div>
                        <div class="col-md-8 text-center">
                            <form @submit.prevent>
                                <input type="submit" value="Exportar" id="export" class="btn px-5">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="container border-top py-2">
                    <form @submit.prevent>
                        <input type="submit" value="Añadir Filtro" id="add_filter" class="btn px-5">
                    </form>
                </div>
                <div class="card-body container border-top">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <th scope="col">ID</th>
                            <th scope="col">Fecha de creación</th>
                            <th scope="col">Módulo</th>
                            <th scope="col">Categoría</th>
                            <th scope="col">Pregunta</th>
                            <th scope="col">Respuesta</th>
                            <th scope="col">Acciones</th>
                        </thead>
                        <tbody>
                            <tr v-for="question in questions" v-bind:key="question.ID">
                                <td scope='row'>{{ question.ID }}</td>
                                <td>{{ question.date }}</td>
                                <td>{{ question.module }}</td>
                                <td>{{ question.category }}</td>
                                <td>{{ question.question }}</td>
                                <td>{{ question.short_answer }}</td>
                                <td>
                                    <b-icon-eye-fill @click="WatchQuestion(question.ID)" class="mx-1 table-icons"/>
                                    <b-icon-pencil-fill class="mx-1 table-icons"/>
                                    <b-icon-x @click="deleteQuestion()" class="mx-1 table-icons"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="container light-background border-top">
                    <div class="row text-center py-2">
                        <div class="col-md-2">
                            <form @submit.prevent>
                                <div class="d-flex align-items-center">
                                    <label for="view">Ver: </label>
                                    <input name="view" type="number" id="view" class="form-control">
                                </div>
                            </form>
                        </div>
                        <div class="col-md-10">
                            <span class="btn-anterior search-buttons"><b-icon-arrow-left/> Anterior</span>
                            <span class="btn-1 search-buttons">1 </span>
                            <span class="btn-2 search-buttons">2 </span>
                            <span class="btn-3 search-buttons">3 </span>
                            <span class="btn-4 search-buttons">4 </span>
                            <span class="btn-5 search-buttons">5 </span>
                            <span class="btn-6 search-buttons">6 </span>
                            <span class="btn-7 search-buttons">7 </span>
                            <span class="btn-8 search-buttons">8 </span>
                            <span class="btn-9 search-buttons">9 </span>
                            <span class="btn-10 search-buttons">10 </span>
                            <span class="btn-siguiente search-buttons">Siguiente <b-icon-arrow-right/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrintRoute from '../components/PrintRoute'

export default {
    components: { PrintRoute },
    name: 'ModuleQuestions',
    data() {
        return {
            route: [{id: 1, title: 'Vista principal', to: '/'}, {id: 2, title: 'Seif', to: '/'}],
            questions: []
        }
    },
    methods: {
        deleteQuestion() {
            this.$fire({
                title: '¿Estás seguro de inhabilitar la pregunta?',
                type: 'question',
                showDenyButton: true,
                showCancelButton: true
            }).then((result) => {
                if(result.value === true) {
                    this.$fire({title: 'Hecho!', type: 'success', timer: 5000})
                }
            })
        },
        WatchQuestion(ID) {
            this.$fire({
                title: this.questions[ID].question,
                text: this.questions[ID].answer
            })
        }
    },
    created() {
        this.questions.push({
                    ID: 1,
                    date: '03/03/2021 04:14pm',
                    module: 'Configuración',
                    category: 'Login',
                    question: 'Como valido mi código de conexión',
                    short_answer: 'Lorem ipsum dolor sit amet, consetetur',
                    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est'
                },
                {
                    ID: 2,
                    date: '03/03/2021 04:14pm',
                    module: 'Configuración',
                    category: 'Login',
                    question: 'Como valido mi código de conexión',
                    short_answer: 'Lorem ipsum dolor sit amet, consetetur',
                    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est'
                },
                {
                    ID: 3,
                    date: '03/03/2021 04:14pm',
                    module: 'Configuración',
                    category: 'Login',
                    question: 'Como valido mi código de conexión',
                    short_answer: 'Lorem ipsum dolor sit amet, consetetur',
                    answer: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est'
                }
        )
    }
}
</script>

<style>
    .table-icons {
        font-size: 13px;
    }
    #search {
        width: 60%;
    }
    #filter {
        width: 30%;
        color: white;
        background: #15ADC7;
    }
    #export {
        color: white;
        background: #15ADC7;
    }
    #add_filter {
        color: white;
        background: #15ADC7;
    }
    #view {
        width: 28%;
        margin-left: 5px;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
    .search-buttons {
        margin: 0 5px;
    }
    .search-buttons:hover {
        cursor: pointer;
    }
</style>
