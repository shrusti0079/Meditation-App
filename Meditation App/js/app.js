/* APP.JS */
/* 3. PLAY AND PAUSE button */

const play=document.querySelector(".play"),
pause=document.querySelector(".pause");

//we will select our audio as well.


const audio=document.querySelector(".audio audio");

play.addEventListener("click", ()=>{
    audio.play();
    // we are adding updtae button so that when we click play it initiate the loop
    update();
});

pause.addEventListener("click", ()=>{
    audio.pause();
});

/* After doing this we can notice that some part of svg is overlapping with the button space, hence clicking o certain parts of buttons won't make button function to work.
So we make svg go in background using zindex. */


/*  SEASONS BUTTONS TO CHANGE BACKGROUND */

/* we will be using HTML5 CUSTOM ATTRIBUTES, custom attributes are applied or stated inside the html tag opener.
so we will adding video-src="skdiaewsdjn.xxx" there inside their respective div's. when clicked we will check for the video-src and set the background video same as this video-src.*/

/* Select seasons div and background video div*/
//grab season and background video element
const seasons=document.querySelector(".seasons"),
video=document.querySelector(".video video");


//change video
Array.prototype.forEach.call(seasons.children, season=>{
    season.addEventListener("click", ()=>{
        if(season.getAttribute("class")!="toggle-menu")           
        {
        video.src=season.getAttribute("video-src");
        }
    });
});

/*MAKING TIMER BUTTONS RESPONSIVE TO CLICK, FOR SETTING THE TIME IN THE 'REMAINING TIME'  */

//select duration
const durations=document.querySelector(".durations");

let audioDuration = 120;            //2min

//CHANGE AUDIO DURATION 

Array.prototype.forEach.call(durations.children, duration => {
    duration.addEventListener("click", ()=>{
        audioDuration = duration.getAttribute("audio-duration");
        update();
    });
});


/*4. ANIMATION OF SVD AS PROGRESS BAR */

//grab white stroke and remaining time.
const path=document.querySelector(".rect");
// console.log(path)
let remainingTimeEl=document.querySelector(".audio-remaining-time");

//get path length
let pathLength=path.getTotalLength();

//set the length of dash to path.length
path.style.strokeDasharray= pathLength;


function update() {

    //to stop the progress when completed the time
    if(audio.currentTime>=audioDuration)
    {
        audio.pause();
        audio.currentTime=0;
    }

    let remainingTimeSec= audioDuration-audio.currentTime;
    renderRemainingTime(remainingTimeSec);
    //using audio to know the portion already played
    let portionPlayed= audio.currentTime/audioDuration;

    //stroke offset is proportional to the audio played.
    path.style.strokeDashoffset= -1* portionPlayed* pathLength;

    if(!audio.paused){
        requestAnimationFrame(update);
        console.log("update"); 
    }

}
update();

/* RENDER REMAING TIME IN THE CLOCK */
function renderRemainingTime(timeInSec) {
    let min= Math.floor(timeInSec/60);
    let sec= Math.floor(timeInSec%60);


    //if min or sec is of single digit add zero before them
    min =(min<10)? `0${min}`: min;
    sec =(sec<10)? `0${sec}`: sec;
    remainingTimeEl.innerHTML=`${min}:${sec}`;
}

// notes:
// the loop wil continue to play even after 10 seconds is over so we need to stop this.
//this done by when we reach audio.currentTime==audioDuration, we pause the audio and also reset the currentTime.
/* path.style.strokeDashoffset=-170;  */          // we will use this to move our white stroke.
//positive offset is going anticlockwise so we use negatiev values
// requestAnimationFrame(update);
// console.log("update");
/* the above console log shows that the update function kept runnning even when we ware doing nothing to stop this 
we will check if audio is paused or not, if pause then don't update */      




//since on clicking the time are changing it looks ugly, this can be solved by calling update() function whenever we click on time buttons.
//in thsi way before strating the timer the current time will be always 0 


