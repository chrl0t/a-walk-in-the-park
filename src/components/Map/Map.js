import React, {Component} from "react";
import './Map.css';
import {GoogleApiWrapper} from 'google-maps-react';
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
    places: [],
  };
 
  componentDidMount(){
    const {google, centerLatitude, centerLongitude} = this.props;
    const center = new google.maps.LatLng(centerLatitude, centerLongitude);
    const infowindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 15,
      });
    const request = {
      location:center,
      radius: '2000',
      type: ['park'],
      };

    const service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.setState({places: results}, () => {
            this.state.places.forEach(({geometry:{location}}) => {
              new google.maps.Marker({map, position: location})
            })
          })
          }
      });
    
    
    function createMarker(place) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name);
        infowindow.open(map);
      });
    }
    
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
    return (<div id='map' className="map">
    </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: Key,
  libraries: ['places'],
})(MapContainer);
