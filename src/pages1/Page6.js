import React from "react";
import yangi from "../img/image 31.png";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AllPages.css";

export default function Page6() {
  const [date, setDate] = useState(new Date());

  function open() {
    document.querySelector('.modalSozdat').style = 'display: block'
    document.querySelector('.ybuyi').style = 'display: none;'
    document.querySelector('.text-center').style = 'display: none'
  }
  function close() {
    document.querySelector('.modalSozdat').style = 'display: none'
    document.querySelector('.ybuyi').style = 'display: block'
    document.querySelector('.text-center').style = 'display: block'
  }



  return (
    <div className="The-Big">
      <div className="modalSozdat">
        <span className="clossedModal" onClick={() => close()}>X</span>
        <h4>Создать запись о пропуске занятий</h4>
        <br />
        <h4>Ребенок *</h4>
        <select className="selectDeti">
          <option>Маринин Миша</option>
          <option>Маринина Наташа</option>
        </select>
        <div className="datanachl">
          <div className="hashla">
            <h4>Дата начала *</h4>
            <input type='date' />
          </div>
          <div className="hashla">
            <h4>Дата окончания *</h4>
            <input type='date' />
          </div>
        </div>
        <h4>Часть дня *</h4>
        <div className="checkboxForm">
          <div className="chekked">
            <input type='checkbox' />
            <h5>Утро</h5>
          </div>
          <div className="chekked">
            <input type='checkbox' />
            <h5>После обеда</h5>
          </div>
          <div className="chekked">
            <input type='checkbox' />
            <h5>Весь день</h5>
          </div>
        </div>
        <h4>Причина *</h4>
        <select className="boleznS">
          <option>Болезнь</option>
          <option>Посещение врача</option>
          <option>Отпуск</option>
          <option>Семейные об-ва</option>
        </select>
      </div>
      <div className="ybuyi">
        <h1 className="text-center">React Calendar</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="pulsDiv" onClick={() => open()}>
          <span>+</span>
        </div>
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span>
        {date.toDateString()}
      </p>
    </div>
  );
}
