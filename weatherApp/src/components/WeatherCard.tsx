import { WeatherData } from "../types/weather";

export const WeatherCard = ({ data }: { data: WeatherData }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <div className="flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
        <span className="text-4xl font-bold">
          {Math.round(data.main.temp)}°C
        </span>
      </div>
      <p className="capitalize">{data.weather[0].description}</p>
      <div className="mt-4">
        <p className="text-gray-600">
          Feels like: {Math.round(data.main.feels_like)}°C
        </p>
        <p className="text-gray-600">Humidity: {data.main.humidity}%</p>
        <p className="text-gray-600">Wind speed: {data.wind.speed} km/h</p>
      </div>
    </div>
  );
};
