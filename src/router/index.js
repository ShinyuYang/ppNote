import Vue from 'vue'
import Router from 'vue-router'


// 解决vue-router在3.0版本以上重复点报错问题
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias:'/notebooks',
      component: () => import('../components/NotebookList.vue')
    },
    {
      path: '/login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/note',
      component:() => import('../components/NoteDetail.vue')
    },
    {
      path: '/trash',
      component: () => import('../components/TrashDetail.vue')
    },
  ]
})
