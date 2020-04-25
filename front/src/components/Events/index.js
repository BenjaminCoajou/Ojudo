import React from "react";
import PropTypes from "prop-types";
import { Map, Marker, TileLayer } from "react-leaflet";

import Header from "../Header";
import Footer from "../Footer";
import Calendar from "../../containers/Calendar";
import "./style.scss";




const Events = ({ zoom, coordinates, marker }) => {
  

  return (
  <div>
    <Header />


    <div className="event-container">
      <div className="event-calendar-table">
        <Calendar />
      </div>

      <Map center={[coordinates[1], coordinates[0]]} zoom={zoom}>
        <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
        contributors' />
        {marker ? <Marker position={[coordinates[1], coordinates[0]]}/> : ""}
      </Map>

    </div>


    <Footer />
  </div>
)};

Events.propTypes = {
  zoom: PropTypes.number.isRequired,
  coordinates: PropTypes.array.isRequired,
  marker: PropTypes.bool.isRequired,

};
export default Events;
