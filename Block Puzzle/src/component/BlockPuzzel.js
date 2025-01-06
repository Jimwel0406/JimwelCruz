import {Duration, TimeState, ChangeImage} from "./Duration.js";
import "./css/BlockPuzzle.css";

function MoveBlock(evt) { // These are the program or code for interacting the block puzzle.

  let block = evt.currentTarget; // Get the block object element;

  let blockPos = block.getAttribute("block-pos"); // Get the position of block of your click.

  let emptyBlock = document.getElementById("empty-block"); // Get the empty block object element;

  let emptyBlockPos = emptyBlock.getAttribute("block-pos"); // Get the position of an empty block object element.

  let isImageFinished = true;

  let imageName = document.querySelector(".image-selector").value; // .image-selector or select element value.

  if (block.id === "empty-block") { // If you click empty block, nothing will happen.

    //This if statement intentionally left blank.

  } else { // If you click NOT empty block, execute the code below.

    switch (emptyBlockPos) { // Let's check the empty block position.

      case "1": // If emptyBlockPosition is 1.
      /* Position 2, 4 and 10 block only is able to click in this case */
        if (blockPos === "2") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "4") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "10") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }

      break;

      case "2": // If emptyBlockPosition is 2.
      /* Position 1, 3 and 5 block only is able to click in this case */
        if (blockPos === "1") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);
          
          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "3") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "5") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }

      break;

      case "3": // If emptyBlockPosition is 3.
      /* Position 2 and 6 block only is able to click in this case */
        if (blockPos === "2") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "6") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }

      break;

      case "4": // If emptyBlockPosition is 4.
      /* Position 1, 5 and 7 block only is able to click in this case */
        if (blockPos === "1") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "5") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "7") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }


      break;

      case "5": // If emptyBlockPosition is 5.
      /* Position 2, 4, 6 and 8 block only is able to click in this case */
        if (blockPos === "2") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "4") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "6") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "8") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }


      break;

      case "6": // If emptyBlockPosition is 6.
      /* Position 3, 5 and 9 block only is able to click in this case */
        if (blockPos === "3") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "5") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "9") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }


      break;

      case "7": // If emptyBlockPosition is 7.
      /* Position 4 and 8 block only is able to click in this case */
        if (blockPos === "4") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");


        } else if (blockPos === "8") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }

      break;

      case "8": // If emptyBlockPosition is 8.
      /* Position 5, 7 and 9 block only is able to click in this case */
        if (blockPos === "5") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "7") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "9") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        }

      break;

      case "9": // If emptyBlockPosition is 9.
      /* Position 6 and 8 block only is able to click in this case */
        if (blockPos === "6") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } else if (blockPos === "8") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } 

      break;

      case "10": // If emptyBlockPosition is 10.
      /* Position 7 block only is able to click in this case */
        if (blockPos === "1") {

          let img = document.createElement("img");

          img.setAttribute("src", block.children[0].getAttribute("src"));

          emptyBlock.appendChild(img);

          block.removeChild(block.firstElementChild);

          emptyBlock.id = "";

          block.setAttribute("id", "empty-block");

        } 

      break;

    }

  }

  for (let blockPos = 1; blockPos <= document.querySelectorAll(".block-puzzle-box > button").length - 1; blockPos++) { // Make 9 iterate loops to track the state of each button.

    switch (blockPos) { // Check each block per loop.

      case 1: // Check block 1 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[0].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/9.jpg")) {

          isImageFinished = false;

        }

      break;

      case 2: // Check block 2 if it doesn't have correct src or image.


        if (document.querySelectorAll(".block-puzzle-box > button > img")[1].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/8.jpg")) {

        isImageFinished = false;

        }

      break;

      case 3: // Check block 3 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[2].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/7.jpg")) {

        isImageFinished = false;

        }

      break;

      case 4: // Check block 4 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[3].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/6.jpg")) {

        isImageFinished = false;
  
        }

      break;

      case 5: // Check block 5 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[4].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/5.jpg")) {

        isImageFinished = false;

        }

      break;

      case 6: // Check block 6 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[5].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/4.jpg")) {

        isImageFinished = false;

        }

      break;

      case 7: // Check block 7 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[6].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/3.jpg")) {

        isImageFinished = false;

        }

      break;

      case 8: // Check block 8 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[7].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/2.jpg")) {

        isImageFinished = false;

        }  

      break;

      case 9: // Check block 9 if it doesn't have correct src or image.

        if (document.querySelectorAll(".block-puzzle-box > button > img")[8].src !== "http://localhost:3000" + require("./block-puzzle-image/" + imageName + "/1.jpg")) {

        isImageFinished = false;

        }

      break;

    }

  }

  if (isImageFinished) { // After clicked, check if the puzzle is finished.

    TimeState(isImageFinished); // Stop the game if finished.

  }

  isImageFinished = true; // Set back the value to true (boolean) after we got false (boolean) in IF statement to be use in for future.

}

function Play() { // Function for starting the game, this will call by play button.

  TimeState(Object); // Start the game.

}

function BlockPuzzle() { // Our main component.

  return (

    <>

      <main className="block-puzzle-container"> {/* Container */}

        <div className="block-puzzle-box"> {/* Box */}

          <button
          block-pos="1" 
          id="empty-block"
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/9.jpg")} /> 
          </button>

          <button 
          block-pos="2" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/2.jpg")} />
          </button>

          <button 
          block-pos="3" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/8.jpg")} /> 
          </button>

          <button 
          block-pos="4" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/4.jpg")} /> 
          </button>

          <button 
          block-pos="5" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/5.jpg")} /> 
          </button>

          <button 
          block-pos="6" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/3.jpg")} /> 
          </button>

          <button 
          block-pos="7" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/7.jpg")} /> 
          </button>

          <button 
          block-pos="8" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/1.jpg")} /> 
          </button>

          <button 
          block-pos="9" 
          onClick={(event) => MoveBlock(event)}
          ><img src={require("./block-puzzle-image/spider-man/6.jpg")} /> 
          </button>

          <button 
          block-pos="10" 
          onClick={(event) => MoveBlock(event)}
          > 
          </button>

          <div className="block-puzzle-menu"> {/* Menu */}

            <i className="fa-solid fa-play fa-beat" title="Play" onClick={Play}></i>

            <select className="image-selector" onChange={ChangeImage}>

              <option hidden>Select an image</option>

              <option value="spider-man">Spider-Man</option>

              <option value="batman">Batman</option>

            </select>

            <div className="block-puzzle-menu-cover"></div>

          </div> {/* End of Menu */}

          <div className="block-puzzle-cover"></div>

        </div> {/* End of Box */}

      </main> {/* End of Container */}

    </>

  );

}

export default BlockPuzzle;