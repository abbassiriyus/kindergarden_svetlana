import React from "react";
import "./AllPages.css";
import img from "../img/image 37.png";
import axios from "axios";
import img2 from "../img/image 38.png";
import img3 from "../img/image 39.png";
import img4 from "../img/image 40.png";
import url from "../host";
import { useState } from "react";
import imgUstz from '../img/image 34.png'
import imgTst from '../img/301-3011314_pe-success-icon-task-done-removebg-preview.png'

export default function Page7() {
  const [data, setData] = useState([]);

  function openTest() {
    document.querySelector(".divTest").style = "display: block";
    document.querySelector(".GroupsBtn").style = "display: none";
  }
  function closeTest() {
    document.querySelector(".divTest").style = "display: none";
    document.querySelector(".GroupsBtn").style = "display: block";
  }

  function gorupGet() {
    axios.get(`${url}/group`).then((res) => {
      setData(res.data);
    });
    document.querySelector('.getGrup').style = 'display: block;'
  }

  function getClose () {
    document.querySelector('.getGrup').style = 'display: none;'
    document.querySelector('.successfull').style = 'display: block;'
    setTimeout(() => {
      document.querySelector('.successfull').style = 'display: none;'
    }, 1000000000)
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
          Какой из этих предметов не относится к живой природе?
          <span onClick={() => closeTest()}>X</span>
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
        <div className="divTest2">
          <h2 className="ixx">
            Какой из этих предметов не относится к живой природе?
          </h2>
          <div className="Test_09">
            <img src={img2} alt="" />
            <div className="hashla">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
              <h1>4</h1>
            </div>
          </div>
        </div>
        <div className="divTest2">
          <h2 className="ixx">
            Какой из этих предметов не относится к живой природе?
          </h2>
          <div className="Test_09">
            <img src={img3} alt="" />
            <div className="hashla">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
              <h1>4</h1>
            </div>
          </div>
        </div>
        <div className="divTest2">
          <h2 className="ixx">
            Какой из этих предметов не относится к живой природе?
          </h2>
          <div className="Test_09">
            <img src={img4} alt="" />
            <div className="hashla">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
              <h1>4</h1>
            </div>
          </div>
        </div>
        <button className="Btn-Send" onClick={() => gorupGet()}>
          Отправить
        </button>
      </div>
      <div className="getGrup">
        {data.map((item) => {
          return (
            <div className="groupGet" onClick={() => getClose()}>
              <img src={imgUstz} />
              <h1>{item.groupname}</h1>
            </div>
          );
        })}
      </div>
      <div className="successfull">
        <h1>Oтправлена!</h1>
        <img src={imgTst} />
      </div>
    </div>
  );
}
