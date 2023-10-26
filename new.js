// parent node
let itemList = document.querySelector('#items')
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentNode.parentNode)
console.log(itemList.parentNode.parentNode.parentNode)
// parent element
itemList = document.querySelector('#items');
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = '#f4f4f4'
console.log(itemList.parentElement.parentElement)
console.log(itemList.parentElement.parentElement.parentElement)
// child node
console.log(itemList.childNodes)
//children node
console.log(itemList.children)
console.log(itemList.children[0])
itemList.children[0].style.backgroundColor = 'yellow'
// first child
console.log(itemList.firstChild)
//first element child
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hello 1'
// last child
console.log(itemList.lastChild);
// last child element
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Richa'
itemList.lastElementChild.style.backgroundColor = 'red'
// next sibling
console.log(itemList.nextSibling)
// next sibling element
console.log(itemList.nextElementSibling)
// previous sibling
console.log(itemList.previousSibling)
// previous element sibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.backgroundColor = 'blue'
// create a div
var newdiv = document.createElement('div');
newdiv.className = 'hello'
newdiv.id = 'hello1'
newdiv.setAttribute('title' , 'hello div')
var newdivtext = document.createTextNode('hello world');
newdiv.appendChild(newdivtext)
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')
newdiv.style.fontSize = '30px'
console.log(newdiv)
container.insertBefore(newdiv , h1)

