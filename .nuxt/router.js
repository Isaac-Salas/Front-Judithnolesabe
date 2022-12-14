import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _af108716 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _428c2392 = () => interopDefault(import('..\\pages\\registration\\index.vue' /* webpackChunkName: "pages/registration/index" */))
const _c8bebfb8 = () => interopDefault(import('..\\pages\\dashboard\\libros\\index.vue' /* webpackChunkName: "pages/dashboard/libros/index" */))
const _3904f777 = () => interopDefault(import('..\\pages\\dashboard\\users\\index.vue' /* webpackChunkName: "pages/dashboard/users/index" */))
const _3ee85cfd = () => interopDefault(import('..\\pages\\dashboard\\libros\\Jsus\\index.vue' /* webpackChunkName: "pages/dashboard/libros/Jsus/index" */))
const _3e468b2b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _af108716,
    name: "dashboard"
  }, {
    path: "/registration",
    component: _428c2392,
    name: "registration"
  }, {
    path: "/dashboard/libros",
    component: _c8bebfb8,
    name: "dashboard-libros"
  }, {
    path: "/dashboard/users",
    component: _3904f777,
    name: "dashboard-users"
  }, {
    path: "/dashboard/libros/Jsus",
    component: _3ee85cfd,
    name: "dashboard-libros-Jsus"
  }, {
    path: "/",
    component: _3e468b2b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
