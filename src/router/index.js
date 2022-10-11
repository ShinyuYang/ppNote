import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login';
import Notebooks from '../components/NotebookList.vue';
import NoteDetail from '../components/NoteDetail.vue';
import TrashDetail from '../components/TrashDetail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/notebooks',
      name:'Notebooks',
      component: Notebooks
    },
    {
      path: '/note',
      component: NoteDetail
    },
    {
      path: '/trash',
      component: TrashDetail
    },
  ]
})
