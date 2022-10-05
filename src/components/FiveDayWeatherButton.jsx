import React from "react";

import Button from "./Button";

const FiveDayWeatherButton = () => {
  return (
    <Button
      className="five-day-weather-button"
      url="/five-day-weather-forecast"
      name="5 Day Weather"
      buttonType="submit"
    />
  );
};

export default FiveDayWeatherButton;
