let play=document.getElementById('play');
let pause=document.getElementById('pause');
let refresh=document.getElementById('refresh');
let [second,minutes,hours]=[0,0,0];
let displayTime=document.getElementById('displayTime');
let timer =null
const stopwatch=(()=>{
    second++;
    if(second===60){
        second=0;
        minutes++
        if(minutes === 60){
            minutes=0;
            hours++;
        }
    }
    displayTime.innerHTML=hours+":"+minutes+":"+second
})
const WatchStart=(()=>{
    if(timer!=null){
        clearInterval(timer)
    }
    timer=setInterval(stopwatch,1000)
})
const WatchStoped=(()=>{
    displayTime.textContent = '00:00:00';
})
pause.addEventListener('click',()=>{ 
    WatchStart();
})

play.addEventListener('click',()=>{
    clearInterval(timer)
})
refresh.addEventListener('click',()=>{
    clearInterval(timer);
    [second, minutes, hours] = [0, 0, 0];
    WatchStoped()
})



