import NotFound from '@/views/NotFound'

// 路由的匹配规则
const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import(/* webpackChunkName:'Home'*/ '@/views/Home'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: () => import(/* webpackChunkName:'About'*/ '@/views/About'),
    meta: {
      title: '关于我',
    },
  },
  {
    name: 'Blog',
    path: '/blog',
    component: () => import(/* webpackChunkName:'Blog'*/ '@/views/Blog/Blog.vue'),
    meta: {
      title: '博客',
    },
  },
  {
    name: 'BlogCategory',
    path: '/blog/cate/:categoryId',
    component: () => import(/* webpackChunkName:'Blog'*/ '@/views/Blog/Blog.vue'),
    meta: {
      title: '博客',
    },
  },
  {
    name: 'BlogDetail',
    path: '/blog/detail/:blogId',
    component: () => import(/* webpackChunkName:'BlogDetail'*/ '@/views/Blog/BlogDetail.vue'),
    meta: {
      title: '博客详情',
    },
  },
  {
    name: 'LeaveWords',
    path: '/leavewords',
    component: () => import(/* webpackChunkName:'LeaveWords'*/ '@/views/LeaveWords'),
    meta: {
      title: '留言板',
    },
  },
  {
    name: 'Project',
    path: '/project',
    component: () => import(/* webpackChunkName:'Project'*/ '@/views/Project'),
    meta: {
      title: '项目&展示',
    },
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
  },
]
export default routes
