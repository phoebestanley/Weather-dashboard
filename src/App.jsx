import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("Nairobi");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  // Fetch Weather
  const fetchWeather = async (cityName) => {
    try {
      setError(null);
      const response = await fetch(
        `${API_BASE}?q=${cityName}&appid=YOUR_API_KEY&units=metric`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  // Auto fetch when city changes
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">🌤 Weather Dashboard</h1>
      <SearchBar onSearch={setCity} />
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard data={weather} />}
      <button
        onClick={() => fetchWeather(city)}
        className="mt-4 px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-200"
      >
        Refresh
      </button>
    </div>
  );
}

export default App;
