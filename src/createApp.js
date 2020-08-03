import Vue from 'vue';
import App from './App';
import createRouter from './createRouter';
import createStore from './createStore';

export default function createApp(context) {
    const router = createRouter();
    const store = createStore();
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    });
    return {
        router,
        store,
        app
    };
};