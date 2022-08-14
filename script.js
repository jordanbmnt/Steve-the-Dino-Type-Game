const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const counter = document.getElementById("counter");
const alertP1 = document.getElementById("alert");
const alertP2 = document.getElementById("alertP2");
const char = document.getElementById("char");
let counterVar = 0;
let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
);

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 300);
    }
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if (cactusLeft < 55 && cactusLeft > 0 && dinoTop >= 106) {
        cactus.style.animation = "none";
        char.style.animation = "none";
        counterVar = 0;
        alertP1.style.display = "block";
        alertP2.style.display = "block";
    } else if (cactusLeft < 55) {  
        counterVar += 1;
    }
    counter.innerHTML = Math.floor(counterVar / 8);

    if(parseInt(counter.innerHTML) == 15){
        cactus.style.animationDuration = '0.9s' 
        cactus.style.backgroundColor = 'red';
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
});
