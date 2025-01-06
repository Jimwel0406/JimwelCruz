import React from "react";
import "./css/TimeToBeat.css";

function TimeToBeat() {

 return (

   <>

     <div className="timetobeat-container"> {/* Container */}

       <strong>

         Time to beat:

         <span className="timetobeat-displayer"> 00:00:00 </span>

      </strong>

     </div> {/* End of Container */}

   
   </>

 )

}

export default TimeToBeat;