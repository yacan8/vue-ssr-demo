import Vue from 'vue';
import createApp from './createApp';

Vue.config.productionTip = false

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    app.$mount('#app', true);
});

