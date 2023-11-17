// Iteration 5: Store the player score and display it on the game over screen
let scorevalue = localStorage.getItem("score")
let scorebox = document.querySelector("#score-box")
let playagain = document.querySelector("#play-again-button")

scorebox.innerHTML += scorevalue

playagain.onclick = () => {
    location.href = "./game.html"
}
