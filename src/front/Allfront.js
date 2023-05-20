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
import Food from "./pages/Food";
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
    document.querySelector(".modalEnter1").style = "display: block";
  };
  const closeModal = () => {
    document.querySelector(".modalEnter1").style = "display: none";
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
              <a href="/landing">Документы</a>
              <a href="/Teacher">Питание</a>
              <a href="/tema">Частые вопросы</a>
            </div>
          </span>
          <span id="nhyrfv5" className="dropdown">
            <p className="labelSelect">
              Расписание <br /> <IoIosArrowDown />
            </p>
            <div className="selectNav0 ">
              <a href="/Table">Расписание доп. занятий</a>
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
          <a href="/home">Новости</a>
          <a href="#kontactBlog">Команда</a>
          <a href="#footer">Контакты</a>
          <div onClick={enterOpen} className="btnEnter">
            Войти
          </div>
          <div className="modalEnter1">
            {/* <h2>Вход для</h2> */}
            <a href="form">
              Для
              <br /> сотрудников
            </a>
            <br />
            <a href="number">
              Для <br />
              родителей
            </a>
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
          <Route path="/Food" element={<Food />} />
        </Routes>
      </BrowserRouter>

      {/* <HomePage /> */}
      <div>
      <iframe
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7861001880665!2d46.011060176536894!3d51.535482971819754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7b706714d39%3A0xfcfe98f6fcfc6cdb!2z0YPQuy4g0J_Rg9Cz0LDRh9GR0LLQsCDQlS4g0JgsIDk4LzEwMCwg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0MTAwMTI!5e0!3m2!1sru!2s!4v1684586014215!5m2!1sru!2s" 
        height="450"
        style={{
          border: "0",
          width: "90%",
          marginLeft: "5%",
          marginTop: "10px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
      <div className="Footer" id="footer">
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
                  </span>
                  <h1 className="pulsyet"> +7 (8452) 57 79 35</h1>
                </a>
                <a href="#">wizardschool@mail.ru</a>
              </div>

              <p>
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
                  <a href="/user">О центре</a>
                </li>
                <li>
                  <a href="/landing">Документы</a>
                </li>
                <li>
                  <a href="/Teacher">Питание</a>
                </li>
                <li>
                  <a href="/tema">Частые вопросы</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h2>Расписание</h2>
                </li>
                <li>
                  <a href="/Table">Расписание основное</a>
                </li>
                <li>
                  <a href="/Table">Расписание доп. занятий</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/prog">
                    <h2>Программа</h2>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/home">
                    <h2>Новости</h2>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">
                    <h2>Команда</h2>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">
                    <h2>Контакты</h2>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
