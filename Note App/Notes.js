let notbtn = document.querySelector('.btn');
const inputField = document.querySelector('.input-field');

function showNotes() {
    inputField.innerHTML = localStorage.getItem("inputBox");
}

function updateNotes() {
    localStorage.setItem('inputBox', inputField.innerHTML);
}

notbtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "deletet.png";
    inputBox.appendChild(img);
    inputField.appendChild(inputBox);
    updateNotes();
});

inputField.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateNotes();
    }
});

// Use event delegation to handle oninput for all input-box elements
inputField.addEventListener('input', (e) => {
    if (e.target.classList.contains('input-box')) {
        updateNotes();
    }
});

// Load existing input content on page load
showNotes();
