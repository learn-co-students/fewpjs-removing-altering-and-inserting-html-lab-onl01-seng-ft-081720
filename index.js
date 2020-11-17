// Write your code here!

// remove main from html
let main = document.querySelector('main#main');
main.remove()

// create new header 
let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.innerHTML = "Tabatha is the champion"