import React, {Component} from "react";
import './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Key from "../../ignorethisfile";
import fetchNearestPlacesFromGoogle from '../../utils/fetchParks';

const mapStyles = {
  // position: "relative",
  width: "100%",
  height: "100%",
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    places: [],
  };
 
  componentDidMount(){
  console.log(this.state)  
  // this.setState({places: fetchNearestPlacesFromGoogle(this.props.centerLatitude, this.props.centerLongitude)})
}


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
 
  render() {
    return (<div className="map">
      <Map google={this.props.google}
          style={mapStyles}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}>
        {/* {this.state.places.map(item => (
            <Marker ref={this.onMarkerMounted}
              key={item.id}
              title={item.name}
              name={item.name}
              position={{ lat: item.lat, lng: item.lng }}
            />
          ))} */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>

    </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: Key,
  libraries: ['places'],
})(MapContainer);
