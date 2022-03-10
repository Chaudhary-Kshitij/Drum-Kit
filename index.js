
var noOfButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < noOfButtons ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var s = this.innerHTML;
    music(s);
    buttonAnimation(s);
});

document.addEventListener("keypress", function(event)
{var k = event.key;
music(k);
buttonAnimation(k);
;})    

                                                                            
}

function music(s)
{
    switch (s){
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":  
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();  
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();  
            break;
         case "d":
             var audio = new Audio('sounds/tom-4.mp3');
            audio.play();  
            break;  
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();  
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();  
            break;      
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();  
            break;    
        default: console.log(s);         
    }

}

function buttonAnimation(s)
{
var activeButton =document.querySelector("." + s);
activeButton.classList.add("pressed");
setTimeout(function(){activeButton.classList.remove("pressed")},100);
}


// function music(s)
// {
//     if(s==="w"){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//     }

//     if(s==="a")
//     {
//     audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
//     }

//     if(s==="s")
//     {
//     audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
//     }

//     if(s==="d")
//     {
//     audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
//     }

//     if(s==="j")
//     {
//     audio = new Audio('sounds/snare.mp3');
//     audio.play();
//     }

//     if(s==="k")
//     {
//     audio = new Audio('sounds/crash.mp3');
//     audio.play();
//     }

//     if(s==="l")
//     {
//     audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
//     }

// }