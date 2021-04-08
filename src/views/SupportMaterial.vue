<template>
    <div>
        <div class="route light-background pt-3 border-top border-bottom">
            <print-route current-route="Añadir material de apoyo" :routes="route"/>
        </div>
        <div class="support-material-zone border-top pt-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-11">
                        <div class="card material-card rounded-0">
                            <div class="material-card-title light-background border-bottom text-center py-2">
                                <h2 class="h5 mx-0">Material de apoyo</h2>
                            </div>
                            <div class="card-body px-5">
                                <form @submit.prevent="SendForm()">
                                    <div class="text-center form-group row">
                                        <div class="col-md-6">
                                            <label for="material-label product">Producto*</label>
                                            <select class="material-select" name="product" id="product" required>
                                                <option value="0">Selecciona el producto</option>
                                                <option value="1">Producto 1</option>
                                                <option value="2">Producto 2</option>
                                                <option value="3">Producto 3</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="material-label module">Módulo*</label>
                                            <select class="material-select" name="module" id="module" required>
                                                <option value="0">Selecciona el módulo</option>
                                                <option value="1">Módulo 1</option>
                                                <option value="2">Módulo 2</option>
                                                <option value="3">Módulo 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="text-center form-group row">
                                        <div class="col-md-6">
                                            <label for="material-label categorie">Categoría*</label>
                                            <select class="material-select" name="categorie" id="categorie" required>
                                                <option value="0">Selecciona la categoría</option>
                                                <option value="1">Categoría 1</option>
                                                <option value="2">Categoría 2</option>
                                                <option value="3">Categoría 3</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="material-label around">Entorno*</label>
                                            <select class="material-select" name="around" id="around" required>
                                                <option value="0">Selecciona el entorno</option>
                                                <option value="1">Entorno 1</option>
                                                <option value="2">Entorno 2</option>
                                                <option value="3">Entorno 3</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="question">Pregunta*</label>
                                        <input type="text" name="question" id="question" class="form-control" placeholder="Ingresa la pregunta" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="response">Respuesta*</label>
                                        <froala :tag="'textarea'"/>
                                    </div>

                                    <div class="form-group">
                                        <div class="row justify-content-center">
                                            <div class="col-md-5">
                                                <div class="d-flex justify-content-around">
                                                    <button class="add-button btn add-button">Añadir</button>
                                                    <button class="cancel-button btn">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrintRoute from '../components/PrintRoute.vue'

export default {
    components: { PrintRoute},
    name: 'SupportMaterial',
    data() {
        return {
            route: [
                {id: 1, title: 'Vista principal', to: '/'}
            ]
        }
    },
    methods: {
        SendForm() {
            this.$fire({
                title: 'Pregunta creada',
                type: 'success',
                timer: 5000
            })
        }
    }
}
</script>

<style>
    .material-card {
        min-height: 300px;
    }
    .material-select {
        display: inline-block;
        width: 60%;
        margin-left: 20px;
        height: calc(1.5em + 0.75rem + 2px);
        padding: 0.375rem 1.75rem 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        vertical-align: middle;
        background: #fff;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .material-select:focus {
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
    .cancel-button {
        color: #fff !important;
        background-color: #FF5252 !important;
        border-color: #FF5252 !important;
    }
    .add-button {
        color: #fff !important;
        background-color: #4CAF50 !important;
        border-color: #4CAF50 !important;
    }
    .add-button:hover, .cancel-button:hover {
        box-shadow: 4px 4px 4px #d1d1d1;
    }
</style>