import style from '@/directives/loading.module.less'
import loadingSvg from '@/assets/loading.svg'

function getLoadingElement(el) {
  return el.querySelector('div[data-role=loading]')
}

function createLoadingElement() {
  const div = document.createElement('div')
  div.dataset.role = 'loading'
  div.innerHTML = `<div class="${style.center}">
      <img class='item' src='${loadingSvg}'>
    </div>`
  return div
}

// 导出指令配置
export default function(el, binding) {
  // 根据binding.value的值,决定是否要创建或者删除img元素
  const currentLoadingElement = getLoadingElement(el)
  if (binding.value) {
    if (!currentLoadingElement) {
      const loadingElement = createLoadingElement()
      el.appendChild(loadingElement)
    }
  } else {
    if (currentLoadingElement) {
      currentLoadingElement.remove()
    }
  }
}
