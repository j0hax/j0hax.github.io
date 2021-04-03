window.addEventListener('DOMContentLoaded', (event) => {
  // send out request with page URL
  const targetUrl = window.location.href
  const query = '?url=' + encodeURIComponent(targetUrl)
  const xmlHttp = new XMLHttpRequest()
  xmlHttp.withCredentials = true
  xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count' + query, false)
  xmlHttp.send(null)
  count = xmlHttp.responseText

  // get the desired footer element
  const footer = document.getElementsByClassName('footer-col')[1]

  // add our text
  const newP = document.createElement('p')
  const textNode = document.createTextNode('Ca. ' + count + ' page visits')
  newP.appendChild(textNode)
  footer.appendChild(newP)
})
