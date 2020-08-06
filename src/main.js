import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;

// import "map-lib-test/lib/style/index.css";
import { testA, testB } from 'map-lib-test';
Vue.use(testA);
Vue.use(testB);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
