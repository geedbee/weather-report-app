import PropTypes from 'prop-types';
import "../Day.css";

function Day({date, temperature, weather, icon}) {
    return (
      <>
        <div className="day-container">
            <h3>{date}</h3>
            <p>{weather}</p>
            <p className={temperature < 60 ? "blue" : "red"}>{temperature}</p>
            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt={weather} />
        </div>
      </>
    );
}

Day.propTypes = {
    day: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}
export default Day;
