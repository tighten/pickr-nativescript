import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../components/home';
import CategoryCreate from '../components/category-create';
import CategoryEdit from '../components/category-edit';
import CategoryUpdate from '../components/category-update';
import CategoryIndex from '../components/category-index';
import CategoryPick from '../components/category-pick';
import ItemCreate from '../components/item-create';

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
            path: '/categories/:category_id/edit',
            component: CategoryEdit,
        },
        {
            path: '/categories/:category_id/update',
            component: CategoryUpdate,
        },
        {
            path: '/categories/:category_id/items-create',
            component: ItemCreate,
        },
        {
            path: '/categories/create',
            component: CategoryCreate,
        },
        {
            path: '*', redirect: '/home'
        },
    ],
});

router.replace('/home');

module.exports = router;
