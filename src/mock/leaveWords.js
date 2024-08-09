import Mock from 'mockjs'
import qs from 'querystring'

// 提交留言
Mock.mock('/api/message', 'post', {
  code: 0,
  msg: '',
  data: {
    'id|0-520': 0,
    nickname: '就快融化',
    content: '评论内容，纯路人',
    createDate: '@natural(1609459200000, ' + Date.now() + ')',
    'avatar|1': [
      'https://picsum.photos/id/510/200/200',
      'https://picsum.photos/id/489/200/200',
      'https://picsum.photos/id/612/200/200',
      'https://picsum.photos/id/113/200/200',
    ],
  },
})

// 获取留言
Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function(options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      total: 64, //评论总数
      [`rows|${query.limit || 10}`]: [
        //当前页列表数据
        {
          id: '@guid',
          nickname: 'I坤@integer(10,99)号',
          content: '评论内容，纯路人：@cparagraph(1, 4)',
          createDate: '@natural(1609459200000, ' + Date.now() + ')',
          'avatar|1': [
            'https://picsum.photos/id/520/100/100',
            'https://picsum.photos/id/999/100/100',
            'https://picsum.photos/id/666/100/100',
            'https://picsum.photos/id/233/100/100',
          ],
        },
      ],
    },
  })
})
