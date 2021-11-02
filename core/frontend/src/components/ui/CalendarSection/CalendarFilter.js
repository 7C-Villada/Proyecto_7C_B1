import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./DatePicker.css";
import "./Calendar.css";

const CalendarFilter = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <DatePicker
        onChange={onChange}
        value={value}
        locale="es-MX"
        className="react-date-picker"
      />
    </>
  );
};

export default CalendarFilter;
