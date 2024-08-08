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
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
  {
    name: 'Blog',
    path: '/blog',
    component: Blog,
  },
  {
    name: 'BlogCategory',
    path: '/blog/cate/:categoryId',
    component: Blog,
  },
  {
    name: 'BlogDetail',
    path: '/blog/detail/:blogId',
    component: BlogDetail,
  },
  {
    name: 'LeaveWords',
    path: '/leavewords',
    component: LeaveWords,
  },
  {
    name: 'Project',
    path: '/project',
    component: Project,
  },
]
export default routes
