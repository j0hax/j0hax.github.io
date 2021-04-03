window.addEventListener('DOMContentLoaded', (event) => {
  const xmlHttp = new XMLHttpRequest()
  xmlHttp.withCredentials = true
  xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count', false)
  xmlHttp.send(null)
  const count = xmlHttp.responseText

  const footer = document.getElementsByClassName('footer-col')[1]

  const newP = document.createElement('p')
  const textNode = document.createTextNode('Ca. ' + count + ' site visits')
  newP.appendChild(textNode)
  footer.appendChild(newP)
})
