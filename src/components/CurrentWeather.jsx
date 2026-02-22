const weatherIcons = {
  Clear:"☀",Clouds:"⛅",Rain:"🌧",Drizzle:"🌦",
  Thunderstorm:"⛈",Snow:"🌨",Mist:"🌫",Fog:"🌫",Haze:"🌫"
};

export default function CurrentWeather({ data }) {
  const icon = weatherIcons[data.weather[0].main] || "🌡";
  const sunrise = new Date((data.sys.sunrise + data.timezone) * 1000).toUTCString().slice(17, 22);
  const sunset = new Date((data.sys.sunset + data.timezone) * 1000).toUTCString().slice(17, 22);
  return (
    <div className="current-weather">
      <div className="current-top">
        <div className="city-info">
          <h2 className="city-name">{data.name}<span className="country-code">{data.sys.country}</span></h2>
          <p className="condition">{data.weather[0].description}</p>
        </div>
        <div className="temp-display">
          <span className="weather-icon-lg">{icon}</span>
          <div className="temp-value">
            <span className="temp-number">{Math.round(data.main.temp)}</span>
            <span className="temp-unit">°C</span>
          </div>
        </div>
      </div>
      <div className="sun-row">
        <div className="sun-item">
          <span className="sun-label">SUNRISE</span>
          <span className="sun-value">↑ {sunrise}</span>
        </div>
        <div className="sun-divider" />
        <div className="sun-item">
          <span className="sun-label">SUNSET</span>
          <span className="sun-value">↓ {sunset}</span>
        </div>
      </div>
    </div>
  );
}
