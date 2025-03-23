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

  function StoreTimers(record, min, sec, mil){
    record.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${mil.toString().padStart(2, '0')}`
  }

  StoreTimers(Nrecord, minNor, secNor, milNor)
  StoreTimers(Irecord, minIns, secIns, milIns)
  StoreTimers(Hrecord, minHor, secHor, milHor)
  StoreTimers(Vrecord, minVer, secVer, milVer)

  function closePops(){
    function closePop(pop){
      pop.style.display = "none";
    }
    closePop(settingsPop);  closePop(abilitiesPop)
    closePop(skinsPop)   ;  closePop(modesUI)
    closePop(recordsUI)  ;  closePop(aboutPop)
    closePop(popBack)
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

if (skin) {
  const selectedSkin = document.getElementById("skin" + skin);
  console.log(selectedSkin);
  
  delOthers2();

  if (selectedSkin) {
    selectedSkin.style.borderColor = "green";
  }
}

if (abilityy) {
  const ability = document.getElementById("abil" + abilityy);
  delOthers3();
  delOthers4();

  if (ability) {
    ability.style.borderColor = "green";
  }

  switch (abilityy) {
    case 1:
      redDesc.style.display = "block";
      break;
    case 2:
      cyanDesc.style.display = "block";
      break;
    case 3:
      yellowDesc.style.display = "block";
      break;
  }
}

function delOthers2() {
  for (let i = 1; i <= 6; i++) {
    const skin = document.getElementById("skin" + i);
    if (skin) {
      skin.style.borderColor = "black";
    }
  }}

function delOthers3() {
  for (let i = 1; i <= 3; i++) {
    const ability = document.getElementById("abil" + i);
    if (ability) {
      ability.style.borderColor = "black";
    }
  }}

function delOthers4() {
  const descriptions = ["redDesc", "cyanDesc", "yellowDesc"];
  descriptions.forEach((descId) => {
    const desc = document.getElementById(descId);
    if (desc) {
      desc.style.display = "none";
    }
  });}
  
  startBTN.addEventListener("click", function(){
    window.location.href = './DBgame'
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
