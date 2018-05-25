import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/home';
import CategoryIndex from '../components/category-index';

const router = new VueRouter({
    pageRouting: true,
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/categories',
            component: CategoryIndex,
        },
        {
            path: '*', redirect: '/home'
        },
    ],
});

router.replace('/categories');

module.exports = router;
