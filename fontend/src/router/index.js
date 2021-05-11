import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/organization-unit'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../view/View'),
      children: [
        {
          path: '',
          redirect: '/home/organization-unit'
        },
        {
          path: 'organization-unit',
          name: 'OrganizationUnit',
          component:  () => import('../view/OrganizationUnit/OrganizationUnit')
        },
        {
          path: 'personal',
          name: 'Personal',
          component:  () => import('../view/Personal/Personal')
        },
        {
          path: 'share',
          name: 'Share',
          component:  () => import('../view/Share/Share'),
          children: [
            {
              path: '',
              redirect: '/home/share/indefinite'
            },
            {
              path: 'indefinite',
              name: 'Indefinite',
              component:  () => import('../view/Share/Indefinite/Indefinite')
            },
            {
              path: 'time',
              name: 'Time',
              component:  () => import('../view/Share/Time/Time')
            },
            {
              path: 'receive',
              name: 'Receive',
              component:  () => import('../view/Share/Receive/Receive')
            },
          ]
        },
        {
          path: 'setting',
          name: 'Setting',
          component:  () => import('../view/Setting/Setting'),
          children: [
            {
              path: '',
              redirect: '/home/setting/employee'
            },
            {
              path: 'employee',
              name: 'Employee',
              component:  () => import('../view/Setting/Employee/Employee')
            },
            {
              path: 'organization-unit',
              name: 'Unit',
              component:  () => import('../view/Setting/Unit/Unit')
            },
            {
              path: 'account',
              name: 'Account',
              component:  () => import('../view/Setting/Account/Account')
            },
            {
              path: 'role',
              name: 'Role',
              component:  () => import('../view/Setting/Role/Role')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component:  () => import('../login/Login')
    }
  ]
})
