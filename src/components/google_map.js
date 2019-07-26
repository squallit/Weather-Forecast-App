import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    console.log(this.props.lat,this.props.lon);
    //Same as document.getElementById('map')
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lon)
      }
    })
  }

  render() {
    //refs system in ReactJS whenever this.refs.map mentioned
    return <div ref="map" />;
  }
}

export default GoogleMap;
