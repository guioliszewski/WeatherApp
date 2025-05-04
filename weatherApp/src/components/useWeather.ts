import React, { useState } from "react";
import axios from "axios";
import { weatherData } from "./App";
import { forecastData } from "./App";

const API_KEY = "d734bcb2a1b67dc73f9c87212df8ef8e";

export const useWeather = () => {
  const [weather, setWeather] = useState<weatherData | null>(null);
  const [forecast, setForecast] = useState<forecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
};
