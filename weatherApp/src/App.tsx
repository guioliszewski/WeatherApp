import React, { useState } from "react";
import axios from "axios";

type weatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  feelsLike: number;
  wind: {
    speed: number;
  };
};

type forecastData = {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: {
      icon: string;
    }[];
  }[];
};

function App() {
  return (
    <div className="App">
      <h1>testing</h1>
    </div>
  );
}

export default App;
