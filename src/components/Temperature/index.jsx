// 	? Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate
import "./temperature.css";
import React, { useState, useEffect } from "react";

function Temperature({ temp }) {
  const [celsius, setCelsius] = useState(null);

  const convertToCelsius = (temp) => {
    setCelsius(Math.round((temp - 32) * (5 / 9)));
  };

  useEffect(() => {
    convertToCelsius(temp);
  }, [temp]);

  return (
    <div className="temperature-container">
      <h3 className="fahrenheit">{temp && temp} F&#176;</h3>
      <h3 className="celcius">{celsius && celsius} C&#176;</h3>
    </div>
  );
}

export default Temperature;
