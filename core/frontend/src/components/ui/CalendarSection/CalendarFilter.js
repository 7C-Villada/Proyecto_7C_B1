import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./DatePicker.css";
import "./Calendar.css";

const CalendarFilter = (props) => {
  const [value, onChange] = useState(null);

  const handleCalendar = (value) => {
    onChange(value);
    value ? props.parentCallback(value) : props.parentCallback(value);
  };

  return (
    <>
      <DatePicker
        onChange={handleCalendar}
        value={value}
        locale="es-MX"
        className="react-date-picker"
      />
    </>
  );
};

export default CalendarFilter;
