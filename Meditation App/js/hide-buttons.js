/* HIDE-BUTTONS.JS */

/* 2. to hide all the app content , we will again use something similar, i.e. a clas inactive,
 which on attached make the app icons invisible or hidden. As we saw .app is directly under bosy with .video as background. */

 const app=document.querySelector(".app");

 //for this we also need to know the last time the moue was moved.

 //setting the time limit
 const inactiveTime=3000;  //3sec

 //to fetch the last time the mouse was use
 let mouseMoveLastTime= new Date();

 //this was for activating screen visibility.
 document.addEventListener("mousemove", ()=>{

    //also we need to reset the time at which the mouse was moved
    mouseMoveLastTime= new Date();
     app.classList.remove("inactive");
     document.body.style.cursor="auto";
 });

 //or deactivating

 function deactivateApp() {
     let now= new Date();
     let delta= now-mouseMoveLastTime;

     if(delta>=inactiveTime)
     {      //HIDE app
        app.classList.add("inactive");
        document.body.style.cursor="none";
     }

     //for creating a loop we use 
     requestAnimationFrame(deactivateApp);
     //after this we need to call function only one time and it will kepp running in loop.
 }

 deactivateApp();

 /* *: ths setting is not working properly for small screen devices! */