import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import "./style.scss";
import "./eventCalendar.js";

const Events = () => (
  <div>
    <Header />

    <div class="calendar-wrapper z-depth-2">
      <div class="header-background">
        <div class="calendar-header">
          <a class="prev-button" id="prev">
            <i class="material-icons">keyboard_arrow_left</i>
          </a>
          <a class="next-button" id="next">
            <i class="material-icons">keyboard_arrow_right</i>
          </a>
          <div class="row header-title">
            <div class="header-text">
              <h3 id="month-name">April 2020</h3>
              <h5 id="todayDayName">Today is Monday, Apr 20</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar-content">
        <div id="calendar-table" class="calendar-cells">
          <div id="table-header">
            <div class="row">
              <div class="col">Mon</div>
              <div class="col">Tue</div>
              <div class="col">Wed</div>
              <div class="col">Thu</div>
              <div class="col">Fri</div>
              <div class="col">Sat</div>
              <div class="col">Sun</div>
            </div>
          </div>
          <div id="table-body" class="animated fadeInLeft">
            <div class="row">
              <div class="col empty-day"></div>
              <div class="col empty-day"></div>
              <div class="col">1</div>
              <div class="col">2</div>
              <div class="col">3</div>
              <div class="col">4</div>
              <div class="col">5</div>
            </div>
            <div class="row">
              <div class="col">6</div>
              <div class="col">7</div>
              <div class="col">8</div>
              <div class="col">9</div>
              <div class="col">10</div>
              <div class="col">11</div>
              <div class="col">12</div>
            </div>
            <div class="row">
              <div class="col">13</div>
              <div class="col">14</div>
              <div class="col">15</div>
              <div class="col">16</div>
              <div class="col">17</div>
              <div class="col">18</div>
              <div class="col">19</div>
            </div>
            <div class="row">
              <div class="col blue lighten-3">20</div>
              <div class="col">21</div>
              <div class="col">22</div>
              <div class="col">23</div>
              <div class="col">24</div>
              <div class="col">25</div>
              <div class="col">26</div>
            </div>
            <div class="row">
              <div class="col">27</div>
              <div class="col">28</div>
              <div class="col">29</div>
              <div class="col">30</div>
              <div class="col empty-day"></div>
              <div class="col empty-day"></div>
              <div class="col empty-day"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="calendar-footer">
        <div class="emptyForm" id="emptyForm">
          <h4 id="emptyFormTitle">No events now</h4>
          <a class="addEvent" id="changeFormButton">
            Add new
          </a>
        </div>
        <div class="addForm" id="addForm">
          <h4>Add new event</h4>
          <div class="row">
            <div class="input-field col s6">
              <input id="eventTitleInput" type="text" class="validate" />
              <label for="eventTitleInput">Title</label>
            </div>
            <div class="input-field col s6">
              <input id="eventDescInput" type="text" class="validate" />
              <label for="eventDescInput">Description</label>
            </div>
          </div>
          <div class="addEventButtons">
            <a
              class="waves-effect waves-light btn blue lighten-2"
              id="addEventButton"
            >
              Add
            </a>
            <a
              class="waves-effect waves-light btn grey lighten-2"
              id="cancelAdd"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Events;
