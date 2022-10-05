import React from "react";
import Form from "../components/Form";
import WeatherDetails from "../components/WeatherDetails";
import FiveDayWeatherButton from "../components/FiveDayWeatherButton";

function Home() {
  return (
    <div>
      <h2>Weather App</h2>
      <p>Some content</p>
      <h2>Weather App</h2>
      <p>Some content</p>
      <Form />
      <FiveDayWeatherButton />
      <WeatherDetails />
    </div>
  );
}

export default Home;
