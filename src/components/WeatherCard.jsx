import React from "react";

export default function WeatherCard({
  city,
  country,
  temperature,
  humidity,
  windSpeed,
  icon,
  description,
  unit,
}) {
  return (
    <div className="mt-6 p-6 rounded-2xl shadow-lg bg-blue-50 dark:bg-gray-700 transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-2">
        {city}, {country}
      </h2>

      <div className="flex flex-col items-center">
        {/* Weather Icon */}
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-24 h-24"
        />

        {/* Temperature */}
        <p className="text-4xl font-bold mb-2">
          {temperature} <span className="text-lg">{unit}</span>
        </p>

        {/* Description */}
        <p className="capitalize text-gray-700 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Other Details */}
        <div className="flex justify-around w-full text-sm text-gray-600 dark:text-gray-200">
          <div>
            <p className="font-semibold">💧 Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div>
            <p className="font-semibold">🌬 Wind Speed</p>
            <p>{windSpeed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
