import Vue from 'vue';
import Vuex from 'vuex';
import {fetchItem} from './api';

Vue.use(Vuex);

export default function createStore() {
    return new Vuex.Store({
        state: {
            item: {}
        },
        actions: {
            fetchItem({ commit }, id) {
                return fetchItem(id).then(item => {
                    commit('setItem', item);
                });
            }
        },
        mutations: {
            setItem(state, item) {
                state.item = item;
            }
        }
    })
}