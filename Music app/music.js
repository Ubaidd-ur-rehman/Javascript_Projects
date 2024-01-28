const btn_center=document.getElementById('btn-center');
const btn_forward=document.getElementById('btn-forward');
const ApiFetch = async () => {
    const strArtistLogo = document.getElementById('strArtistThumb');
   await fetch('https://theaudiodb.com/api/v1/json/2/search.php?s=coldplay')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // Update the src attribute of the strArtistLogo
            strArtistLogo.src = data.artists[0].strArtistThumb;
            // Update other content as needed
            document.getElementById('Artist').textContent = data.artists[0].strArtist;
            document.getElementById('description').textContent = data.artists[0].strGenre;
        })
        .catch(error => console.error('Error fetching data:', error));
};
let isPlaying = false; // Variable to track play/pause state
const Audiotag=document.getElementById('audio');
const range = document.getElementById('range');
const audio=new Audio();
btn_center.addEventListener('click', () => {
    if (isPlaying) {
        // If currently playing, change to pause icon and pause action
        btn_center.innerHTML = '<i class="fa-solid fa-play"></i>';
        audio.pause();
        // Add your pause action here if needed
    } else {
        // If currently paused, change to play icon and play action
        updateThumbPosition();
        btn_center.innerHTML = '<i class="fa-solid fa-pause"></i>';
        ApiFetch(); //
        audio.src = 'Coolio---Gangstas-Paradise---ft-LV(musicdownload.cc).mp3'; // Replace with your actual audio file URL
        audio.play();
        // Add your play action here if  needed
    }
    
    isPlaying = !isPlaying;
    // Toggle the state
});
btn_forward.addEventListener('click',()=>{
    if (isPlaying) {
        // If currently playing, change to pause icon and pause action
        btn_center.innerHTML = '<i class="fa-solid fa-play"></i>';
        audio.pause();
        // Add your pause action here if needed
    } else {
        // If currently paused, change to play icon and play action
        updateThumbPosition();
        btn_center.innerHTML = '<i class="fa-solid fa-pause"></i>';
        ApiFetch(); //
        audio.src = 'Hymn-For-The-Weekend(PaglaSongs).mp3'; // Replace with your actual audio file URL
        audio.play();
        // Add your play action here if  needed
    }
    
    isPlaying = !isPlaying;
})
const btn_back=document.getElementById('btn-back');
btn_back.addEventListener('click',()=>{
    if (isPlaying) {
        // If currently playing, change to pause icon and pause action
        btn_center.innerHTML = '<i class="fa-solid fa-play"></i>';
        audio.pause();
        // Add your pause action here if needed
    } else {
        // If currently paused, change to play icon and play action
        updateThumbPosition();
        btn_center.innerHTML = '<i class="fa-solid fa-pause"></i>';
        ApiFetch(); //
        audio.src = 'Coolio---Gangstas-Paradise---ft-LV(musicdownload.cc).mp3'; // Replace with your actual audio file URL
        audio.play();
        // Add your play action here if  needed
    }
    
    isPlaying = !isPlaying;
})
audio.addEventListener('timeupdate', () => {
    updateThumbPosition();
});
function updateThumbPosition() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    range.value = percentage;
}

range.addEventListener('input', () => {
    const seekTime = (range.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

