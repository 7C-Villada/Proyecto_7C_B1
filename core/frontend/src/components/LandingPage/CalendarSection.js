import React from "react";
import Calendar from "../UI/Calendar";
import Card from "../UI/Card";
import "./CalendarSection.css";

const CalendarSection = () => {
  return (
    <div className="calendar-section-container">
      <Calendar />
      <Card title={"Evento"} />
    </div>
  );
};

export default CalendarSection;
