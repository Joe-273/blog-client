export default (fn, delay) => {
  let timerId
  return (...arg) => {
    if (timerId) return
    timerId = setTimeout(() => {
      fn(...arg)
      timerId = null
    }, delay)
  }
}
