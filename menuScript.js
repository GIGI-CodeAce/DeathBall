import { milNor,minNor,secNor,milIns,minIns,secIns,milVer,minVer,secVer,milHor,minHor,secHor } from "./gameScript.js";

export let hitbox = JSON.parse(localStorage.getItem("hitbox")) || false

export let diff = parseInt(localStorage.getItem("gameMode")) || 1;
export let skin = parseInt(localStorage.getItem("skinid")) || 1;
export let abilityy  = parseInt(localStorage.getItem("abilid")) || 1;

const diffDisplay = document.getElementById("diff-display")
const madeBy = document.getElementById("madeBy");
const welcome = document.getElementById("welcome")
const startBTN = document.getElementById("start")

const exitModes = document.getElementById("exit-modes")
const exitRecords = document.getElementById("exit-records")
const modesUI = document.querySelector(".gameModes")
const chooseMode = document.getElementById("choose")
const recordsUI = document.querySelector(".records")
const recordsBTN = document.getElementById("records")

const exitSkins = document.getElementById("exit-skins")
const exitAbilities = document.getElementById("exit-abilities")
const exitSettings = document.getElementById("exit-settings")
const exitAbout = document.getElementById("exit-abilAbout")

const skinsUI = document.querySelector(".skins")
const abilitiesUI = document.querySelector(".abilities")
const skinsPop = document.querySelector(".skins-popup")
const abilitiesPop = document.querySelector(".abilities-popup")

const settingsPop = document.querySelector(".settings-popup")
const About = document.querySelector(".about")

const aboutPop = document.querySelector(".abilAbout-popup")
const howAbilBTN = document.getElementById("how")
const popBack = document.querySelector(".popBack")
let perm = true
let x = 100
let count = 0
let name = "GIGI-codeAce"
let Oflow = true

