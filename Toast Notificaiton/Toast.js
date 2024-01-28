// const Success=document.getElementById('Success');
// const Error=document.getElementById('Error');
// const invalid=document.getElementById('Invalid')
let toastBox=document.getElementById('toastBox')
let SuccessMsg='<i class="fa-solid fa-circle-check"></i>Successfully submitted'
let ErrorMsg='<i class="fa-solid fa-circle-xmark"></i>There is an error'
let InvalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid credentials'
function showToast(msg){
        const toast=document.createElement('div')
        toast.classList.add('toast')
        toast.innerHTML=msg
        toastBox.appendChild(toast);
        if(msg.includes('error')){
         toast.classList.add('error')
        }
        if(msg.includes('Invalid')){
         toast.classList.add('Invalid')
        }
        setTimeout(()=>{
           toast.remove('div')
        },6000)
}


