// create function of save to local storage
function savetolocalstorage(event) {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;
    const phonenumber = event.target.phonenumber.value;
    const obj= {
        name,
        email,
        phonenumber

    }
    localStorage.setItem(obj.name,JSON.stringify(obj))
    showuseronscreen(obj)

}
function showuseronscreen(obj) {
    const parentelem  = document.getElementById('listofitems')
    const childelem = document.createElement('li')
    childelem.textContent = obj.name + '_' + obj.email + '_' + obj.phonenumber
    
    const deletebutton = document.createElement('input');
    deletebutton.type = 'button';
    deletebutton.value = 'delete';
    deletebutton.onclick = () => {
        localStorage.removeItem(obj.name);
        parentelem.removeChild(childelem);
    }
    const editbutton = document.createElement('input')
    editbutton.type = 'button';
    editbutton.value = 'edit';
    editbutton.onclick = () => {
        localStorage.removeItem(obj.name);
        parentelem.removeChild(childelem)
    }


    childelem.appendChild(deletebutton);
    childelem.appendChild(editbutton);
    parentelem.appendChild(childelem)
}
