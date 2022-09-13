import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/inicio',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/inicio-sesion',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/auth/Login')
  },
  {
    path: '/registro',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/auth/Register')
  },
  {
    path: '/detalle-noticia/:slug',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/detail/DetailNotice'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "error" */ '@/views/error/Error'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export async function beforeEach(to, from, next) {
  if (router.getRoutes().findIndex((route) => route.name === to.name) > -1) {
    if (to.matched.some((record) => record.meta.requireAuth)) {
      if (!localStorage.getItem("access_token")) {
        next({
          name: "Login",
        });
      } else {
        next();
      }
    } else {
      if (localStorage.getItem("authenticated")) {
        if (localStorage.getItem("authenticated") === "true" &&
         to.name === "Login" || to.name === "Register" || to.path === "/"
       ) {
         next("/inicio");
       } else {
         next();
       }
      } else {
        next();
      }
    }
  } else {
    if (!localStorage.getItem("access_token")) {
      next({
        name: "Login",
      });
    } else {
      next(to.path);
    }
  }
}

router.beforeEach((to, from, next) => beforeEach(to, from, next));

export default router
