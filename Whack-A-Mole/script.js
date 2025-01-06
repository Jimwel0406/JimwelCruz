const number = [0,1,2,3,4,5,6,7,8] //we will use this as index of tiles
  const colors = ["lime","red"];
  let heartLives = 3;
  let heart = document.querySelectorAll('div#heart');
  let scoreShadow = document.querySelector("div#scoreShadow");
  let grid = document.querySelector("div.grid");
  let tiles = grid.querySelectorAll("div");
  let score = document.getElementById('score'); //Display the score
  let displayTime = document.getElementById('time');
  let highestScore = document.getElementById('highestScore');
  let animationPoints = document.getElementById('addMinus');
  let currentPoints = 0;
  let highestPoints = 0;
  let dataId;
  let myFunction;
  let setTimer;
  let time = 15;
  let timeChoose = 15;
  let addBgSpeed = 900;
  let clearBgSpeed = 700;
  let millisecond = 600;
  let speedAnimation = 0;
  let points = 0; //Set default points
  let randomNumber; //Return the random sort "number"
  let randomColors; //Return the random sort "colors"
  let i = 0;
  let x = 0;
  let y = 1;
  let isCustomizeContainerShow = 0;

  function toggleCustomizeContainer() {
  
    if (isCustomizeContainerShow === 0) {
      isCustomizeContainerShow = 1;
      document.querySelector(".customize-container").style.display = "flex";
      document.querySelector(".customize-button > i").className = "fa-solid fa-xmark";
      document.querySelector(".customize-button > i").style.color = "red";
      document.querySelector(".customize-button > i").style.paddingBlock = "7px";
    } else {
      isCustomizeContainerShow = 0;
      document.querySelector(".customize-container").style.display = "none";
      document.querySelector(".customize-button > i").className = "fa-solid fa-wrench";
      document.querySelector(".customize-button > i").style.color = "#e8f443";
      document.querySelector(".customize-button > i").style.paddingBlock = "";
    }

  }

  //Add event in button (time) and (speed).
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".time-container > button")[i].addEventListener("click", () => {setTime(i);});
    document.querySelectorAll(".speed-container > button")[i].addEventListener("click", () => {setSpeed(i);});
  }

  function setTime(buttonNum) {
    switch (buttonNum) {

      case 0:
        time = 15;
        timeChoose = 15;
        displayTime.innerHTML = timeChoose + "s";
        document.querySelectorAll(".time-container > button")[0].classList.add("active-time-btn");
        document.querySelectorAll(".time-container > button")[1].classList.remove("active-time-btn");
        document.querySelectorAll(".time-container > button")[2].classList.remove("active-time-btn");
      break;
      
      case 1:
        time = 30;
        timeChoose = 30;
        displayTime.innerHTML = timeChoose + "s";
        document.querySelectorAll(".time-container > button")[0].classList.remove("active-time-btn");
        document.querySelectorAll(".time-container > button")[1].classList.add("active-time-btn");
        document.querySelectorAll(".time-container > button")[2].classList.remove("active-time-btn");
      break;

      case 2:
        time = 60;
        timeChoose = 60;
        displayTime.innerHTML = timeChoose + "s";
        document.querySelectorAll(".time-container > button")[0].classList.remove("active-time-btn");
        document.querySelectorAll(".time-container > button")[1].classList.remove("active-time-btn");
        document.querySelectorAll(".time-container > button")[2].classList.add("active-time-btn");
      break;

    }
  }

  function setSpeed(buttonNum) {

    switch (buttonNum) {

        case 0:
          addBgSpeed = 900;
          clearBgSpeed = 700;
          document.querySelectorAll(".speed-container > button")[0].classList.add("active-speed-btn");
          document.querySelectorAll(".speed-container > button")[1].classList.remove("active-speed-btn");
          document.querySelectorAll(".speed-container > button")[2].classList.remove("active-speed-btn");
        break;

        case 1:
          addBgSpeed = 600;
          clearBgSpeed = 550;
          document.querySelectorAll(".speed-container > button")[0].classList.remove("active-speed-btn");
          document.querySelectorAll(".speed-container > button")[1].classList.add("active-speed-btn");
          document.querySelectorAll(".speed-container > button")[2].classList.remove("active-speed-btn");
        break;

        case 2:
          addBgSpeed = 500;
          clearBgSpeed = 450;
          document.querySelectorAll(".speed-container > button")[0].classList.remove("active-speed-btn");
          document.querySelectorAll(".speed-container > button")[1].classList.remove("active-speed-btn");
          document.querySelectorAll(".speed-container > button")[2].classList.add("active-speed-btn");
        break;

    } 
  }

  //Reset game
  function resetGame() {
    for (i = 0; i < 6; i++) {
      heart[i].style.backgroundColor = "";

      if (i <= 1) {
        heart[i].style.animation = "heartColor 300ms linear 5";
      } else if (i <= 3) {
        heart[i].style.animation = "heartColor 300ms linear 5 200ms";
      } else {
        heart[i].style.animation = "heartColor 300ms linear 5 400ms";
      }
    } 

    i = 0;
    x = 0;
    y = 1;
    document.querySelector('.start-screen').style.display = "none";
    document.querySelector(".time-container").style.opacity = "0.4";
    document.querySelector(".speed-container").style.opacity = "0.4";
    document.querySelector(".time_speed-cover").style.display = "block";
    scoreShadow.style.boxShadow = "0 0 5px 1px lime inset";
    scoreShadow.style.animation = "scoreShadow 1.5s linear infinite alternate";
    millisecond = 600;
    heartLives = 3;
    currentPoints = 0;
    points = 0;
    score.innerHTML = points;
    time = timeChoose;
    displayTime.innerHTML = timeChoose + "s";
  }
  
  //Start the game
  function gameStart() {
    randomNumber = number.sort(function() {return 0.5 - Math.random()});
    startTime();
    myFunction = setInterval(addBg, addBgSpeed);
    for (i = 0; i < 6; i++) {
      heart[i].style.animation = "refreshAnimation";
    } 
  }
  
  //Time start
  function startTime() {    
    setTimer = setInterval(gameTime, 1000);
  }
  
  //Add Background color in tiles
  function addBg() {
    points = 0;
    randomColors = colors.sort(() => {return 0.4 - Math.random()});
    tiles[randomNumber[i]].style.backgroundColor = randomColors[0];
    if (tiles[randomNumber[i]].style.backgroundColor === "lime") {
      tiles[randomNumber[i]].setAttribute("data-id", 0);
      dataId = tiles[randomNumber[i]].getAttribute("data-id");
    }
    tiles[randomNumber[i]].addEventListener("mousedown", setPoints);
    setTimeout(clearBg, clearBgSpeed);
  }
  
  //Game time
  function gameTime() {
    time = time - 1;
    if (time === 0) {
      i = 0;
      document.querySelector(".start-screen").style.display = "flex";
      document.querySelector(".time-container").style.opacity = "";
      document.querySelector(".speed-container").style.opacity = "";
      document.querySelector(".time_speed-cover").style.display = "none";
      setTimeout(checkScore, 500);
      clearInterval(setTimer);
      clearInterval(myFunction);
    }
    displayTime.innerHTML = time + "s";
  }
  
  //Check the score 
  function checkScore() {
  if (currentPoints > highestPoints) {
  highestPoints = currentPoints;
  highestScore.innerHTML = currentPoints;
  }
  else {
  highestScore.innerHTML = highestPoints;
  }
}
    
  //Set Points and Display 
  function setPoints() {
    if (tiles[randomNumber[i]].style.backgroundColor === "red") {
      gameLives();
    } else {
      if (points === 1) {
        //This if statement intentionally left blank.
      } else {
        points++;
        currentPoints += points;
        score.innerHTML = currentPoints;
      }
      tiles[randomNumber[i]].setAttribute("data-id", 1);
      dataId = tiles[randomNumber[i]].getAttribute("data-id");
    }
  }
   
  function gameLives() {
    millisecond = millisecond - 200;
    if (millisecond === 200) {
      scoreShadow.style.boxShadow = "0 0 5px 2px red inset";
    }
    speedAnimation = millisecond + "ms";
    scoreShadow.style.animation = "scoreShadow " + speedAnimation + " linear infinite alternate";
    heart[x].style.backgroundColor = "white";
    heart[y].style.backgroundColor = "white";
    x = x + 2;
    y = y + 2;
    heartLives--;
    if (heartLives === 0) {
      document.querySelector(".start-screen").style.display = "flex";
      document.querySelector(".time-container").style.opacity = "";
      document.querySelector(".speed-container").style.opacity = "";
      document.querySelector(".time_speed-cover").style.display = "none";
      clearInterval(myFunction);
      clearInterval(setTimer);
      if (currentPoints > highestPoints) {
        highestPoints = currentPoints;
        highestScore.innerHTML = currentPoints;
      } else {
        highestScore.innerHTML = highestPoints;
      }  
    }
  }

  //Remove the Background color in tiles
  function clearBg() {
  if (tiles[randomNumber[i]].style.backgroundColor === "lime") {
    if (dataId === "0") {
      millisecond = millisecond - 200;
      heart[x].style.backgroundColor = "white";
      heart[y].style.backgroundColor = "white";
      heartLives = heartLives - 1;
      speedAnimation = millisecond + "ms";
      scoreShadow.style.animation = "scoreShadow " + speedAnimation + " linear infinite alternate";
      x = x + 2;
      y = y + 2;
      }
    }
    
    if (millisecond === 200) {
      scoreShadow.style.boxShadow = "0 0 5px 2px red inset";
    }
    
    if (heartLives === 0) {
      document.querySelector(".start-screen").style.display = "flex";
      document.querySelector(".time-container").style.opacity = "";
      document.querySelector(".speed-container").style.opacity = "";
      document.querySelector(".time_speed-cover").style.display = "none";
      clearInterval(myFunction);
      clearInterval(setTimer);
      if (currentPoints > highestPoints) {
        highestPoints = currentPoints;
        highestScore.innerHTML = currentPoints;
      } else {
        highestScore.innerHTML = highestPoints;
      }  
    }
    
    tiles[randomNumber[i]].style.backgroundColor = "white";
    tiles[randomNumber[i]].removeEventListener("mousedown", setPoints);
    if (tiles[randomNumber[i]].style.backgroundColor === "lime") {
      tiles[randomNumber[i]].setAttribute("data-id", 0);
    }
    i++;
    if (i === 9) {
      i = 0;
      randomNumber = number.sort(function() {return 0.5 - Math.random()});
    }
  }
  