// 	? Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate
import "./date-display.css";
import React from "react";

function DateDisplay({ currentCityWeather }) {
  return (
    <div className="date-display-container">
      <h3 className="date">
        {`${currentCityWeather[0].Date} - ${
          currentCityWeather[currentCityWeather.length - 1].Date
        }`}
      </h3>
    </div>
  );
}

export default DateDisplay;
