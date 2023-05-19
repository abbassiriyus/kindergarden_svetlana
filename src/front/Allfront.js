import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import User from "./pages/User";
import Prog from "./pages/Prog";
import Table from "./pages/Table";
import Teacher from "./pages/Teacher1";
import Form from "./pages/Form";
import Number from "./pages/Number";
import RestApi from "./pages/RestApi";
import Tema from "./pages/Tema";
import HomePage from "./pages/HomePage";
import Landing from "./pages/Landing";
import Raspisaniya from "./pages/Raspisaniya";
import "./AllFront.css";
import $ from "jquery";

// images
import Logo from "./Images/logo.png";
import telephone from "./Images/telephone.png";

// Icons
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Allfront() {
  const selectOpen1 = () => {
    $(".selectNav1").addClass("ActiveSelect");
  };
  const selectClose1 = () => {
    $(".selectNav1").removeClass("ActiveSelect");
  };
  const selectOpen2 = () => {
    $(".selectNav2").addClass("ActiveSelect");
  };
  const selectClose2 = () => {
    $(".selectNav2").removeClass("ActiveSelect");
  };
  const enterOpen = () => {
    $(".modalEnter").toggleClass("activeModalEnter");    
  };
  const closeModal = () => {
    $(".modalEnter").removeClass("activeModalEnter");
  };
  const burgerMenu = () => {
    $(".BurgerMenu").toggleClass("activeMenu");
    $(".linksNav").toggleClass("activeNav");
  };
  const ToPage = () => {
    sessionStorage.setItem("page", 1);
    window.location.reload();
  };
  return (
    <div className="BigHome">
      <div className="Navbar">
        <div className="Logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>

        <div onClick={burgerMenu} className="BurgerMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="linksNav">
          <span className="dropdown">
            <p
              onMouseEnter={selectOpen1}
              onMouseLeave={selectClose1}
              className="labelSelect"
            >
              О нас <br /> <IoIosArrowDown />
            </p>
            <div
              onMouseEnter={selectOpen1}
              onMouseLeave={selectClose1}
              className="selectNav1 "
            >
              <a href="/user">О Центре</a>
              <a href="landing">Документы</a>
              <a href="/tema">Частые вопросы</a>
            </div>
          </span>
          <span id="nhyrfv5" className="dropdown">
            <p className="labelSelect">
              Расписание <br /> <IoIosArrowDown />
            </p>
            <div className="selectNav0 ">
              <a href="/Raspisaniya">Расписание доп. занятий</a>
            </div>
          </span>
          <span className="dropdown">
            <div
              onMouseEnter={selectOpen2}
              onMouseLeave={selectClose2}
              className="selectNav2"
            ></div>
          </span>
          <a href="/prog">Программа</a>
          <a href="/news">Новости</a>
          <a href="/home">Команда</a>
          <div onClick={enterOpen} className="btnEnter">
            Войти
          </div>

          <div className="modalEnter1">
            {/* <h2>Вход для</h2> */}
            <a href="form">Для<br /> сотрудников</a><br />
            <a href="number">Для <br />родителей</a>
            <div onClick={closeModal} className="closeModal">
              Закрыть
            </div>
          </div>
        </div>

        <div className="ContactsNav">
          <div className="Streetname">
            <p> Саратов, ул. Пугачева д.98/100</p>
          </div>
          <div className="NumberNav">
            <a href="#">
              <span>
                <img src={telephone} alt="" />
              </span>
              +7 (8452) 57 79 35
            </a>
            <a href="#">
              <SlSocialVkontakte />
            </a>
            <a href="#">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/User" element={<User />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Prog" element={<Prog />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Teacher" element={<Teacher />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Number" element={<Number />} />
          <Route path="/RestApi" element={<RestApi />} />
          <Route path="/Tema" element={<Tema />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Raspisaniya" element={<Raspisaniya />} />
        </Routes>
      </BrowserRouter>

      {/* <HomePage /> */}
      <div className="Footer">
        <div className="BelowMap">
          <div className="leftContent">
            <div className="logoFooter">
              <img src={Logo} alt="" />
            </div>
            <div className="contactsFooter">
              <div className="numberFooter">
                <a className="ahref" href="#">
                  <span>
                    <img src={telephone} alt="" />
                  </span>{" "}
                  <h1 className="pulsyet"> +7 (8452) 57 79 35</h1>
                </a>
                <a href="#">wizardschool@mail.ru</a>
              </div>

              <p>
                {" "}
                Саратов, ул. Пугачева д.98/100
                <br />
                Вход со двора
              </p>

              <div className="linksSocial">
                <a href="#">
                  <SlSocialVkontakte />
                </a>
                <a href="#">
                  <FaTelegramPlane />
                </a>
              </div>

              <span>Copyrights: Школа Волшебников 2023</span>
            </div>
          </div>
          <div className="RightContent">
            <div className="linksFooter">
              <ul>
                <li>
                  <h2>О нас</h2>
                </li>
                <li>
                  <a href="#">О центре</a>
                </li>
                <li>
                  <a href="#">Документы</a>
                </li>
                <li>
                  <a href="#">Частые вопросы</a>
                </li>
                <li>
                  <a href="#">Питание</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Расписание</h2>
                </li>
                <li>
                  <a href="#">Расписание основное</a>
                </li>
                <li>
                  <a href="#">Расписание доп. занятий</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Программа</h2>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Новости</h2>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Команда</h2>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Контакты</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
