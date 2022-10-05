import React, { useContext } from "react";
import Form from "../components/Form";
import WeatherDetails from "../components/WeatherDetails";
import FiveDayWeatherButton from "../components/FiveDayWeatherButton";
import { WeatherContext } from "../context/WeatherContext";

function Home() {
  const { city } = useContext(WeatherContext);
  return (
    <div className="home">
      <h1>Weather App</h1>
      <Form />
      {city && (
        <div className="weather-details-container">
          <WeatherDetails />
          <FiveDayWeatherButton />
        </div>
      )}
    </div>
  );
}

export default Home;
