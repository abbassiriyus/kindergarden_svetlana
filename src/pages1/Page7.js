import React from "react";
import "./AllPages.css";
import img from "../img/image 37.png";
import axios from "axios";

export default function Page7() {
  function openTest() {
    document.querySelector(".divTest").style = "display: flex";
    document.querySelector(".GroupsBtn").style = "display: none";
  }
  function closeTest() {
    document.querySelector(".divTest").style = "display: none";
    document.querySelector(".GroupsBtn").style = "display: block";
  }
  return (
    <div>
      
      <div className="GroupsBtn">
        <div className="groupp">
          <button onClick={() => openTest()}>ЯНВАРЬ</button>
          <button onClick={() => openTest()}>ФЕВРАЛЬ</button>
          <button onClick={() => openTest()}>МАРТ</button>
        </div>
        <div className="groupp">
          <button onClick={() => openTest()}>АПРЕЛЬ</button>
          <button onClick={() => openTest()}>МАЙ</button>
          <button onClick={() => openTest()}>ИЮНЬ</button>
        </div>
        <div className="groupp">
          <button onClick={() => openTest()}>ИЮЛЬ</button>
          <button onClick={() => openTest()}>АВГУСТ</button>
          <button onClick={() => openTest()}>СЕНТЯБРЬ</button>
        </div>
        <div className="groupp">
          <button onClick={() => openTest()}>ОКТЯБРЬ</button>
          <button onClick={() => openTest()}>НОЯБРЬ</button>
          <button onClick={() => openTest()}>ДЕКАБРЬ</button>
        </div>
      </div>
      <div className="divTest">
        <h2 className="ixx">
          hello<span onClick={() => closeTest()}>X</span>
        </h2>
        <div className="Test_09">
          <img src={img} alt="" />
          <div className="hashla">
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
