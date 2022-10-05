import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Button from "./Button";

const FiveDayWeatherButton = () => {
  const { setShowFiveDayWeather } = useContext(WeatherContext);
  return (
    <Button
      onClickFunc={() => {
        setShowFiveDayWeather(true);
      }}
      name="5 Day Weather"
      buttonType="submit"
    />
  );
};

export default FiveDayWeatherButton;
