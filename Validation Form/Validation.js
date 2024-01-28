const submit = document.querySelector('.submit');

// error message
var redname = document.querySelector('.redname');
var redphone = document.querySelector('.redphone');
var redemail = document.querySelector('.redemail');
var redmessage = document.querySelector('.redmessage');


// const phoneNumber = document.querySelector('.phone');
const email = document.getElementById('Email');
const message = document.getElementById('message');
const myForm = document.getElementById('myForm');
var checked = document.querySelector('.check');
var unchecked = document.querySelector('.unchecked');
const span = document.querySelector('span');
const validatename = () => {
    var nameInput = document.querySelector('.name');
    var name = nameInput.value.trim();
    if (name.length == 0 || name.length > 20) {
        redname.innerHTML = 'Invalid Length'
        checked.style.display = 'none';
        unchecked.style.display = 'block';
        span.style.display = 'block';
    }
    else if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)) {
        redname.innerHTML = 'invalid name';
        checked.style.display = 'none';

    }
    else {
        redname.innerHTML = ''
        unchecked.style.display = 'none';
        checked.style.display = 'block';
        span.style.display = 'block';
        showToast(msg)
    }
};


const validatepassword=()=>{
    var phoneNumber = document.querySelector('.phone');
    var phonechecked=document.querySelector('.phonecheck');
    var phoneunchecked=document.querySelector('.phoneunchecked');
    var phone = phoneNumber.value.trim();
    if (phone.length == 0 || phone.length > 20) {
        redphone.innerHTML = 'Invalid Length'
        phonechecked.style.display = 'none';
        phoneunchecked.style.display = 'block';  
        span.style.display = 'block';

    }
    else if (!phone.match(/^\d{11}$/) || typeof(phone)==String){
        redphone.innerHTML = 'Invalid number';
        phonechecked.style.display = 'none';

    }
    else {
        redphone.innerHTML = ''  
        phoneunchecked.style.display = 'none';   
        phonechecked.style.display = 'block';
        span.style.display = 'block';
        showToast(msg)
    }
}


const validateEmail=()=>{
    var userEmail = document.querySelector('.Email');
    var emailcheck=document.querySelector('.emailcheck');
    var emailuncheck=document.querySelector('.emailuncheck');
    var email = userEmail.value.trim();
    if (email.length == 0 || email.length > 35) {
        redemail.innerHTML = 'Invalid Length'
        emailcheck.style.display = 'none';
        emailuncheck.style.display = 'block';  
        span.style.display = 'block';
      
    }
    else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || typeof(phone)==email){
        redemail.innerHTML = 'Invalid email';
        emailcheck.style.display = 'none';
        
    }
    else {
        redemail.innerHTML = ''  
        emailcheck.style.display = 'block';   
        emailuncheck.style.display = 'none';
        span.style.display = 'block';
        showToast(msg)
    }
}




document.addEventListener('DOMContentLoaded', function () {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        validatename();
        validatepassword();
        validateEmail();
    });
});


// Toast Message

let toastBox=document.getElementById('toastBox')
let SuccessMsg='<i class="fa-solid fa-circle-check"></i>Successfully submitted'
function showToast(msg){
        const toast=document.createElement('div')
        toast.classList.add('toast')
        toast.innerHTML=msg
        toastBox.appendChild(toast);
        setTimeout(()=>{
           toast.remove('div')
        },6000)
}


