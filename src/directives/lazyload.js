import placeHolderImg from '@/assets/defaultLoading.gif'
import errorPlaceHolderImg from '@/assets/defaultError.jpg'
// 导出指令配置
export default {
  inserted: (el, binding) => {
    const realSrc = binding.value

    const loadImage = () => {
      if (realSrc) {
        el.src = realSrc
        observer.unobserve(el) // 图片加载后停止观察
      }
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    let retry = 0
    // 请求失败后重复请求，请求第4次失败后不再请求
    const handleImageError = () => {
      el.src = placeHolderImg
      // 开启一个定时器,这里每1500ms执行一次
      let timer = setTimeout(() => {
        // 如果重试次数大于3
        if (retry > 3) {
          // 图片使用占位图片url
          el.src = errorPlaceHolderImg
          // 清除定时器
          clearTimeout(timer)
        } else {
          // 重试次数在规定内
          // 计数器+1
          retry += 1
          el.setAttribute('retry', retry)
          el.src = realSrc
        }
      }, 1500)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage()
        }
      })
    }, options)
    // 初始显示占位符图片
    el.src = placeHolderImg
    el.onerror = handleImageError
    // 开始观察图片元素
    observer.observe(el)

    el.__lazyLoadObserver__ = observer
  },
  unbind: (el) => {
    if (el.__lazyLoadObserver__) {
      el.__lazyLoadObserver__.disconnect()
      delete el.__lazyLoadObserver__
    }
  },
}
