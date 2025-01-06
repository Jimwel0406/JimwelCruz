import React from "react";
import ReactDOM from "react-dom/client";
import {Duration, TimeState, ChangeImage} from "./component/Duration.js";
import BlockPuzzle from "./component/BlockPuzzel.js";
import TimeToBeat from "./component/TimeToBeat.js";

function App() {
  
return (

  <>

    <Duration/>
    <TimeToBeat/>
    <BlockPuzzle/>

  </>

)

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
