import Day from "./Day";
import "../Forecast.css";
import { parseForecastData } from "../../utils/utils";
import PropTypes from "prop-types";

function Forecast({forecastData}) {
  const data = parseForecastData(forecastData.list);
  return (
  <>
    <h2>Forecast</h2>
    <div id='forecast-container'>
      {data.map((day, index) => (
        <Day key={index} date={day.date} weather={day.main} temperature={day.temp} icon={day.icon}/>
      ))}
    </div>
  </>
  );
}

export default Forecast;
