import { useState, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import ForecastRow from "./components/ForecastRow";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const fetchWeather = useCallback(async (city) => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`),
        fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`),
      ]);

      if (!weatherRes.ok) {
        const err = await weatherRes.json();
        throw new Error(err.message || "City not found");
      }

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      // Filter forecast: one entry per day at ~noon
      const dailyForecast = forecastData.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      setWeather(weatherData);
      setForecast(dailyForecast);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">Skycast</span>
          </div>
          <p className="logo-sub">Global Weather Intelligence</p>
        </div>
      </header>

      <main className="app-main">
        <SearchBar onSearch={fetchWeather} loading={loading} />

        {!searched && !loading && (
          <div className="empty-state">
            <div className="empty-icon">⊕</div>
            <p>Enter a city name to get started</p>
            <div className="suggestions">
              {["London", "Tokyo", "New York", "Berlin", "Sydney"].map((c) => (
                <button key={c} className="suggestion-chip" onClick={() => fetchWeather(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <div className="loading-state">
            <div className="loader" />
            <p>Fetching weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-state">
            <span>⚠</span>
            <p>{error}. Please check the city name and try again.</p>
          </div>
        )}

        {weather && !loading && (
          <div className="dashboard fade-in">
            <CurrentWeather data={weather} />
            <WeatherDetails data={weather} />
            {forecast && <ForecastRow forecast={forecast} />}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Data via OpenWeatherMap · Built by Rintu Chowdory</p>
      </footer>
    </div>
  );
}
