module.exports = {
  devServer: {
    // 代理配置
    proxy: {
      "/api": {
        target: "http://localhost:8080",
      },
    },
  },
};
