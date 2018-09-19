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

/* Store */
import Store from './store/store';
let store = new Store({
    categories: [],
}, api);
Vue.prototype.$store = store;
store.fetch('categories');

import Home from './components/Home';

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
