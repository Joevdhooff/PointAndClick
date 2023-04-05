document.getElementById("mainTitle").innerText = "Point And Click Adventure"

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 7;
const doorMessage = document.getElementById("doorAlert");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const targetBalloon = document.getElementById("speech-bubble");
const sec = 1000;

var audio = new Audio("http://music.ogg");


gameWindow.onclick = function(e){
    if (mainCharacterSpeech.style.opacity == 0){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // x postition within the element
    var y = e.clientY - rect.top; // y postition within the element
    console.log(x + " " + y)
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";


        switch(e.target.id){
            case "door":
                showMessage(mainCharacterSpeech, "You need a key for this door...");
                //setTimeout(showMessage, 4 * sec, mainCharacterSpeech, "Wait what?! There a ruby here.");

                break;
            case "tree1":
                console.log("boom")
                break;
            default:
                doorMessage.style.display = "none";
        }
        }
}

function showMessage(targetBalloon, message) {
    mainCharacterSpeech.innerHTML = message;
    mainCharacterSpeech.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec, targetBalloon);
}
function hideMessage() {
    mainCharacterSpeech.style.opacity = 0;
    mainCharacterSpeech.innerHTML = "...";
}

