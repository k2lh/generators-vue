import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import character from '@/views/character'
import backstory from '@/views/backstory'
import religion from '@/views/religion'
import population from '@/views/population'
import vocabulary from '@/views/vocabulary'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/character', name: 'character', component: character },
    { path: '/backstory', name: 'backstory', component: backstory },
    { path: '/religion', name: 'religion', component: religion },
    { path: '/population', name: 'population', component: population },
    { path: '/vocabulary', name: 'vocabulary', component: vocabulary }
  ],
  mode: 'history',
  historyApiFallback: true,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
