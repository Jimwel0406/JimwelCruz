let button = document.querySelectorAll("div.btn-container span");
let displayInput = document.querySelector("#result");
let yourInput = [];
let operator = ["+", "-", "x", "÷"];
let numbers = ["0","1","2","3","4","5","6","7","8","9",];
let isInputValid = 1;
let currentDotOperand = "";
let previousDotOperand = [];

//Addition
button[15].addEventListener("click", function() {
  for (let i = 0; i < operator.length; i++) {
    if (yourInput[yourInput.length - 1] === operator[i] || yourInput[yourInput.length - 1] === "." || displayInput.innerHTML === "") {
      isInputValid = 0;
      i = operator.length;
    }
  }
  if (isInputValid != 0) {
    displayInput.innerHTML += "+";
    yourInput.push("+");
    previousDotOperand.push(currentDotOperand);
    currentDotOperand = "";
  }   
  isInputValid = 1;
});

//Subtraction
button[11].addEventListener("click", function() {
  for (let i = 0; i < operator.length; i++) {
    if (yourInput[yourInput.length - 1] === operator[i] || yourInput[yourInput.length - 1] === "." || displayInput.innerHTML === "") {
      isInputValid = 0;
      i = operator.length;
    }
  }
  if (isInputValid != 0) {
    displayInput.innerHTML += "-";
    yourInput.push("-");
    previousDotOperand.push(currentDotOperand);
    currentDotOperand = "";
  }   
  isInputValid = 1;
});

//Multiplication
button[7].addEventListener("click", function() {
  for (let i = 0; i < operator.length; i++) {
    if (displayInput.innerHTML.split("")[displayInput.innerHTML.split("").length - 1] === operator[i] || yourInput[yourInput.length - 1] === "."
    || displayInput.innerHTML === "") {
      isInputValid = 0;
      i = operator.length;
    }
  }
  if (isInputValid != 0) {
    displayInput.innerHTML += "x";
    yourInput.push("*");
    previousDotOperand.push(currentDotOperand);
    currentDotOperand = "";
  }   
  isInputValid = 1;
});

//Division
button[3].addEventListener("click", function() {
  for (let i = 0; i < operator.length; i++) {
    if (displayInput.innerHTML.split("")[displayInput.innerHTML.split("").length - 1] === operator[i] || yourInput[yourInput.length - 1] === "." 
    || displayInput.innerHTML === "") {
      isInputValid = 0;
      i = operator.length;
    }
  }
  if (isInputValid != 0) {
    displayInput.innerHTML += "÷";
    yourInput.push("/");
    previousDotOperand.push(currentDotOperand);
    currentDotOperand = "";
  }   
  isInputValid = 1;
});

//Percent sign button
button[1].addEventListener("click", function() {
  for (let i = 0; i < operator.length; i++) {
    if (displayInput.innerHTML.split("")[displayInput.innerHTML.split("").length - 1] === operator[i] || yourInput[yourInput.length - 1] === "."
    || displayInput.innerHTML === "" || displayInput.innerHTML.split("")[displayInput.innerHTML.split("").length - 1] === "%") {
      isInputValid = 0;
      i = operator.length;
    }
  }

  if (isInputValid != 0) {
    displayInput.innerHTML += "%";
    yourInput.push("%");
  }
  isInputValid = 1;
})

//Button number 00
button[16].addEventListener("click", function() {
  displayInput.innerHTML += "00";
  yourInput.push("00");
})

//Button number 0
button[17].addEventListener("click", function() {
  displayInput.innerHTML += "0";
  yourInput.push("0");
})

//Button number 1
button[12].addEventListener("click", function() {
  displayInput.innerHTML += "1";
  yourInput.push("1");
})

//Button number 2
button[13].addEventListener("click", function() {
  displayInput.innerHTML += "2";
  yourInput.push("2");
})

//Button number 3
button[14].addEventListener("click", function() {
  displayInput.innerHTML += "3";
  yourInput.push("3");
})

//Button number 4
button[8].addEventListener("click", function() {
  displayInput.innerHTML += "4";
  yourInput.push("4");
})

