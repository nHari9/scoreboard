import React, { useState } from "react";
import styles from "./App.css"




function App() {

  const [value, setValue]=useState({
    Score : 76,
    Wicket : 2,
    Ball : 50
  });



const handleChange=(item,val)=>{
  // setValue({...value,[item]:value[item]+val})
  // setValue(item+val)
  if(value.Score>100)return
  if(item==="Wicket"&&value.Wicket===12)return
  setValue({...value,[item]:value[item]+val})
}

if(useState.Score>=101){
  var h1="India Won"  }



  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
              value.Score
              
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              value.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              Math.floor(value.Ball/6)+"."+value.Ball%6
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>handleChange("Score",1)}>Add 1</button>
        <button className="addScore4" onClick={()=>handleChange("Score",4)}>Add 4</button>
        <button className="addScore6" onClick={()=>handleChange("Score",6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleChange("Wicket",1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleChange("Ball",1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      
        <h1 className="status">{value.Score>100 ? "India Won":""}</h1>
      
    </div>
  );
}

export default App;
