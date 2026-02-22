function DetailCard({ label, value, unit, icon }) {
  return (
    <div className="detail-card">
      <span className="detail-icon">{icon}</span>
      <div className="detail-content">
        <span className="detail-label">{label}</span>
        <span className="detail-value">{value}{unit && <span className="detail-unit"> {unit}</span>}</span>
      </div>
    </div>
  );
}

export default function WeatherDetails({ data }) {
  const details = [
    { label: "Feels Like", value: Math.round(data.main.feels_like), unit: "°C", icon: "◎" },
    { label: "Humidity", value: data.main.humidity, unit: "%", icon: "◈" },
    { label: "Wind Speed", value: data.wind.speed, unit: "m/s", icon: "◉" },
    { label: "Pressure", value: data.main.pressure, unit: "hPa", icon: "◇" },
    { label: "Visibility", value: (data.visibility / 1000).toFixed(1), unit: "km", icon: "◈" },
    { label: "Cloud Cover", value: data.clouds.all, unit: "%", icon: "◎" },
    { label: "Min Temp", value: Math.round(data.main.temp_min), unit: "°C", icon: "▽" },
    { label: "Max Temp", value: Math.round(data.main.temp_max), unit: "°C", icon: "△" },
  ];
  return (
    <div className="weather-details">
      <h3 className="section-title">Conditions</h3>
      <div className="details-grid">
        {details.map((d) => <DetailCard key={d.label} {...d} />)}
      </div>
    </div>
  );
}
