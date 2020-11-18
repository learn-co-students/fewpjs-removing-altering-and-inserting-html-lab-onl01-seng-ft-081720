// Write your code here!

let element = document.createElement('div')

document.body.appendChild(element)

let ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)

element.style.backgroundColor = '#27647B';

element.style.textAlign = 'center';
ul.style.textAlign = 'left'

ul.removeChild(ul.querySelector('li:nth-child(2)'))

// Test 1:
const main = document.querySelector("#main")
main.remove()

// Test 2, 3, 4:
const body = document.querySelector("body")
const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "YOUR-NAME is the champion"
// const header = document.createElement("#victory")
// newHeader.appendChild(header)
// body.appendChild(newHeader)
