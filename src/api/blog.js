import request from "./request";

/**
 * 获取博客列表数据
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryId,
    },
  });
}

/**
 * 获取博客分类
 */
export async function getBlogCatrgories() {
  return await request.get("/api/blogtype");
}

/**
 * 获取单个博客
 */
export async function getBlogDetail(id) {
  return await request.get(`/api/blog/detail/${id}`);
}

/**
 * 提交评论
 */
export async function postComment(commentInfo) {
  return await request.post("/api/comment", commentInfo);
}

/**
 * 分页获取评论
 */
export async function getComment(page = 1, limit = 10, blogid) {
  return await request.get("/api/comment/", {
    params: {
      page,
      limit,
      blogid,
    },
  });
}