document.addEventListener("DOMContentLoaded", function(){

  const Nrecord = document.getElementById("Nrecord")
  const Irecord = document.getElementById("Irecord")
  const Hrecord = document.getElementById("Hrecord")
  const Vrecord = document.getElementById("Vrecord")

  Nrecord.textContent = `${minNor.toString().padStart(2, '0')}:${secNor.toString().padStart(2, '0')}:${milNor.toString().padStart(2, '0')}`
  Irecord.textContent = `${minIns.toString().padStart(2, '0')}:${secIns.toString().padStart(2, '0')}:${milIns.toString().padStart(2, '0')}`
  Hrecord.textContent = `${minHor.toString().padStart(2, '0')}:${secHor.toString().padStart(2, '0')}:${milHor.toString().padStart(2, '0')}`
  Vrecord.textContent = `${minVer.toString().padStart(2, '0')}:${secVer.toString().padStart(2, '0')}:${milVer.toString().padStart(2, '0')}`

  function closePops(){
    settingsPop.style.display = "none";
    abilitiesPop.style.display = "none";
    skinsPop.style.display = "none";
    modesUI.style.display = "none";
    recordsUI.style.display = "none";
    aboutPop.style.display = "none";
    popBack.style.display = "none"
  }

  document.addEventListener('keydown',function(event){
    if(event.key === "x" || event.key === "X"){
      closePops()
    }
  })

  function showPop(btn, article) {
    if (btn && Oflow) {
        btn.addEventListener("click", function () {
            article.style.display = "block";
            popBack.style.display = "block"
            Oflow = false
        });
    }
}

function closePop(btn, article) {
    if (btn) {
        btn.addEventListener("click", function () {
            article.style.display = "none";
            popBack.style.display = "none"
            Oflow = true
        });
    }
}

  showPop(About, settingsPop);
  closePop(exitSettings, settingsPop);
  showPop(abilitiesUI,abilitiesPop)
  closePop(exitAbilities,abilitiesPop)
  showPop(skinsUI,skinsPop)
  closePop(exitSkins,skinsPop)
  showPop(chooseMode,modesUI)
  closePop(exitModes,modesUI)
  showPop(recordsBTN,recordsUI)
  closePop(exitRecords,recordsUI)
  showPop(howAbilBTN,aboutPop)
  closePop(exitAbout,aboutPop)
  
  function contentAdd() {
    count++;
    madeBy.textContent += name + " "
    welcome.textContent += "Welcome Welcome "
    if (count === 20) {
      clearInterval(contentInterval)
    }
  }

  const skin1 = document.getElementById("skin1")
  const skin2 = document.getElementById("skin2")
  const skin3 = document.getElementById("skin3")
  const skin4 = document.getElementById("skin4")
  const skin5 = document.getElementById("skin5")
  const skin6 = document.getElementById("skin6")

  const abil1 = document.getElementById("abil1")
  const abil2 = document.getElementById("abil2")
  const abil3 = document.getElementById("abil3")

  const redDesc = document.getElementById("red-desc")
const cyanDesc = document.getElementById("cyan-desc")
const yellowDesc = document.getElementById("yellow-desc")

  function SelectEvent(element,int,desc){
    element.addEventListener("click", function(){
      if(element === skin1 || element === skin2 ||
         element === skin3 || element === skin4 ||
         element === skin5 || element === skin6){
        skin = int
        delOthers2()
        element.style.borderColor = "green"
        localStorage.setItem("skinid", skin.toString());
      }else{
        delOthers3()
        delOthers4()
        abilityy = int
        element.style.borderColor = "green"
        desc.style.display = "block"
        localStorage.setItem("abilid", abilityy.toString());
      }
    })
  }

SelectEvent(skin1,1)
SelectEvent(skin2,2)
SelectEvent(skin3,3)
SelectEvent(skin4,4)
SelectEvent(skin5,5)
SelectEvent(skin6,6)

SelectEvent(abil1,1,redDesc)
SelectEvent(abil2,2,cyanDesc)
SelectEvent(abil3,3,yellowDesc)

switch (skin) {
  case 1:
    delOthers2()
    skin1.style.borderColor = "green"
    break;
  case 2:
    delOthers2()
    skin2.style.borderColor = "green"
    break;
  case 3:
    delOthers2()
    skin3.style.borderColor = "green"
    break;
  case 4:
    delOthers2()
    skin4.style.borderColor = "green"
    break;
  case 5:
    delOthers2()
    skin5.style.borderColor = "green"
    break;
  case 6:
    delOthers2()
    skin6.style.borderColor = "green"
    break;
}

switch (abilityy) {
  case 1:
    delOthers3()
    delOthers4()
    abil1.style.borderColor = "green"
    redDesc.style.display = "block"
    break;
  case 2:
    delOthers3()
    delOthers4()
    abil2.style.borderColor = "green"
    cyanDesc.style.display = "block"
    break;
  case 3:
    delOthers3()
    delOthers4()
    abil3.style.borderColor = "green"
    yellowDesc.style.display = "block"
    break;
}
function delOthers2(){
  skin1.style.borderColor = "black"
  skin2.style.borderColor = "black"
  skin3.style.borderColor = "black"
  skin4.style.borderColor = "black"
  skin5.style.borderColor = "black"
  skin6.style.borderColor = "black"
}
function delOthers3(){
  abil1.style.borderColor = "black"
  abil2.style.borderColor = "black"
  abil3.style.borderColor = "black"
}
function delOthers4(){
  redDesc.style.display = "none"
  cyanDesc.style.display = "none"
  yellowDesc.style.display = "none"
}
  
  startBTN.addEventListener("click", function(){
    window.location.href = 'DBgame.html'
  })
  
  function creditsAnimate() {
    madeBy.style.transition = 'transform 1s ease';
    welcome.style.transition = 'transform 1s ease';
    if (perm) {
      perm = false;
      madeBy.style.transform = `translateX(${x}px)`;
      welcome.style.transform = `translateX(-${x}px)`;
    } else {
      perm = true;
      welcome.style.transform = `translateX(${x}px)`;
      madeBy.style.transform = `translateX(-${x}px)`;
    }
  }
  
  setInterval(creditsAnimate, 2000);
  window.onload = creditsAnimate
  const contentInterval = setInterval(contentAdd, 1);

  let hitboxBtn = document.getElementById("hitbox-btn")
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
  
  /////////////////
  
  const canvasEl = document.getElementById("canvasid2");
  const ctx = canvasEl.getContext('2d');
  
  function getRandomItemFromArray(array) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
  }
  
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
  
  const color = [
      '#FF0000', // Red
      '#FFD700', // Gold
      '#00FF00', // Lime
      '#FF00FF', // Magenta
      '#00FFFF', // Cyan
      '#FF4500', // OrangeRed
      '#FF8C00', // DarkOrange
      '#32CD32', // LimeGreen
      '#FF69B4', // HotPink
      '#FFFF00', // Yellow
      '#9400D3', // DarkViolet
      '#00FF7F', // SpringGreen
      '#8A2BE2'  // BlueViolet
    ];
  
  const circle = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      dx: 11,
      dy: 9,
      size: 30
  };
  
  
  function circleDraw() {
   ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = 'hsl(279, 87%, 25%)';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
  
  function update() {
    let randCol = getRandomItemFromArray(color);
  
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  
    circleDraw();
  
    circle.y += -circle.dy;
  
    circle.x += circle.dx;
  
    if (circle.x + circle.size > canvasEl.width || circle.x - circle.size < 0) {
        circle.dx *= -1;
  
    } else if (circle.y + circle.size > canvasEl.height || circle.y - circle.size < 0) {
        circle.dy *= -1;
  
    }
  
    requestAnimationFrame(update);
  }
  
  update();
  
  window.addEventListener('resize', function () {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
  });

  const normalGame = document.querySelector(".normal")
  const insaneGame = document.querySelector(".insane")
  const horizontalGame = document.querySelector(".horizontal")
  const verticalGame = document.querySelector(".vertical")
  
  function modeStatus(){
    switch (diff) {
      case 1:
        diffDisplay.textContent = "Normal Mode"
        delOthers()
        normalGame.style.borderColor = "green"
        break;
      case 2:
        diffDisplay.textContent = "Insane Mode"
        delOthers()
        insaneGame.style.borderColor = "green"
        break;
      case 3:
        diffDisplay.textContent = "Horizontal Mode"
        delOthers()
        horizontalGame.style.borderColor = "green"
        break;
      case 4:
        diffDisplay.textContent = "Vertical Mode"
        delOthers()
        verticalGame.style.borderColor = "green"
        break;
    }
  }
  if(diffDisplay){
    modeStatus()
  }
  
    normalGame.addEventListener("click", function(){
        diff = 1
        others()
  })
    insaneGame.addEventListener("click", function(){
        diff = 2
        others()
      })
    horizontalGame.addEventListener("click", function(){
        diff = 3
        others()
      })
    verticalGame.addEventListener("click", function(){
        diff = 4
        others()
      })
  
      function others(){
        localStorage.setItem("gameMode", diff.toString());
        modesUI.style.display = "none"
        popBack.style.display = "none"
        modeStatus()
      }
      function delOthers(){
        normalGame.style.borderColor = "black"
        insaneGame.style.borderColor = "black"
        horizontalGame.style.borderColor = "black"
        verticalGame.style.borderColor = "black"
      }
  

})
