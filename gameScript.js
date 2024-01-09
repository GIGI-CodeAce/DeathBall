import { diff, skin, abilityy } from "./menuScript.js";
export let hitbox = JSON.parse(localStorage.getItem("hitbox")) || false

export let milNor = JSON.parse(localStorage.getItem("milNor")) || 0;
export let minNor = JSON.parse(localStorage.getItem("minNor")) || 0;
export let secNor = JSON.parse(localStorage.getItem("secNor")) || 0;

export let milIns = JSON.parse(localStorage.getItem("milIns")) || 0;
export let minIns = JSON.parse(localStorage.getItem("minIns")) || 0;
export let secIns = JSON.parse(localStorage.getItem("secIns")) || 0;

export let milVer = JSON.parse(localStorage.getItem("milVer")) || 0;
export let minVer = JSON.parse(localStorage.getItem("minVer")) || 0;
export let secVer = JSON.parse(localStorage.getItem("secVer")) || 0;

export let milHor = JSON.parse(localStorage.getItem("milHor")) || 0;
export let minHor = JSON.parse(localStorage.getItem("minHor")) || 0;
export let secHor = JSON.parse(localStorage.getItem("secHor")) || 0;

const timerUI = document.getElementById("timer")

const delayUI = document.getElementById("delay")
const replayBTN = document.getElementById("replay-btn")
const menuBTN = document.getElementById("menu-btn")
const popBack = document.querySelector(".popBack")
let countG = 3
let gameOver = false
let gameStarted = false
 let milSecs = 0
 let secs = 0
 let mins = 0
let timerInterval;

document.addEventListener("DOMContentLoaded", function(){

 let hitboxBtn = document.getElementById("hitboxBtn")
 if(hitbox){
   switch (hitbox) {
     case true:
       hitboxBtn.textContent = "ON"
       break;
     case false:
       hitboxBtn.textContent = "OFF"
       break;
   }
 }
 hitboxBtn.addEventListener("click", function(){
   if(hitboxBtn.textContent === "ON"){
     hitboxBtn.textContent = "OFF"
     hitbox = false
   }else{
     hitboxBtn.textContent = "ON"
     hitbox = true
   }
   localStorage.setItem("hitbox", hitbox.toString());
 })

    const canvas = document.querySelector("#canvasid1");
    const ctx = canvas.getContext('2d');

        canvas.width = 555;
        canvas.height = 500;

const circle1 = {
    x: 275,
    y: 250,
    dx: 11,
    dy: 8,
    size: 30
}
const circle2 = {
    x: 275,
    y: 250,
    dx: 11,
    dy: 8,
    size: 30
}

const player = {
    w: 40,
    h: 60,
    x: 20,
    y: 220,
    speed: 5,
    dx: 0,
    dy: 0,
    keys: {},
    facingLeft: false
};

const settingsPop = document.querySelector(".settings-popup")
const About = document.querySelector(".about")
const exitSettings = document.getElementById("exit-settings")

function showPop(btn, article) {
    if (btn) {
        btn.addEventListener("click", function () {
            article.style.display = "block";
            popBack.style.display = "block"
        });
    }
}
function closePop(btn, article) {
    if (btn) {
        btn.addEventListener("click", function () {
            article.style.display = "none";
            popBack.style.display = "none"
        });
    }
}
  showPop(About, settingsPop);
  closePop(exitSettings, settingsPop);

  document.addEventListener('keydown',function(event){
    if(event.key === "x" || event.key === "X"){
        settingsPop.style.display = "none";
        popBack.style.display = "none"
    }
  })

const wall1 = document.getElementById("wall1");
const wall2 = document.getElementById("wall2");
const wall3 = document.getElementById("wall3");

const diff1 = document.getElementById("difficulty1")
const diff2 = document.getElementById("difficulty2")
const diff3 = document.getElementById("difficulty3")
const diff4 = document.getElementById("difficulty4")

function delOthers(){
    diff1.style.display = "none"
    diff2.style.display = "none"
    diff3.style.display = "none"
    diff4.style.display = "none"
}

function difficulty() {

    switch (diff) {
        case 1:
            delOthers()
            diff1.style.display = "block"
            canvas.style.background = `url("${wall1.src}")`;
            document.getElementById("canvasid1").style.borderTopColor = "hsl(15, 80%, 26%)";
            document.getElementById("canvasid1").style.borderBottomColor = "hsl(15, 80%, 26%)";
            break;
        case 2:
            circle1.dx -= 2
            circle1.dy -= 2
            circle2.dx -= 2
            circle2.dy -= 2
            delOthers()
            diff2.style.display = "block"
            canvas.style.background = `url("${wall2.src}")`;
            document.getElementById("canvasid1").style.borderTopColor = "#e60000";
            document.getElementById("canvasid1").style.borderBottomColor = "#e60000";
            break;
        case 3:
            player.speed += 1
            delOthers()
            diff3.style.display = "block"
            canvas.style.background = `url("${wall3.src}")`;
            canvas.style.backgroundSize = "60%";
            document.getElementById("canvasid1").style.borderTopColor = "hsl(0, 0%, 40%)";
            document.getElementById("canvasid1").style.borderBottomColor = "hsl(0, 0%, 40%)";
            break;
        case 4:
            player.speed += 1
            delOthers()
            diff4.style.display = "block"
            canvas.style.background = `url("${wall3.src}")`;
            canvas.style.backgroundSize = "60%";
            document.getElementById("canvasid1").style.borderTopColor = "hsl(0, 0%, 40%)";
            document.getElementById("canvasid1").style.borderBottomColor = "hsl(0, 0%, 40%)";
            break;
    }
}

difficulty();

function getRandomItemFromArray(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const color = [
    '#FF6F6F', // Red
    '#FFD082', // Orange
    '#FFFF99', // Yellow
    '#1AFF8C', // Green
    '#8080FF', // Blue
    '#9933FF', // Indigo
    '#FF99FF', // Magenta
    '#FF8CBF', // Pink
    '#66FFFF', // Turquoise
    '#FF9966', // Coral
    '#DAA67F', // Brown
    '#FFEAB2', // Gold
    '#A3FFB3', // Spring Green
    '#DAA3FF', // Lavender
    '#A3FFAA', // Lime Green
    '#FF8D8D', // Red
    '#FFE599', // Orange
    '#FFFFB3', // Yellow
    '#66FFB2', // Green
  ];
let ballCol = getRandomItemFromArray(color)

function replay1() {
    window.location.href = "DBgame.html";
}
function replay2(){
    window.location.href = "DBmenu.html";
}

replayBTN.addEventListener("click", replay1);
menuBTN.addEventListener("click", replay2);

document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        replay1();
    }
    if (event.key === 'e' || event.key === 'E') {
        replay2();
    }
});


