import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '../components/Content/ArticleList.vue'
import Article from '../components/Content/Article'
import User from '../components/User/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/user/:name?',
      name: 'User',
      component: User
    }
  ]
})
