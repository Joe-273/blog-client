import Home from '@/views/Home'
import About from '@/views/About'
import Blog from '@/views/Blog/Blog.vue'
import BlogDetail from '@/views/Blog/BlogDetail.vue'
import LeaveWords from '@/views/LeaveWords'
import Project from '@/views/Project'

// 路由的匹配规则
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      title: '关于我',
    },
  },
  {
    name: 'Blog',
    path: '/blog',
    component: Blog,
    meta: {
      title: '博客',
    },
  },
  {
    name: 'BlogCategory',
    path: '/blog/cate/:categoryId',
    component: Blog,
    meta: {
      title: '博客',
    },
  },
  {
    name: 'BlogDetail',
    path: '/blog/detail/:blogId',
    component: BlogDetail,
    meta: {
      title: '博客详情',
    },
  },
  {
    name: 'LeaveWords',
    path: '/leavewords',
    component: LeaveWords,
    meta: {
      title: '留言板',
    },
  },
  {
    name: 'Project',
    path: '/project',
    component: Project,
    meta: {
      title: '项目&展示',
    },
  },
]
export default routes
