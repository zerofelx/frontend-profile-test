import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home'
import ErrorPage from './views/ErrorPage'
import SupportMaterial from './views/SupportMaterial'
import ModuleQuestions from './views/ModuleQuestions'

Vue.use(Router)

export default new Router({
    mode: 'abstract',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Frontend Test'
            }
        },
        {
            path: '/support-material',
            name: 'support-material',
            component: SupportMaterial,
            meta: {
                title: 'Support Material'
            }
        },
        {
            path: '/module-questions',
            name: 'module-questions',
            component: ModuleQuestions,
            meta: {
                title: 'Module Questions'
            }
        },
        {
            path: '/*',
            name: 'error-page',
            component: ErrorPage,
            meta: {
                title: 'Page not found'
            }
        }
    ]
})
