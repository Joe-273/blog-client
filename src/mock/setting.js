import Mock from 'mockjs'
import qqQrCode from '@/assets/qqQrCode.png'
import weixinQrCode from '@/assets/weixinQrCode.jpg'

Mock.mock('/api/setting', 'get', {
  code: 0,
  msg: '',
  data: {
    avatar: "https://picsum.photos/200/200",
    siteTitle: '无敌暴龙王の小窝',
    github: 'https://github.com/Joe-273',
    qqQrCode,
    weixinQrCode,
    mail: 'QihaoWei.273@outlook.com',
    icp: '	桂ICP备xxxxxxxx号',
    favicon: "",
  },
})
