let set = document.querySelectorAll(".drum");

let audios = [
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
  "sounds/snare.mp3",
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
];

for (let i = 0; i < set.length; i++) {
  set[i].addEventListener("click", () => {
    // var audio = new Audio(audios[i]);
    // audio.play();
    makeSound(set[i].innerHTML)
    buttenAnimation(set[i].innerHTML)
  });
}

document.addEventListener("keydown", (e) => {
    let keyPressed = e.key;
    
    makeSound(keyPressed);
    buttenAnimation(keyPressed)
});


function makeSound(key){
    

    switch (key) {
      case "w":
        var audio = new Audio(audios[0]);
        audio.play();
        break;
      case "a":
        var audio = new Audio(audios[1]);
        audio.play();
        break;
      case "s":
        var audio = new Audio(audios[2]);
        audio.play();
        break;
      case "d":
        var audio = new Audio(audios[3]);
        audio.play();
        break;
      case "j":
        var audio = new Audio(audios[4]);
        audio.play();
        break;
      case "k":
        var audio = new Audio(audios[5]);
        audio.play();
        break;
      case "i":
        var audio = new Audio(audios[6]);
        audio.play();
        break;
     
  
      default:
          console.log(keyPressed);
        break;
    }
}


function buttenAnimation(key){
    let currentBtn = document.querySelector("."+key);

    currentBtn.classList.add("pressed");

    let timer = setTimeout(()=>{
        currentBtn.classList.remove("pressed")
    }, 300)
}

