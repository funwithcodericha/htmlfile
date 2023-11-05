/*function person(firstname , lastname , dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob =new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getfullname = function() {
        return `${this.firstname} ${this.lastname}`
    }
}
const person1 = new person("richa","thakur" , '10-10-2000');
console.log(person1);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getfullname())
console.log(person1)
console.log(typeof person1)*/
// single element
console.log(document.getElementById('myform'))
console.log(document.querySelector('h1'))
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
    console.log('click')
});
const meraform = document.querySelector('#myform')
const nameinput = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#user')
meraform.addEventListener('submit',onsubmit);

function onsubmit(e) {
    e.preventDefault();
    if(nameinput.value==='' || emailinput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'please enter all fields'
        setTimeout(()=> msg.remove(),3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));
        userlist.appendChild(li)
    }
    //clear fields
    nameinput.value = ''
    emailinput.value = ''
}
