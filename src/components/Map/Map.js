import React from "react";
import './Map.css';
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Key from "../../ignorethisfile";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapContainer extends React.Component {
//   displayMarkers = () => {
//     return (
//       <Marker
//         key={}
//         position={{ lat: 54.4808, lng: -3.2426 }}
//       />
//     );
//   };

  render() {
    return (
      
        <Map
          google={this.props.google}
          zoom={12}
          className="map"
          initialCenter={{ lat: 53.4808, lng: -2.2426 }}
        >
          {this.displayMarkers}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: Key,
})(MapContainer);
