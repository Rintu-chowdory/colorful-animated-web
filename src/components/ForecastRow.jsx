const weatherIcons = {
  Clear:"☀",Clouds:"⛅",Rain:"🌧",Drizzle:"🌦",
  Thunderstorm:"⛈",Snow:"🌨",Mist:"🌫",Fog:"🌫",Haze:"🌫"
};
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function ForecastRow({ forecast }) {
  return (
    <div className="forecast-section">
      <h3 className="section-title">5-Day Forecast</h3>
      <div className="forecast-row">
        {forecast.map((item, i) => {
          const date = new Date(item.dt * 1000);
          const day = days[date.getDay()];
          const icon = weatherIcons[item.weather[0].main] || "🌡";
          return (
            <div className="forecast-card" key={i}>
              <span className="forecast-day">{i === 0 ? "Today" : day}</span>
              <span className="forecast-icon">{icon}</span>
              <span className="forecast-desc">{item.weather[0].main}</span>
              <div className="forecast-temps">
                <span className="forecast-high">{Math.round(item.main.temp_max)}°</span>
                <span className="forecast-low">{Math.round(item.main.temp_min)}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
