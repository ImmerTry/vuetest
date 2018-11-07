import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './demo.vue';
// import Routers from '../vue-router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

// The routing configuration
// const RouterConfig = {
//     routes: Routers
// };
// const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    // router,
    render: h => h(App)
});