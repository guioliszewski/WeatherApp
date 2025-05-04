import React, { useState } from "react";
import axios from "axios";
import { WeatherCard } from "./components/WeatherCard";
import { Forecast } from "./components/Forecast";
import { SearchBar } from "./components/SearchBar";
import { useWeather } from "./components/useWeather";

export default function App() {
  const { weather, forecast, loading, error, fetch } = useWeather();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-300 h-200 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl flex justify-center font-bold mb-4">
          Weather App
        </h1>
        <div className="flex justify-center mb-4">
          <SearchBar onSearch={fetch} />
          {loading && <p>Carregando...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {weather && <WeatherCard data={weather} />}
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </div>
  );
}
