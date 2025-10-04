function WeatherCard({ data }) {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-80">
      <h2 className="text-2xl font-bold mb-2">{data.name}, {data.sys.country}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-5xl font-extrabold">{Math.round(data.main.temp)}°C</p>
          <p className="capitalize">{data.weather[0].description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>🌬 Wind: {Math.round(data.wind.speed)} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
