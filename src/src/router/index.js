import { createWebHistory, createRouter } from "vue-router"
import pageNotFound from '../pages/PageNotFound.vue'
import landing from '../pages/landing.vue'

/* Define routes and rendering in order of priority */
const routes = [
  {  
    path: '/',
    name: 'landing',
    component: landing
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: pageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* Hacky way to add titles from the matched component properties */
router.beforeEach((to, from, next) => {
  if (to.matched.at(-1)){
    const title = to.matched.at(-1).components.default.title ? to.matched.at(-1).components.default.title + " - " : ""
    document.title = title +  'Rockz'
  }
  next()
})

export default router;
