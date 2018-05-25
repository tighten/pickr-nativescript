import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/home';
import CategoryIndex from '../components/category-index';
import CategoryPick from '../components/category-pick';

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
            path: '/categories/:category_id/pick',
            component: CategoryPick,
        },
        {
            path: '*', redirect: '/home'
        },
    ],
});

router.replace('/categories');

module.exports = router;
