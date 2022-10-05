// 	? Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate
import "./city-current-time.css";
import React from "react";

function CityCurrentTime({ currentCityWeather, city }) {
  return (
    <div className="city-and-current-time-container">
      <h3 className="city">{city && city}</h3>
      <h3 className="time">{currentCityWeather[0].Time}</h3>
    </div>
  );
}

export default CityCurrentTime;
