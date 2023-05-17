import React from 'react'
import yangi from '../img/image 31.png'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AllPages2.css'

export default function Page6() {
  const [date, setDate] = useState(new Date());
  var hlo = '< ЯНВАРЬ 2023 >'
// function clickaday (id) {
//   console.log("ishladi");
//   console.log(id);
// }
function clickaday (selectedDate) {
  const formattedDate = selectedDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  console.log(formattedDate.replace(/\./g, '-'));
}
  return (
    <div className='only_you'>
      <h1 className='text-center'>{hlo}</h1>
      <div className='calendar-container'>
        <Calendar onClickDay={() => clickaday(date)}  onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  )
}
