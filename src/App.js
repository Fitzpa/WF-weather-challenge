import { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import { weatherData } from "./weatherData";
import Home from "./pages/Home";
import FiveDayWeather from "./pages/FiveDayWeather";
import { WeatherContext } from "./context/WeatherContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// <!--
// •	Build form control with the following. Label : “Enter City”, Input form field, Submit Button. Button should be custom built and re-usable.
// ?	Build weather details component. It should show the current Date, City Name, Current time & temperature details. “Begin with Static Data and later bind with JSON dynamic data”
// •	Retrieve weather data from JSON service (API). Use Redux Store for the Data management. Parse the content to respective UI components.
// •	Weather Details should be updated based on the City name entered in the form control.
// •	Build “5 Day Weather” Button by re-using the button component which was created earlier.
// •	Implement new page which shows 5 day weather Details. Create an event to “5 Day Weather” button to take to 5 Day weather details page.
// 	? Enhance Weather details UI component. Component should be divided into 3 small re-usable components. Date Display, City & current time, Temperature. Show the Visual screen to the candidate
// •	5 Day Weather details page should contain a data grid which shows the 5 day weather info. Temperature component should be reused and rendered in each cell. Show the visual design to the candidate.
// -->

function App() {
  const [city, setCity] = useState("");
  const [currentCityWeather, setCurrentCityWeather] = useState([
    { Date: "", Time: "", temprature: "", feels: "" },
  ]);
  const [showFiveDayWeather, setShowFiveDayWeather] = useState(false);

  const weatherDataArray = Object.keys(weatherData.States);

  useEffect(() => {
    weatherDataArray.forEach((el) => {
      weatherData.States[el].cities.filter((ct) => {
        if (ct.name === city) {
          setCurrentCityWeather(ct.forecast);
        }
        return null;
      });
    });
  }, [city, currentCityWeather, weatherDataArray]);

  return (
    <WeatherContext.Provider
      value={{
        currentCityWeather,
        setCurrentCityWeather,
        city,
        setCity,
        showFiveDayWeather,
        setShowFiveDayWeather,
      }}
    >
      <div className="App">
        <Router>
          <div className="container">
            <nav className="navbar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/five-day-weather-forecast">Five Day Weather</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route
                path="/five-day-weather-forecast"
                element={<FiveDayWeather />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
