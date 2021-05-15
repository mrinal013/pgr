import Vue from 'vue'
import Router from 'vue-router'
import Feedback from '../pages/Feedback.vue'
import List from '../pages/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/feedback-list',
      name: 'List',
      component: List
    }
  ]
})
