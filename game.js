// Iteration 2: Generate 2 random number and display it on the screen

let box1 = document.querySelector('#number1')
let box2 = document.querySelector('#number2')

let num1 = Math.round(Math.random() * 100)
let num2 = Math.round(Math.random() * 100)

box1.innerHTML = num1
box2.innerHTML = num2


// Iteration 3: Make the options button functional

let greater = document.getElementById('greater-than')
let equalto = document.getElementById('equal-to')
let lesser = document.getElementById('lesser-than')
let score = 0

greater.onclick = () => {
    if (num1 > num2) {
        score++
        reset();

        num1 = Math.round(Math.random() * 100)
        num2 = Math.round(Math.random() * 100)

        box1.innerHTML = num1
        box2.innerHTML = num2

    }
    else {
        location.href = "./gameover.html"
    }
}

equalto.onclick = () => {
    if (num1 == num2) {
        score++
        reset();

        num1 = Math.round(Math.random() * 100)
        num2 = Math.round(Math.random() * 100)

        box1.innerHTML = num1
        box2.innerHTML = num2

    }
    else {
        location.href = "./gameover.html"
    }
}

lesser.onclick = () => {
    if (num1 < num2) {
        score++
        reset();

        num1 = Math.round(Math.random() * 100)
        num2 = Math.round(Math.random() * 100)

        box1.innerHTML = num1
        box2.innerHTML = num2

    }
    else {
        location.href = "./gameover.html"
    }
}
// Iteration 4: Build a timer for the game

let timerbox = document.querySelector("#timer")
let time = 5
let timerid

function timer () {
    time = 5;
    timerbox.innerHTML = time

    timerid = setInterval(function(){
        time-- 
        if (time==0){
            location.href = "./gameover.html"
        }        
        timerbox.innerHTML = time
    },1000)
    localStorage.setItem("score", score)
}

function reset () {
    clearInterval(timerid)
    timer();
}

timer();

let playagain = document.getElementById("play-again-button")

playagain.onclick = () => {
    location.href = "./game.html"
}
