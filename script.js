console.log("Welcome to Spotify");

//initialize song index
let songIndex = 0;
let audioElement = new Audio('Coldplay - A Sky Full Of Stars (Official Video).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getAnimations('myProgressBar');
let songs=[
    {songName: "yellow", filepath: "Coldplay - A Sky Full Of Stars (Official Video).mp3", coverPath:"covers/1.jpg"}
]
// audioelement.play();

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
 audioElement.play();
 masterPlay.classList.remove('fa-circle-play');
 masterPlay.classList.add('fa-circle-pause');
}
else
{
    audioElement.pause();
 masterPlay.classList.add('fa-circle-play');
 masterPlay.classList.remove('fa-circle-pause');
}
})
//listen to events
audioElement.addeventlistener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})