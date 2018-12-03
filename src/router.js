import Vue from 'vue'
import Router from 'vue-router'

import iput from './components/comment_input.vue'
import ilist from './components/comment_list.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/iput',
      component: iput
    },
    {
      path: '/ilist',
      component: ilist
    }
  ]
})

// // 配置路由对象
// router.beforeEach((to, from, next) => {
//     console.log(`路由是由 ${from.path} 调转到 ${to.path} 页面`);
//     if (to.path == '/zhuce') {
//         alert("您没有权力去注册，请返回");
//     } else {
//         next();
//     }
// });
