import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";

const API_KEY = "9e9ee4d66208f4be945c80427b8de8e1";

export default function App() {
  const [city, setCity] = useState("Nairobi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (newCity) => {
    setCity(newCity);
    fetchWeather(newCity);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const convertTemp = (tempC) => (isCelsius ? tempC : (tempC * 9) / 5 + 32);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-blue-100 text-gray-900"
      }`}
    >
      <div className="w-full max-w-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">🌤 Weather Dashboard</h1>

        <div className="flex justify-between mb-4">
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-lg bg-indigo-500 text-white text-sm hover:bg-indigo-600"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
          <button
            onClick={toggleTemperatureUnit}
            className="px-3 py-1 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600"
          >
            {isCelsius ? "°C → °F" : "°F → °C"}
          </button>
        </div>

        <SearchBar onSearch={handleSearch} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {weatherData && (
          <WeatherCard
            city={weatherData.name}
            country={weatherData.sys.country}
            temperature={convertTemp(weatherData.main.temp).toFixed(1)}
            humidity={weatherData.main.humidity}
            windSpeed={weatherData.wind.speed}
            icon={weatherData.weather[0].icon}
            description={weatherData.weather[0].description}
            unit={isCelsius ? "°C" : "°F"}
          />
        )}
      </div>

      <p className="mt-4 text-sm opacity-70">
        Powered by <a href="https://openweathermap.org/" target="_blank" className="underline">OpenWeatherMap</a>
      </p>
    </div>
  );
}
