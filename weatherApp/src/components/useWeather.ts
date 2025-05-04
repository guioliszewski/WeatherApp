import React, { useState } from "react";
import axios from "axios";
import { WeatherData, ForecastData } from "../types/weather";

const API_KEY = "d734bcb2a1b67dc73f9c87212df8ef8e";

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = async (city: string) => {
    setLoading(true);
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(weatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      setForecast(forecastResponse.data);
    } catch (err) {
      setError("Cidade não encontrada. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetch };
};
