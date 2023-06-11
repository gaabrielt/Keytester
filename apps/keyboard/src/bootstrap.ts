import Vue from "vue";

import App from "./components/App.vue";

const MODE = process.env.MODE;

console.log(MODE);

const mount = () => {
  const KeyboardApp = new Vue({
    render: (hs) => hs(App),
  });

  KeyboardApp.$mount("#keyboard");
};

if (MODE === "VUE") mount();

export { mount };
