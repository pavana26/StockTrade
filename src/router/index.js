import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routes from './routes'


Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root="https://vuejs-stock-trader-e3fd1.firebaseio.com/";

Vue.filter('currency',(value)=>{

  return '$' + value.toLocaleString();
});

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
   // mode :history,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}




