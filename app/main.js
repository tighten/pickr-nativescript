import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
Vue.use(VueDevtools);

import './styles.scss';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

/* API */
import Api from './store/api';
let api = new Api({ baseURL: 'http://127.0.0.1:8000/api' });
Vue.prototype.$api = api;

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
