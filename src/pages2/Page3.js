import React from "react";
import yangi from "../img/image 31.png";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AllPages2.css";
import img from "../img/free-icon-daughter-8229500 (2).png";

export default function Page6() {
  const [date, setDate] = useState(new Date());
  var hlo = "< ЯНВАРЬ 2023 >";
  // function clickaday (id) {
  //   console.log("ishladi");
  //   console.log(id);
  // }
  function clickaday(selectedDate) {
    const formattedDate = selectedDate.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    document.querySelector(".BigModalChild").style = "display: flex;";
    console.log(formattedDate.replace(/\./g, "-"));
  }

  function closeChildModal() {
    document.querySelector(".BigModalChild").style = "display: none;";
  }

  return (
    <div className="only_you">
      <div className="BigModalChild">
        <div className="ModalChilds">
          <h4 className="ixk">
            Детали отсутствия 2023/01/24{" "}
            <span onClick={() => closeChildModal()}>X</span>
          </h4>
          <br />
          <h4>Ребенок </h4>
          <div classname="childs">
            <img src={img} alt="" />
            <p>Маринина Наташа</p>
          </div>
          <h4>Дата</h4>
          <div className="mchj">
            <h4>2023/01/24</h4> <h4>Весь день</h4>
          </div>
          <h4>Причина </h4>
          <p>Болезнь</p>
          <br />
          <p>
            Автор: Спицына Маргарита Николаевна
            <br />
            Дата: 2023/01/24 08:00
          </p>
        </div>
      </div>
      <h1 className="text-center">{hlo}</h1>
      <div className="calendar-container">
        <Calendar
          onClickDay={() => clickaday(date)}
          onChange={setDate}
          value={date}
        />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}
