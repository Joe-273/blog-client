import Mock from 'mockjs'
import avatar from '@/assets/404AM.png'
import qqQrCode from '@/assets/qqQrCode.png'
import weixinQrCode from '@/assets/weixinQrCode.jpg'
import favicon from '@/assets/favicon.png'

Mock.mock('/api/setting', 'get', {
  code: 0,
  msg: '',
  data: {
    avatar,
    siteTitle: '无敌暴龙王の小窝',
    github: 'https://github.com/Joe-273',
    qqQrCode,
    weixinQrCode,
    mail: 'QihaoWei.273@outlook.com',
    icp: '	桂ICP备xxxxxxxx号',
    favicon,
  },
})
