import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';
import { MdEvent } from "react-icons/md";

import Months from '../../containers/Months';
import Years from '../../containers/Years';

import './style.css';

const Calendar = ({ dateObject, monthIsDisplayed, showMonth, yearIsDisplayed, showYear, handleDayClick, events, selectEvent, eventInfos }) => {
    
    moment.locale('fr');

    // mois
    const month = () => (dateObject.format("MMMM"));

    // année
    const year = () => (dateObject.format("Y"));

    // nom des jours de la semaine
    const weekDayName = (
        moment.weekdaysShort());

    // premier jour du mois
    const firstDayOfMonth = () => (
        moment(dateObject).startOf('month').format('d')
    );

    // zone de vide pour le début du mois
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
        blanks.push(<td key={i*100} className="calendar-day empty" >{""}</td>);
    };

    // jour actuel
    const currentDay = () => (dateObject.format('D'));

    // nombre de jours dans le mois actuel
    const daysInMonth = [];
    for (let day = 1; day <= dateObject.daysInMonth(); day++) {
        let today = day == currentDay() ? "today" : "";
        let selectedDay = dateObject.format(`MM-${day}-${year()}`);
        let allEvent = events.map((evt) => (moment(evt.date).format('MM-D-YYYY')));
        let findEvent = allEvent.find(evt => evt == selectedDay);
        let eventInfos = events.find(evt => moment(evt.date).format('MM-D-YYYY') == selectedDay);
        let nextEvent = () => (selectedDay == findEvent ? <MdEvent/> : "");
        daysInMonth.push(
            <td key={day} className={`calendar-day ${today}`} onClick={() => {handleDayClick(selectedDay), selectEvent(eventInfos)}} ><span>{nextEvent()}</span> {day}</td>,
        );
    };

    // structure du calendrier (semaine)
    const totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];
    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            rows.push(cells);
        }
    });

    const allDaysInMonth = rows.map((day) => (
        <tr>{day}</tr> // probleme de key
    ));

    return (
        <div>
        <div className="tail-datetime-calendar" >
            <div className="calendar-navi" >
                <span className="calendar-label" onClick={showMonth} > {month()} </span>
                <span className="calendar-label" onClick={showYear}> {year()} </span>
            </div>            
                {monthIsDisplayed && <Months />}
                {yearIsDisplayed && <Years />}
            <div className="calendar-date" >
                <table className="calendar-days" >
                    <thead>
                        <tr>
                            {
                                weekDayName.map(day => (
                                    <th key={day} className="week-day" > {day} </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {allDaysInMonth}
                    </tbody>
                </table>
            </div>
        </div>
        {eventInfos ? <div className="calendar-info">
        <h3>{eventInfos.title}</h3>
        <p>{eventInfos.place}</p>
        <p>{eventInfos.content}</p>
        </div>
        : ""}
        </div>
    )
};

Calendar.propTypes = {
    dateObject: Proptypes.object.isRequired,
    monthIsDisplayed: Proptypes.bool.isRequired,
    showMonth: Proptypes.func.isRequired,
    yearIsDisplayed: Proptypes.bool.isRequired,
    showYear: Proptypes.func.isRequired,
    handleDayClick: Proptypes.func.isRequired,
    events: Proptypes.array.isRequired,
    selectEvent: Proptypes.func.isRequired,
    eventInfos: Proptypes.string.isRequired,

};


export default Calendar;