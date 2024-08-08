let routeTitle = ''
let siteTitle = ''

function setTitle() {
  if (!routeTitle && !siteTitle) {
    document.title = 'Loading...'
  } else if (routeTitle && !siteTitle) {
    document.title = routeTitle
  } else if (!routeTitle && siteTitle) {
    document.title = siteTitle
  } else {
    document.title = `${routeTitle} - ${siteTitle}`
  }
}

export default {
  setRouteTitle(title) {
    routeTitle = title
    setTitle()
  },
  setSiteTitle(title) {
    siteTitle = title
    setTitle()
  },
}
