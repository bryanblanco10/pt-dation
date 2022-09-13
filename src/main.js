import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import RepositoryProvider from "@/providers/RepositoryProvider";
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
  router,
  provide: RepositoryProvider,
  store,
  render: h => h(App)
}).$mount('#app')