function newPos() {
    player.x += player.dx;
    player.y += player.dy;

    if(player.x < 0){
        player.x = 0
    }
    if(player.x + player.w > canvas.width){
        player.x = canvas.width - player.w
    }
    if(player.y < 0){
        player.y = 0
    }
    if(player.y + player.h > canvas.height){
        player.y = canvas.height - player.h
    }
}

let image;

switch (skin) {
    case 1:
        image = document.getElementById("player1");
        break;
    case 2:
        image = document.getElementById("player2");
        break;
    case 3:
        image = document.getElementById("player3");
        break;
    case 4:
        image = document.getElementById("player4");
        break;
    case 5:
        image = document.getElementById("player5");
        break;
    case 6:
        image = document.getElementById("player6");
        break;
    default:
        image = document.getElementById("player1");
        break;
}

function ability() {
    switch (abilityy) {
        case 1:
            abilityPlace(redAbility, 1);
                break;
        case 2:
            abilityPlace(cyanAbility,1);
                break;
        case 3:
            abilityPlace(yellowAbility, 1);
                break;
    }
}


function timerSaveTool(minType, milType, secType, minId, secId, milId) {

    const oldTotalMilliseconds = minType * 60 * 100 + secType * 100 + milType;
    const newTotalMilliseconds = mins * 60 * 100 + secs * 100 + milSecs;

    if (newTotalMilliseconds > oldTotalMilliseconds) {
        localStorage.setItem(minId, mins.toString());
        localStorage.setItem(secId, secs.toString());
        localStorage.setItem(milId, milSecs.toString());
    }

}
function timerSave(){
    if(diff === 1){
        timerSaveTool(minNor,milNor,secNor,"minNor","secNor","milNor")
    }else if(diff === 2){
        timerSaveTool(minIns,milIns,secIns,"minIns","secIns","milIns")
    }else if(diff === 3){
        timerSaveTool(minHor,milHor,secHor,"minHor","secHor","milHor")
    }else{
        timerSaveTool(minVer,milVer,secVer,"minVer","secVer","milVer")
    }
}

