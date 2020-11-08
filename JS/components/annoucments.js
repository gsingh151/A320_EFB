window.onload = init;
var cabin = document.getElementsByClassName("cabin");

  function init(){
    for(let i = 0; i < cabin.length; i++){
        cabin[i].addEventListener("click", aud);
    };
    
  }
console.log('hi');


// for(let i = 0; i < cabin.length; i++){
//    cabin[i].addEventListener("click", aud);
// };



// function aud(e){
//     if(e.target.id === "music"){
//         var music = new Audio('../Sounds/CABIN_BOARDING_MUSIC.WAV');
//         music.play();

//     }

// }