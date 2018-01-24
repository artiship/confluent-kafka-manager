import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard/Dashboard'
import TopicList from '@/components/topic/TopicList'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'dashbaord',
      component: Dashboard
    },
    {
      path: '/topic',
      name: 'topicList',
      component: TopicList
    },
  ]
})
