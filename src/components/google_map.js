import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    console.log(this.props.lat,this.props.lon)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: parseFloat(this.props.lat),
        lng: parseFloat(this.props.lon)
      }
    })
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
