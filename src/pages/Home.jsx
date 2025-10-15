import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

const Home = ({ weather, loading, error, onSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <h1 className="text-4xl font-extrabold text-blue-700 mt-10">
        🌤 Weather Dashboard
      </h1>

      <SearchBar onSearch={onSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
