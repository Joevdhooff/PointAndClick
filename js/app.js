document.getElementById("mainTitle").innerText = "Point And Click Adventure"

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; // x postition within the element
    var y = e.clientY - rect.top; // y postition within the element
    console.log(x + " " + y)
    mainCharacter.style.left = x + "px";
    mainCharacter.style.top = y + "px";
}
