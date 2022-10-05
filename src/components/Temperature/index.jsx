// 	? Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate
import "./temperature.css";
import React, { useState, useEffect } from "react";
import { convertToCelsius } from "../../utils/convertTempToCelcius";

function Temperature({ temp }) {
  const [celsius, setCelsius] = useState(null);

  useEffect(() => {
    setCelsius(convertToCelsius(temp));
  }, [temp]);

  return (
    <div className="temperature-container">
      <h4 className="fahrenheit">{temp && temp} F&#176;</h4>
      <h4 className="celcius">{celsius && celsius} C&#176;</h4>
    </div>
  );
}

export default Temperature;
