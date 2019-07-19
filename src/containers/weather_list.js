import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temperatures = cityData.list.map(weather => weather.main.temp);
    const fahTemperatures = temperatures.map(temperature => 1.8*(temperature - 273) + 32);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon,lat} = cityData.city.coord; //ES6
    // const longitude = cityData.citi.coord.lon;
    // const latitude = cityData.citi.coord.lat;

    return (
      <tr key={cityName}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={fahTemperatures} color="red" unit="F"/>
        </td>
        <td>
          <Chart data={pressures} color="green" unit="hPA"/>
        </td>
        <td>
          <Chart data={humidities} color="blue" unit="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

}

function mapStateToProps({weather}) { //({weather}) == ({state}) and weather = state.weather
  return {weather}; //{weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
