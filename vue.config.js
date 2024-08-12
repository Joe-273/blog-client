module.exports = {
  devServer: {
    // 代理配置
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
      },
      'static':{
        target: 'http://localhost:7001',
      }
    },
  },
  configureWebpack: require('./webpack.config'),
}
