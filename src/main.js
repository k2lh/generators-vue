import Vue from 'vue'
import { mapGetters } from 'vuex';
import app from './app'
import router from './router'
import { store } from './store/store';
import VueCookies from 'vue-cookies'

window.bus = new Vue({});

Vue.use(VueCookies)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<app/>',
  data: () => ({
    user: null,
    access_token: null
  }),
  components: {
    app
  },
  mounted() {
    const currentPath = window.location.pathname;
    let currentPage = currentPath === '/' ? 'home' : currentPath.substr(1);
    this.$store.commit('setCurrentPage', currentPage);
  },
  computed: mapGetters([
    'currentPage'
  ])
})
