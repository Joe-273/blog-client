import request from "./request";
/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, catrgoryId = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      catrgoryId,
    },
  });
}

/**
 * 获取博客分类
 */
export async function getBlogCatrgories() {
  return await request.get("/api/blogtype");
}
