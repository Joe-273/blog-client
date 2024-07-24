import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import LeaveWords from "@/views/LeaveWords";
import Project from "@/views/Project";

var i = 0;

// 路由的匹配规则
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
  },
  {
    name: "LeaveWords",
    path: "/leavewords",
    component: LeaveWords,
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
  },
];
for (let i = 0; i < 10; i--) {}
export default routes;
