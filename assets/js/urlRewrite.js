RewriteUrl('/introduction/overview.html?ver=latest#barcode-formats', 'http://127.0.0.1:8086/introduction/architecture.html?ver=latest')

function RewriteUrl(matchUrl, targetUrl) {
  var currentUrl = window.location.pathname
  var currentHash = window.location.hash
  var matchPathName = ''
  if (matchUrl.indexOf('?') > 0) {
    matchPathName = matchUrl.split('?')[0]
  } else if (matchUrl.indexOf('.html') > 0) {
    matchPathName = matchUrl.split('.html')[0] + '.html'
  } else if (matchUrl.indexOf('#') > 0) {
    matchPathName = matchUrl.split('#')[0] + '.html'
  } else {
    matchPathName = matchUrl
  }
  
  var matchHash = matchUrl.split('#').length > 1 ? '#' + matchUrl.split('#')[1] : ''
  if (currentUrl.indexOf(matchPathName) >=0 && currentHash == matchHash) {
    window.location.href = targetUrl
  }
}