import { createRouter, createWebHistory } from 'vue-router'
import ResultView from '../views/ResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/result',
      name: 'result',
      component: ResultView
    }
  ]
})

export default router
