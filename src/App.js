import React, {createContext, useState, useContext} from 'react';
import CityList from "./CityList";
import AddCityButton from "./AddCityButton";
import TemperatureAverage from "./TemperatureAverage";
import './App.css';

export const WeatherContext = createContext();

function App() {
  const [cities, setCities] = useState([]);

  const addCity = (name, temperature) => {
    const newCity = { name, temperature };
    setCities(prevCities => [...prevCities, { name, temperature }]);
  };

  return (
    <WeatherContext.Provider value={{
      cities,
      addCity,
    }}>
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
        <CityList />
        <AddCityButton />
        <TemperatureAverage />
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
