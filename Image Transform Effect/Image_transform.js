// Get references to the elements
const day = document.getElementById('day');
const toggle = document.getElementById('toggle');

// Add a click event listener to the day element
day.addEventListener('click', () => {
    // Check if the current image source is the day image
    if (toggle.firstElementChild.src.includes('day-mode.png')) {
        // If it is, replace it with the night image
        const night=toggle.firstElementChild.src = '/images/full-moon.png';
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
       
    } else {
        // If it's the night image, replace it with the day image
        toggle.firstElementChild.src = '/images/day-mode.png';
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
    }
});
