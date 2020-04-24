import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Map from "./maps";
import Calendar from "../../containers/Calendar";
import "./style.scss";




const Events = () => (
  <div>
    <Header />
    

    <div className="event-container">
      <div className="event-calendar-table">
      <Calendar/>
      </div>
    <Map />
    </div>


    <Footer />
  </div>
);

export default Events;
