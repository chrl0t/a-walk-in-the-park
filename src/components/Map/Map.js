import React, {Component} from "react";
import './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Key from "../../ignorethisfile";

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
  };
 
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
          // bounds={bounds}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Manchester'} 
                position={{lat: 53.4808, lng: -2.2426}} />
 
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
})(MapContainer);
