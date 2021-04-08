<template>
    <div id="Home">
        <div class="material-button-zone light-background border-top border-bottom py-3 text-center">
            <router-link to='/support-material'>
                <button class="seif-button btn px-5 py-2">Añadir material de apoyo</button>
            </router-link>
        </div>
        <div class="products-text-zone border-top border-bottom py-3 text-center">
            <h2 class="h5">Nuestros productos</h2>
        </div>
        <div class="products-zone border-top pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <b-icon-shop class="card-icon mb-3"/>
                                <h3 class="card-title">Seif</h3>
                                <router-link to='/module-questions'>
                                    <button class="btn seif-button px-4 rounded-pill">Ver</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <b-icon-box class="card-icon mb-3"/>
                                <h3 class="card-title">Seif módulos</h3>
                                <button class="btn seif-button px-4 rounded-pill">Ver</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <b-icon-gear-wide-connected class="card-icon mb-3"/>
                                <h3 class="card-title">Controller</h3>
                                <button class="btn seif-button px-4 rounded-pill">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container pt-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <b-icon-people-fill class="card-icon mb-3"/>
                                <h3 class="card-title">Visitantes robusto</h3>
                                <button class="btn seif-button px-4 rounded-pill">Ver</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <b-icon-headphones class="card-icon mb-3"/>
                                <h3 class="card-title">PTT</h3>
                                <button class="btn seif-button px-4 rounded-pill">Ver</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body text-center">
                                <b-icon-bag-plus class="card-icon mb-3"/>
                                <h3 class="card-title">Controlpharm</h3>
                                <button class="btn seif-button px-4 rounded-pill">Ver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.seif-button {
    color: #fff;
    background-color: #15ADC7;
    border-color: #15ADC7;
}
.seif-button:focus {
    color: #fff;
    background-color: #15bcda;
    border-color: #15bcda;
    box-shadow: 0 0 0 0.2rem rgb(38 143 255 / 50%);
}
.card-icon {
    font-size: 3.8em;
}
</style>
