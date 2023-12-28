//listener will use the function only whenever the buttons are clicked
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    });
}

/*Creates an event listener for keystrokes on the full page.
 The event is what triggered the function*/
addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Function that takes key input and then plays the drum objects play function call
function makeSound(key) {
    
    switch(key) {
        case "w":
            var tom4Audio = new Audio("./sounds/tom-4.mp3");
            tom4Audio.play();
            break;
        case "a":
            var tom3Audio = new Audio("./sounds/tom-3.mp3");
            tom3Audio.play();
            break;
        case "s":
            var tom2Audio = new Audio("./sounds/tom-2.mp3");
            tom2Audio.play();
            break;
        case "d":
            var tom1Audio = new Audio("./sounds/tom-1.mp3");
            tom1Audio.play();
            break;
        case "j":
            var kickBassAudio = new Audio("./sounds/kick-bass.mp3");
            kickBassAudio.play();
            break;
        case "k":
            var snareAudio = new Audio("./sounds/snare.mp3");
            snareAudio.play();
        case "l":
            var crashAudio = new Audio("./sounds/crash.mp3");
            crashAudio.play();
            break;
        default: console.log(key);
        }
}


/*Creates a function that adds the pressed style class to the button, then removes
it after 0.1 seconds using setTimeout()*/
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}