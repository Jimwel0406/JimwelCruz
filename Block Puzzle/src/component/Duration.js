import React from "react";
import "./css/Duration.css";

let minute; 

let count = 0; 

let hour = 0;

let countStarter;

let imageName = "spider-man";

function ChangeImage() {

  let imageSelector = document.querySelector(".image-selector").value;

  if (imageSelector === "batman") {
  
    imageName = "batman";

  } else {

    imageName = "spider-man";

  }

}

function TimeState(isImageFinished) {  // These are the program or code for running the time.

  if (isImageFinished === true) { // If isImageFinished (parameter) === true.

    let currentRecord = document.querySelector(".duration-displayer").innerHTML; // Get the current duration record.

    let highestRecord = document.querySelector(".timetobeat-displayer").innerHTML; // Get the previous duration record.

    let previousTime;

    let previousCount = "";

    let previousMinute = "";

    let previousHour = "";

    document.querySelector(".block-puzzle-menu-cover").style.display = "none";

    document.querySelector(".block-puzzle-cover").style.display = "block";

    clearInterval(countStarter);

    if (highestRecord === " 00:00:00 ") {

      document.querySelector(".timetobeat-displayer").innerHTML = " " + currentRecord;

    } else {

      previousTime = highestRecord.match(/[0-9]/g);
      
      previousCount += previousTime.pop();

      previousCount += previousTime.pop();

      previousMinute += previousTime.pop();

      previousMinute += previousTime.pop();

      previousHour += previousTime.pop();

      previousHour += previousTime.pop();

      if (hour != previousHour) {

        if (Number(previousHour) < hour) {

          // This if statement intentionally left blank.

        } else {

          document.querySelector(".timetobeat-displayer").innerHTML = " " + currentRecord;

        }

      } else if (minute != undefined) {

          if (minute == previousMinute) {

            if (count != previousCount) {

              if (Number(previousCount) < count) {

                // This if statement intentionally left blank.
      
              } else {
      
                document.querySelector(".timetobeat-displayer").innerHTML = " " + currentRecord;
      
              }

            }

          } else {

            if (Number(previousMinute) < minute) {

              // This if statement intentionally left blank.

            } else {

              document.querySelector(".timetobeat-displayer").innerHTML = " " + currentRecord;

            }

          }

        } else if (previousMinute != 0) {

          document.querySelector(".timetobeat-displayer").innerHTML = " " + currentRecord;
          
        } else if (count != previousCount) {

          if (Number(previousCount) < count) {

            // This if statement intentionally left blank.
  
          } else {
  
            document.querySelector(".timetobeat-displayer").innerHTML = " " + currentRecord;
  
          }

        }

    } 

  } else {

    let srcImages = [

      "./block-puzzle-image/" + imageName + "/2.jpg",
      "./block-puzzle-image/" + imageName + "/8.jpg",
      "./block-puzzle-image/" + imageName + "/4.jpg",
      "./block-puzzle-image/" + imageName + "/5.jpg",
      "./block-puzzle-image/" + imageName + "/3.jpg",
      "./block-puzzle-image/" + imageName + "/7.jpg",
      "./block-puzzle-image/" + imageName + "/1.jpg",
      "./block-puzzle-image/" + imageName + "/6.jpg"

    ];

    for (let blockPos = 1; blockPos <= srcImages.length; blockPos++) {

      document.querySelectorAll(".block-puzzle-box > button > img")[blockPos].src = require(`${srcImages[blockPos - 1]}`);

    }

    document.querySelectorAll(".block-puzzle-box > button")[0].innerHTML = "";

    document.querySelectorAll(".block-puzzle-box > button")[0].id = "empty-block";

    document.querySelectorAll(".block-puzzle-box > button")[9].style.display = "flex";

    document.querySelectorAll(".block-puzzle-box > button")[9].id = "";

    document.querySelectorAll(".block-puzzle-box > button")[9].style.width = document.querySelectorAll(".block-puzzle-box > button")[0].clientWidth + "px";

    document.querySelectorAll(".block-puzzle-box > button")[9].style.height = document.querySelectorAll(".block-puzzle-box > button")[0].clientHeight + "px";
    
    let image = document.createElement("img");
    
    image.setAttribute("src", require("./block-puzzle-image/" + imageName + "/9.jpg"));

    document.querySelectorAll(".block-puzzle-box > button")[9].appendChild(image);

    document.querySelector(".block-puzzle-menu-cover").style.display = "block";

    document.querySelector(".block-puzzle-cover").style.display = "none";

    minute = undefined;

    count = 0;
  
    hour = 0;
  
    countStarter = setInterval(() => { // Set interval timeout to 1 sec.
  
      count++; // Increment the count(sec) value to 1 for every 1s of render.
  
      if (count === 60) { // Do minute increment by 1 and set back the count value to 0.
  
        if (minute === undefined) { // If minute is going to contain now a legal value, make the data type to number.
  
            minute = 0;
            
        }
  
        minute++;
  
        if (minute === 60) {
  
            minute = 0;
  
            hour++;
  
        }
  
        count = 0;
        
      }
  
        let time; // For storing the legal value of time.
        
        if (minute === undefined) { // Without minute and hour.
          
          if (count.toString().length === 1) {
  
            time = "00:00:0" + count;
  
          } else if (count.toString().length === 2) {
  
            time = "00:00:" + count;
  
          }
  
        } else if (minute.toString().length === 1 && hour === 0) { // With 1 digit minute.
  
          if (count.toString().length === 1) {
  
            time = "00:0" + minute + ":" + "0" + count;
  
          } else if (count.toString().length === 2) {
  
            time = "00:0" + minute + ":" + count;
  
          } 
        
        } else if (minute.toString().length === 2 && hour === 0) { // With 2 digit minute.
        
          if (count.toString().length === 1) {
  
            time = "00:" + minute + ":" + "0" + count;
  
          } else if (count.toString().length === 2) {
  
            time = "00:" + minute + ":" + count;
  
          }
  
        } else if (hour.toString().length === 1) { // With 1 digit hour.
        
          if (count.toString().length === 1) {
  
            time = "0" + hour + ":" + minute + ":" + "0" + count;
  
            if (minute.toString().length === 1) {
  
              time = "0" + hour + ":" + "0" + minute + ":" + "0" + count;
  
            } else if (minute.toString().length === 2) {
  
              time = "0" + hour + ":" + + minute + ":" + "0" + count;
  
            }
  
          } else if (count.toString().length === 2) {
  
            time = "0" + hour + ":" + minute + ":" + count;
  
            if (minute.toString().length === 1) {
  
              time = "0" + hour + ":" + "0" + minute + ":" +  count;
  
            } else if (minute.toString().length === 2) {
  
              time = "0" + hour + ":" + minute + ":" + count;
  
            }
  
          }
  
        } else if (hour.toString().length === 2) { // With 2 digit hour.
        
          if (count.toString().length === 1) {
  
            time = hour + ":" + minute + ":" + "0" + count;
  
            if (minute.toString().length === 1) {
  
              time = hour + ":" + "0" + minute + ":" + "0" + count;
  
            } else if (minute.toString().length === 2) {
  
              time = hour + ":" + + minute + ":" + "0" + count;
  
            }
  
          } else if (count.toString().length === 2) {
  
            time = hour + ":" + minute + ":" + count;
  
            if (minute.toString().length === 1) {
  
              time = hour + ":" + "0" + minute + ":" +  count;
  
            } else if (minute.toString().length === 2) {
  
              time = hour + ":" + minute + ":" + count;
  
            }
  
          }
  
        } else { // Stop the time in 99:99:99.
  
          // This else statement intentionally left blank.
  
        }
  
        document.querySelector(".duration-displayer").innerHTML = " " + time;
    
    }, 1000);

  }

}

function Duration() {

 

  return ( // Note: Don't forget to remove the document.body margin.

    <>

      <div className="duration-container"> {/* Container */}

        <strong> {/* Duration text */}
          Duration:
          <span className="duration-displayer"> 00:00:00 </span>{/* Duration displayer */}
        </strong>

      </div> {/* End of Container */}
    
    </>

  );

}

export {Duration, TimeState, ChangeImage};
