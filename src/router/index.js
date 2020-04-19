import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Login from '@/view/Login'
import Administrador from '@/view/Administrador/Administrador'
import AgregarUsuario from '@/view/Administrador/Agregar-usuario'
import Bitacora from '@/view/Administrador/Bitacora'
import Contador from '@/view/Contador/Contador'
import Gestion from '@/view/Contador/Gestion-ingresos'
import Reportes from '@/view/Contador/Reportes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/administrador',
      name: 'Administrador',
      component: Administrador
    },
    {
      path: '/agregar-usuario',
      name: 'Agregar-usuario',
      component: AgregarUsuario
    },
    {
      path: '/bitacora',
      name: 'Bitacora',
      component: Bitacora
    },
    {
      path: '/contador',
      name: 'Contador',
      component: Contador
    },
    {
      path: '/gestion-ingresos',
      name: 'Gestion',
      component: Gestion
    },
    {
      path: '/reportes',
      name: 'Reportes',
      component: Reportes
    }
  ],
  linkActiveClass: "active",
  mode: "history"
})
