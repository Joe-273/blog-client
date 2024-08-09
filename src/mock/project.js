import Mock from 'mockjs'
Mock.mock(/^\/api\/project\/?$/, 'get', {
  code: 0,
  msg: '',
  'data|3-12': [
    {
      id: '@uuid',
      name: '@ctitle(3,12)',
      url: '',
      github: 'https://github.com/Joe-273',
      'description|1-4': ['@cparagraph(1, 5)'],
      thumb: 'https://picsum.photos/id/@natural(500, 1000)/300/200',
    },
  ],
  // data: [],
})
