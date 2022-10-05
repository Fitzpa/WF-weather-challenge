import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

import DateDisplay from "../components/DateDisplay";
import DataGrid from "../components/DataGrid";
import CityCurrentTime from "../components/CityCurrentTime";

function FiveDayWeather() {
  const { currentCityWeather, city } = useContext(WeatherContext);
  return (
    <div>
      FiveDayWeather
      <h1>{city}'s Five Day Forecast</h1>
      <DateDisplay currentCityWeather={currentCityWeather} />
      <CityCurrentTime currentCityWeather={currentCityWeather} city={city} />
      <DataGrid currentCityWeather={currentCityWeather} />
    </div>
  );
}

export default FiveDayWeather;
