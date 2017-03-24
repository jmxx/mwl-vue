import Vue from 'vue';

import Home from './components/home/home.vue';

let app = new Vue({
  el: '#app',
  template: '<Home />',
  components: {
    Home
  }
});
