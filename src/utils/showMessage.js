import getComponentRootDom from './getComponentRootDom'
import Icon from '@/components/Icon'
import style from './showMessage.module.less'

/**
 * 弹出对话框
 * @param {Object} {
 *    content:    消息内容
 *    type:       消息类型：info error success warn
 *    container:  容器，消息显示到容器中间，没有值则显示到页面正中间
 *    duration:   消失时长
 *    callback:   回调函数，对话框消失后执行
 * }
 */
export default function(options = {}) {
  const content = options.content
  const type = options.type || 'info'
  const duration = options.duration || 2000
  const container = options.container || document.body

  const div = document.createElement('div')
  const el = getComponentRootDom(Icon, {
    type,
  })

  div.innerHTML = `<span>${el.outerHTML}</span><div>${content}</div>`
  // 设置类样式
  div.className = `${style.message} ${style[type]}`

  // 加上相对定位

  if (getComputedStyle(container).position === 'static') {
    container !== document.body && (container.style.position = 'relative')
  }

  container.appendChild(div)

  // 强行渲染
  div.clientHeight
  // 回归正常
  div.style.opacity = 1
  div.style.transform = `translate(-50%, -50%)`
  setTimeout(() => {
    div.style.opacity = 0
    div.style.transform = `translate(-50%, -50%) translateY(-40px)`
    div.addEventListener(
      'transitionend',
      function() {
        this.remove()
        // 运行回调函数
        options.callback && options.callback()
      },
      { once: true }
    )
  }, duration)
}
