import Vue from "vue";
import App from "./App.vue";
import createStore from "./store";
import createRouter from "./router";

Vue.config.productionTip = false;

export default () => {
  const store = createStore();
  const router = createRouter();
  return new Vue({
    store,
    router,
    render: h => h(App)
  });
};
