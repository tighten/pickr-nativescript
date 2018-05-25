import Vue from 'nativescript-vue';
import router from './router';
import './styles.scss';
const axios = require('axios');

Vue.prototype.$_ = require('lodash');

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

// let categories = [
//     {
//         id: 1,
//         name: 'Category One',
//         description: 'Description 1'
//     },
//     {
//         id: 2,
//         name: 'Category Two',
//         description: 'Description 2'
//     },
//     {
//         id: 3,
//         name: 'Category Three',
//         description: 'Description 3'
//     },
// ];

// Vue.prototype.$categories = [];

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

new Vue({
    router,
}).$start();

