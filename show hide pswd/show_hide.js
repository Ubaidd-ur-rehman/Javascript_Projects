const password = document.getElementById('password');
const show = document.getElementById('show');
show.onclick=function(){
    if (password.type === 'password') {
        password.type = "text";
        show.src='show.png';
    } else {
        password.type = "password";
        show.src='hidden.png';
    
    }
}