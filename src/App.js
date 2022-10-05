import { useState, useEffect } from "react";
import "./App.css";
import { weatherData } from "./weatherData";
import Form from "./components/Form";
import WeatherDetails from "./components/WeatherDetails";
import { WeatherContext } from "./context/WeatherContext";

// <!--
// •	Build form control with the following. Label : “Enter City”, Input form field, Submit Button. Button should be custom built and re-usable.
// ?	Build weather details component. It should show the current Date, City Name, Current time & temperature details. “Begin with Static Data and later bind with JSON dynamic data”
// •	Retrieve weather data from JSON service (API). Use Redux Store for the Data management. Parse the content to respective UI components.
// •	Weather Details should be updated based on the City name entered in the form control.
// •	Build “5 Day Weather” Button by re-using the button component which was created earlier.
// •	Implement new page which shows 5 day weather Details. Create an event to “5 Day Weather” button to take to 5 Day weather details page.
// •	Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate
// •	5 Day Weather details page should contain a data grid which shows the 5 day weather info. Temperature component should be reused and rendered in each cell. Show the visual design to the candidate.
// -->

function App() {
  const [city, setCity] = useState("");
  const [currentCityWeather, setCurrentCityWeather] = useState(null);

  const weatherDataArray = Object.keys(weatherData.States);
  console.log(weatherDataArray);

  useEffect(() => {
    weatherDataArray.forEach((el) => {
      console.log(weatherData.States[el]);
      weatherData.States[el].cities.filter((ct) => {
        console.log("ct", ct);
        if (ct.name === city) {
          setCurrentCityWeather(ct.forecast);
          console.log("ct.forecast", ct.forecast);
        }
        return null;
      });
    });
    console.log("currentCityWeather: ", currentCityWeather);
  }, [city, currentCityWeather, weatherDataArray]);

  return (
    <WeatherContext.Provider
      value={{ currentCityWeather, setCurrentCityWeather, city, setCity }}
    >
      <div className="App">
        <h2>Weather App</h2>
        <p>Some content</p>
        <h2>Weather App</h2>
        <p>Some content</p>
        <Form />
        <WeatherDetails />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
