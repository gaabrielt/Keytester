import Vue from "vue";

import App from "./components/App.vue";

const MODE = process.env.MODE

console.log(MODE);

const mount = () => {
  const KeyboardApp = new Vue({
    el: "#keyboard",
    template: "<App/>",
    components: { App },
  });

  KeyboardApp.$mount();
}

if (MODE === "VUE") mount()

export { mount }