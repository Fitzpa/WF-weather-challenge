import React from "react";
import Temperature from "../Temperature";
import "./data-grid.css";
// •	5 Day Weather details page should contain a data grid which shows the 5 day weather info.
// Temperature component should be reused and rendered in each cell.
// Show the visual design to the candidate.

const DataGrid = ({ currentCityWeather }) => {
  return (
    <div className="data-grid-container">
      {currentCityWeather.map((el, index) => (
        <div key={index} className="data-grid-item">
          <Temperature temp={el.temprature} />
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
