import React from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import "./Calendar.css";
import "../../App.css";

const Calendar = () => {
  return (
    // <div className="calendar-container">
    //   <h1>Calendario</h1>
    // </div>
    <CalendarComponent id="calendar" className="calendar-container" />
  );
};

export default Calendar;
