import { ForecastData } from "../types/weather";

export const Forecast = ({ data }: { data: ForecastData }) => {
  const dailyForecast = data.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Próximos Dias</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {dailyForecast.map((day) => (
          <div key={day.dt} className="bg-white p-4 rounded-lg shadow-md">
            <p> {new Date(day.dt).toLocaleDateString("pt-BR")} </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <p>{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};
