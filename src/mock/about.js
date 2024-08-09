import Mock from 'mockjs'
Mock.mock('/api/about', 'get', {
  code: 0,
  msg: '',
  'data|1': [
    'https://joe-273.github.io/simple-chat/',
    'https://kimi.moonshot.cn/',
    'https://www.bilibili.com/',
  ],
})
