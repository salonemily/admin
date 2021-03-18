import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarComponent() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue:any) {
    setValue(nextValue);
  }

  return (
    <Calendar
      onChange={onChange}
      value={value}
    />
  );
}
export default CalendarComponent