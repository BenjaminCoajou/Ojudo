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
        center: [47.989031, -4.102362],
        zoom:12,
        zoomControl: false
      });

      L. marker([47.989031, -4.102362]).addTo(this.map),

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