function drawCircles() {
    ctx.beginPath();
    ctx.fillStyle = ballCol;
    ctx.arc(circle1.x, circle1.y, circle1.size, 0, 2 * Math.PI);
    if(invincible){
        ctx.globalAlpha = 0.7
    }else{
        ctx.globalAlpha = 1
    }
    if (gameOver) {
        ctx.fillStyle = "black";
        ctx.strokeStyle = "red";
    }
    ctx.fill();
    ctx.stroke();

    if(hitbox){
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.rect(
            circle1.x - circle1.size,
            circle1.y - circle1.size,
            circle1.size * 2,
            circle1.size * 2
        );
        ctx.stroke();
    }

    if (diff === 2) {
        ctx.beginPath();
        ctx.fillStyle = ballCol;
        ctx.arc(circle2.x, circle2.y, circle2.size, 0, 2 * Math.PI);
        if (gameOver) {
            ctx.fillStyle = "black";
            ctx.strokeStyle = "red";
        }
        ctx.fill();
        ctx.stroke();

        if(hitbox){
            ctx.beginPath();
            ctx.strokeStyle = 'green';
            ctx.rect(
                circle2.x - circle2.size,
                circle2.y - circle2.size,
                circle2.size * 2,
                circle2.size * 2
            );
            ctx.stroke();
        }
        }
}


function drawPlayer() {
    if (!player.facingLeft) {
        ctx.save();
        ctx.translate(player.x + player.w, player.y);
        ctx.scale(-1, 1);
        ctx.drawImage(image, 0, 0, player.w, player.h);
        ctx.restore();
    }else {
        ctx.drawImage(image, player.x, player.y, player.w, player.h);
    }
if (hitbox){

            ctx.beginPath();
        ctx.strokeStyle = 'orange';
        ctx.rect(player.x, player.y, player.w, player.h);
        ctx.stroke();
    }
}

function checkCollision() {
    function yapping(){
        gameOver = true;
        circle2.dx = 0;
        circle2.dy = 0;
        circle1.dx = 0;
        circle1.dy = 0;
        player.dx = 0;
        player.dy = 0;
        replayBTN.style.display = "inline";
        menuBTN.style.display = "inline";
        clearTimeout(timerInterval);
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.font = "30px Arial";
        ctx.fillText("Game Over", 200, 100);
    }
    const reducedWidth = player.w - 10;
    const reducedHeight = player.h - 10;
    
    const distanceX1 = Math.abs(circle1.x - (player.x + reducedWidth / 2));
    const distanceY1 = Math.abs(circle1.y - (player.y + reducedHeight / 2));

    const distanceX2 = Math.abs(circle2.x - (player.x + reducedWidth / 2));
    const distanceY2 = Math.abs(circle2.y - (player.y + reducedHeight / 2));

    if (distanceX1 < (reducedWidth / 2 + circle1.size) &&
    distanceY1 < (reducedHeight / 2 + circle1.size) && !invincible){
        yapping()
        timerSave()
    }else if(distanceX2 < (reducedWidth / 2 + circle2.size) &&
            distanceY2 < (reducedHeight / 2 + circle2.size) &&
            diff === 2 && !invincible){
        yapping()
        timerSave()
    }
}

let timeoutDelay;
let invincible = false
let X2Speed = false;
let freeze = false
let seconds1 = 9
let seconds2 = 4

const abilDelay = document.getElementById("abil-delay")
const abilDuration = document.getElementById("abil-duration")

const redAbility = document.getElementById("redSheild");
const cyanAbility = document.getElementById("cyanSheild");
const yellowAbility = document.getElementById("yellowSheild");
const OFFability = document.getElementById("offSheild");

function abilityPlace(ability) {
    ctx.drawImage(ability, 5, 5, 25, 27);
}

function count1() {
    if(gameStarted && !gameOver){
        seconds1--
        abilDelay.innerHTML = seconds1 + "&nbsp;-&nbsp;";
    }
    if (seconds1 === 0) {
        document.body.style.backgroundColor = "hsl(284, 35%, 8%)"
        setTimeout(() => {
            document.body.style.backgroundColor = "hsl(284, 35%, 10%)"
        }, 100);
        seconds1 += 9;
        ability();
    } else {
        timeoutDelay = setTimeout(count1, 1000);
    }
}

function count2() {
if(gameStarted && !gameOver){
    seconds2--;
        abilDuration.textContent = seconds2
    }
    if (seconds2 === 0) {
        seconds2 += 4
        ability();
    } else {
        timeoutDelay = setTimeout(count2, 1000);
    }
}
function abilityMechanics(event) {
    if (event.key === 'Q' || event.keyCode === 81 || event.type === "click") {
        if (seconds1 === 9 && gameStarted && !gameOver) {
            document.body.style.backgroundColor = "hsl(284, 35%, 13%)"
            setTimeout(() => {
                document.body.style.backgroundColor = "hsl(284, 35%, 10%)"
            }, 100);
            count1();
            count2()
            switch (abilityy) {
                case 1:
                    X2Speed = true;
                    setTimeout(() => {
                        X2Speed = false;
                    }, 3000);
                    break;
                case 2:
                    freeze = true;
                    setTimeout(() => {
                        freeze = false;
                    }, 3000);
                    break;
                case 3:
                    invincible = true;
                    image.style.opacity = 0.5
                    setTimeout(() => {
                        invincible = false;
                    }, 3000);
                    break;
            }
        }
    }
}

