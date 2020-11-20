// Write your code here!
let body = document.querySelector('body')


let delEl = document.querySelector('#main')

delEl.remove()

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.textContent = 'YOUR-NAME is the champion'

body.appendChild(newHeader)