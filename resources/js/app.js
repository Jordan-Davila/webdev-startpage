import Vue from "vue";
import App from "./App.vue";
window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

Vue.prototype.$page = JSON.parse(window.data);

new Vue({
    el: "#app",
    render: (h) => h(App),
});
