import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

import './styles.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

/* API */
import api from './api';

/* Vuex */
import store from './store';

import Home from './components/Home';

new Vue({
    store,
    render: h => h('frame', [h(Home)]),
    created() {
        store.dispatch('fetchCategories');
    },
}).$start();
