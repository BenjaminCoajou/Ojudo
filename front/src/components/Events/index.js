import React from "react";
import L from 'leaflet';

import Header from "../Header";
import Footer from "../Footer";
import Map from "./maps";
import "./style.scss";




const Events = () => (
  <div>
    <Header />
    

    <div>
    <Map />
    </div>


    <Footer />
  </div>
);

export default Events;
