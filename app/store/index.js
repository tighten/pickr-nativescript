import Vue from 'nativescript-vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import api from '../api';

const state = {
    errors: [],
    categories: [],
    selected_category_id: null,
}

const getters = {
    selected_category(state) {
        return state.categories.find(
            category => category.id === state.selected_category_id
        )
    }
}

const mutations= {
    setSelectedCategory(state, id) {
        state.selected_category_id = id;
    },
    setCategories(state, categories) {
        state.categories = categories;
    },
    addCategory(state, payload) {
        state.categories.push(Object.assign(payload, { items: [] }));
        state.selected_category_id = payload.id;
    },
    deleteCategory(state, id) {
        let index = state.categories.findIndex(category => category.id === id);

        if (index > -1) {
            state.categories.splice(index, 1);
            state.selected_category_id = null;
        }
    },
    setCategory(state, payload) {
        let category = state.categories.find(
            category => category.id === payload.id
        );

        if (category) {
            Object.assign(category, payload);
        }
    },
    addItem(state, payload) {
        let category = state.categories.find(
            category => category.id === state.selected_category_id
        );

        if (category) {
            category.items.push(payload)
        }
    },
    clearErrors(state) {
        state.errors = {};
    },
    setErrors(state, errors) {
        state.errors = errors;
    },
}

const actions = {
    fetchCategories({commit}) {
        api.get('api/categories')
            .then(response => {
                commit('setCategories', response.data);
            }).catch(error => {
                console.log('Category fetch ERROR', error);
            });
    },
    createCategory({state, commit}, payload) {
        api.post('api/categories', payload)
            .then(response => {
                commit('addCategory', response.data);
            }).catch(error => {
                console.log('Category create ERROR', error);
            });
    },
    deleteCategory({state, commit}, id) {
        api.delete('api/categories/' + id)
            .then(response => {
                commit('deleteCategory', id);
            }).catch(error => {
                console.log('Category delete ERROR', error.response.data);
            });
    },
    updateSelectedCategory({state, commit}, payload) {
        api.put('api/categories/' + state.selected_category_id, { name: payload.name })
            .then(response => {
                commit('setCategory', response.data);
            }).catch(error => {
                console.log('Category update ERROR', error);
            });
    },
    createItem({state, commit}, payload) {
        api.post('api/categories/' + state.selected_category_id + '/items', payload)
            .then(response => {
                commit('addItem', response.data);
            }).catch(error => {
                console.log('Item create ERROR', error);
            });
    },
}

const store = new Vuex.Store({ state, getters, mutations, actions });

export default store;
