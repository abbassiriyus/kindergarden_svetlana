import React from "react";
import yangi from "../img/image 31.png";
import { useState,useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AllPages2.css";
import img from "../img/free-icon-daughter-8229500 (2).png";
import img3 from "../img/free-icon-thermometer-1165508 1.png"
import axios from "axios";

export default function Page6() {
  const [date, setDate] = useState(new Date());
  const [excuse, setExcuse] = useState([]);
  var hlo = "< ЯНВАРЬ 2023 >";
  // function clickaday (id) {
  //   console.log("ishladi");
  //   console.log(id);
  // }
 useEffect(() => {
  const fetchData = async () => {

  }
 
 }, []);
  function clickaday(date) {
    var d = date
    var a = `${d.getDate()}-0${d.getMonth()+1}-${d.getFullYear()}`; // => 9
if (a==="17-05-2023") {
  document.querySelector(".BigModalChild").style = "display: flex;";
}else{}
  console.log(a);
    // console.log(selectedDate)
  }
  const getTileContent = ({ date, view }) => {
    // Если дата находится в текущем месяце и это не суббота или воскресенье
    // var oy =date.getMonth()+1
    // console.log(oy);
    if (date.getDate() === 17 && date.getMonth() === 4) {
      return <img src={img3} alt={img3}/>;
    } else {
      return null;
      
    }};
   
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
 
      <div className="calendar-container">
        <Calendar
        onClickDay={() => clickaday(date)}  
        onChange={setDate} 
        value={date} 
        tileContent={getTileContent}
        />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}