//Button number 5
button[9].addEventListener("click", function() {
  displayInput.innerHTML += "5";
  yourInput.push("5");
})

//Button number 6
button[10].addEventListener("click", function() {
  displayInput.innerHTML += "6";
  yourInput.push("6");
})

//Button number 7
button[4].addEventListener("click", function() {
  displayInput.innerHTML += "7";
  yourInput.push("7");
})

//Button number 8
button[5].addEventListener("click", function() {
  displayInput.innerHTML += "8";
  yourInput.push("8");
})

//Button number 9
button[6].addEventListener("click", function() {
  displayInput.innerHTML += "9";
  yourInput.push("9");
})

//Dot button
button[18].addEventListener("click", function() {
  for (let i = 0; i < operator.length; i++) {
    if (yourInput[yourInput.length - 1] === ".") {
      isInputValid = 0;
      i = operator.length;
    }
  }

  if (currentDotOperand === "") {
    if (isInputValid) {
      displayInput.innerHTML += ".";
      yourInput.push(".");
      currentDotOperand = ".";
    }
  }
  isInputValid = 1;
})

//Delete button
button[2].addEventListener("click", function() {
  let cloneDisplayInput = displayInput.innerHTML.split("");
  let lastIndexInputValue = cloneDisplayInput.pop();
  for (let i = 0; i < operator.length; i++) {
    if (lastIndexInputValue === operator[i]) {
      i = operator.length;
      if (previousDotOperand.length != 0) {
        currentDotOperand = previousDotOperand.pop();
      } else {
        currentDotOperand = "";
      }
    }
  }
  
  displayInput.innerHTML = cloneDisplayInput.join("");
  yourInput.pop();
})

//Clear button
button[0].addEventListener("click", function() {
  currentDotOperand = "";
  previousDotOperand = [];
  yourInput = [];
  displayInput.innerHTML = "";
})

//Equal
button[19].addEventListener("click", function() {

  let yourInput_2 = displayInput.innerHTML.split("");
  
  if (yourInput.join("").match(/[%]/g) === null) {
    //This if statement intentionally left blank.
  } else {
    for (let i = 0; i < yourInput_2.join("").match(/[%]/g).length; i++) { 
      let percentIndexPosition = yourInput.join("").indexOf("%");
      let percentNumberIndexPosition;
      let percentValue;
      let yourNewInput = [];

      for (let x = percentIndexPosition; x >= 0; x--) {
        if (x === 0) {
          percentNumberIndexPosition = 0;
        }
        if (yourInput[x] === operator[0] || yourInput[x] === operator[1] || yourInput[x] === operator[2] || yourInput[x] === operator[3]) {
          percentNumberIndexPosition = x + 1;
          x = -1;
        }
      }

      percentValue = Number(yourInput.slice(percentNumberIndexPosition, percentIndexPosition).join("")) / 100;
      percentValue = percentValue.toString().split("");

      for (let y = percentNumberIndexPosition; y <= percentIndexPosition; y++) {
        delete yourInput[y];
      }

      for (let z = 0; z < yourInput.length; z++) {
        if (yourInput[z] != undefined) {
          yourNewInput.push(yourInput[z]);
        }
      }

      yourInput = yourNewInput;

      yourInput.splice(percentNumberIndexPosition, 0, percentValue);

      yourInput = yourInput.flat();

    }
  }
  
  for (let i = 0; i < operator.length; i++) {
    if (yourInput_2[yourInput_2.length - 1] === operator[i] || yourInput_2[yourInput_2.length - 1] === "." || yourInput_2.length === 0) {
      isInputValid = 0;
      i = operator.length;
    }
  }

  if (isInputValid === 1) {
    displayInput.innerHTML = eval(yourInput.join(""));
    yourInput = displayInput.innerHTML.split("");
    if (yourInput.includes(".")) {
      currentDotOperand = ".";
      previousDotOperand = [];
    } else { 
      currentDotOperand = "";
      previousDotOperand = [];
    }
  }

  isInputValid = 1;

})
