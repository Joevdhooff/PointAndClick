document.getElementById("mainTitle").innerText = "Point And Click Adventure"

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 7;
const doorMessage = document.getElementById("doorAlert");
var audio = new Audio("http://music.ogg");


gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // x postition within the element
    var y = e.clientY - rect.top; // y postition within the element
    console.log(x + " " + y)

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    switch(e.target.id){
        case "door":
            doorMessage.style.display = "flex";
            break;
        case "tree1":
            console.log("boom")
            break;
        default:
            doorMessage.style.display = "none";
    }
}


