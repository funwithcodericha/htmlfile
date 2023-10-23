
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value = 'by default ';
var submit = document.querySelector('input[type="submit"]');
submit.value = "send";
var item = document.querySelector('.list-group-item');
item.style.color = 'red' ;
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
// change the title
var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'RICHA';
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i =0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc'
}