document.getElementById("mainTitle").innerText = "Point And Click Adventure"

const tilemap = document.getElementById("map");
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 7;
const doorMessage = document.getElementById("doorAlert");
const tree = document.getElementById("keyTree");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const sec = 1000;

const counterSpeech = document.getElementById("counterSpeech");
const counterCharacter = document.getElementById("counterCharacter");

const characterAudio = document.getElementById("characterAudio");
const counterAudio = document.getElementById("counterAudio");

let key = false;
let gotKey = false;


gameWindow.onclick = function(e){
    if (mainCharacterSpeech.style.opacity == 0 && counterCharacter.style.opacity == 0){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // x postition within the element
    var y = e.clientY - rect.top; // y postition within the element
    console.log(x + " " + y)
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";


        switch(e.target.id){
            case "door":
                if(gotKey === true){
                    showMessage(mainCharacterSpeech, characterAudio, "I have unlocked this door!...");
                    tree.style.opacity = 0;
                    tilemap.src = "img/InsideHouseTileMap.png";
                }
                else{
                    key = true;
                    showMessage(mainCharacterSpeech, characterAudio, "Oh this door is locked...");
                    setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                    setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "You need a key for this door...");
                    setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "Where can i find this key?...");
                    setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "The key is hidden behind one of the trees...");
                    setTimeout(function () { counterCharacter.style.opacity = 0; }, 16 * sec);
                }
                
                break;
            case "keyTree":
                //IMPORTANT!!!!
                // I dont know why but only when i click somewhere near the edge of the tree it wil do something.
                console.log("this is a tree");
                if(key === true){
                    showMessage(mainCharacterSpeech, characterAudio, "I have found the housekeys!...");
                    gotKey = true;
                }
                else{
                    return;
                }
                break;
            default:
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
        }
        }
}

function showMessage(targetBubble, targetAudio, message) {
    targetAudio.currentTime = 0;
    targetAudio.play();
    targetBubble.innerHTML = message;
    targetBubble.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec, targetBubble, targetAudio);
}
function hideMessage(targetBubble, targetAudio) {
    targetAudio.pause();
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
}

