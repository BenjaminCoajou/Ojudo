import React from "react";
import L from 'leaflet';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class Map extends React.Component {
    
    componentDidMount(){
      this.map = L.map('map', {
        center: [58, 16],
        zoom:6,
        zoomControl: false
      });

      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17,
      }).addTo(this.map);

      

    }
      render(){

        return <Wrapper width="500px" height="500px" id="map" />

      }
}