document.addEventListener('keydown', abilityMechanics);
document.addEventListener('click', abilityMechanics);

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawPlayer();
        newPos();
        drawCircles();
        moveCircles();
        checkCollision();
        ability()

        if(seconds1 === 9 || seconds1 === 0){
            ability()
        }else{
            abilityPlace(OFFability);
        }


        requestAnimationFrame(update);
}

function movePlayer() {
    if (gameStarted && !gameOver){
        if(diff != 3){
            if (player.keys.ArrowRight || player.keys.Right || player.keys.d || player.keys.D) {
                if(X2Speed){
                    player.dx = player.speed * 2;
                    player.facingLeft = false;
                }else{
                    player.dx = player.speed;
                    player.facingLeft = false;
                }
            }else if (player.keys.ArrowLeft || player.keys.Left || player.keys.a || player.keys.A) {
                if(X2Speed){
                    player.dx = -player.speed * 2;
                    player.facingLeft = true;
                }else{
                    player.dx = -player.speed;
                    player.facingLeft = true;
                }
            } else {
                player.dx = 0;
            }
        }
        if(diff != 4){
        if (player.keys.ArrowDown || player.keys.Down || player.keys.s || player.keys.S) {
            if(X2Speed){
                player.dy = player.speed * 2;
            }else{
                player.dy = player.speed;
            }
        }else if (player.keys.ArrowUp || player.keys.Up || player.keys.w || player.keys.W) {
            if(X2Speed){
                player.dy = -player.speed * 2;
            }else{
                player.dy = -player.speed;
            }
        } else {
            player.dy = 0;
        }
    }
    }
}
const randDirection = [1, -1];
let direction1X = getRandomItemFromArray(randDirection);
let direction1Y = getRandomItemFromArray(randDirection);
let direction2X = getRandomItemFromArray(randDirection);
let direction2Y = getRandomItemFromArray(randDirection);
let countt = 0
let timeoutid

let ballDelay = 25
if(diff === 2){
    ballDelay = 20
}

function counter() {
        countt++;
        if (countt === ballDelay) {
            clearTimeout(timeoutid);
        } else {
            timeoutid = setTimeout(counter, 100);
        }
    }
counter()
update()

function moveCircles() {
    if(direction1X === direction2X && direction1Y === direction2Y && diff === 2){
        direction1X = getRandomItemFromArray(randDirection);
        direction1Y = getRandomItemFromArray(randDirection);
        direction2X = getRandomItemFromArray(randDirection);
        direction2Y = getRandomItemFromArray(randDirection);
    }else{
        if (gameStarted) {
            if (countt < ballDelay) {
                circle1.y += (circle1.dy * direction1Y) / 2;
                circle1.x += (circle1.dx * direction1X) / 2;

                circle2.y += (circle2.dy * direction2Y) / 2;
                circle2.x += (circle2.dx * direction2X) / 2;
            }else if(freeze === true){
                circle1.y += 0
                circle1.x += 0

                circle2.y += 0
                circle2.x += 0
            } else {
                circle1.y += circle1.dy * direction1Y;
                circle1.x += circle1.dx * direction1X;

                circle2.y += circle2.dy * direction2Y;
                circle2.x += circle2.dx * direction2X;
            }
    
            if (circle1.x + circle1.size > canvas.width || circle1.x - circle1.size < 0) {
                direction1X *= -1;
            }
            if (circle1.y + circle1.size > canvas.height || circle1.y - circle1.size < 0) {
                direction1Y *= -1;
            }
    
            if (diff === 2) {
    
                if (circle2.x + circle2.size > canvas.width || circle2.x - circle2.size < 0) {
                    direction2X *= -1;
                }
                if (circle2.y + circle2.size > canvas.height || circle2.y - circle2.size < 0) {
                    direction2Y *= -1;
                }
            }
        }
    }
}

function keyDown(e) {
    player.keys[e.key] = true;
    movePlayer();
}

function keyUp(e) {
    player.keys[e.key] = false;
    movePlayer();
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function updateCounter(){
    if (gameStarted) {
        milSecs++
    }
        if (milSecs === 100){
            secs++
            milSecs = 0
        }
        if (secs === 60){
            mins++
            secs = 0
        }
            timerUI.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}:${milSecs.toString().padStart(2, '0')}`
    
        timerInterval = setTimeout(updateCounter , 1)
 }
 updateCounter()

 let timeoutID
function counter1() {
    countG -= 1
    delayUI.textContent =`(${countG})`
        if (countG === 0){
        gameStarted = true
        timerUI.style.opacity = 1
        delayUI.style.opacity = 0.5
    } else {
        timeoutID = setTimeout(counter1, 1000);
    }
}
counter1()

})
