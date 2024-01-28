// let submitButtons = document.getElementsByClassName('Submit');

// // Check if any elements with the class 'Submit' were found
// if (submitButtons.length > 0) {
//     // Add event listener to the first element (assuming that's what you want)
//     submitButtons[0].addEventListener('click', () => {
//         console.log('hello');
//     });
// }
let submit=document.getElementById('Submit');
let btn=document.getElementById('btn')
submit.addEventListener('click',()=>{
    PopUp.style.display='block'
})
btn.addEventListener('click',()=>{
    PopUp.style.display='none'
    
})