import React, { Component, useState } from "react";
import "../css/Prog.css";
import "../media/ProgMedia.css";
import ImgProg1 from "../img/image 26.png";
import Img4 from "../img/image 11.png";
import screen from "../img/screen.png";
import PhoneInput from "react-phone-input-2";
import { Swiper, SwiperSlide } from "swiper/react";

import "react-phone-input-2/lib/style.css";

export default function Prog() {
  const [phone2, usePhone2] = useState();
  return (
    <>
      <h1 className="Prog-h1">Программа</h1>
      <div className="Progdiv-1">
        <img src={ImgProg1} alt="" />
        <div className="kotta">
          <h1>Волшебник 3 уровня</h1>
          <p>
            Группа для детей 3-4 лет
            <br />
            <br />В этой программе мы учим родителей наблюдать за их детьми и
            даем навыки организации домашней среды в соответствии с
            потребностями ребенка. Занятия служат хорошей площадкой социализации
            для родителей. Неполный день| 8:30 - 12:00 - 8 000 р. Полный день |
            8:30 - 18:45 - 13 000 р.
          </p>
        </div>
      </div>
      <div className="Progdiv-1">
        <div className="kotta">
          <h1>Волшебник 2 уровня</h1>
          <p>
            Группа для детей 4 -5 лет
            <br />
            <br />
            Пятидневная программа, рассчитанная на установление отношений с
            другими детьми и взрослыми, освоение базовых навыков
            самообслуживания (одевание и раздевание, использование туалета,
            приготовление еды и т.д.). Неполный день| 8:30 - 12:00 - 8 000 р.
            Полный день | 8:30 - 18:45 - 13 000 р.
          </p>
        </div>
        <img src={ImgProg1} alt="" />
      </div>
      <div className="Progdiv-1">
        <img src={ImgProg1} alt="" />
        <div className="kotta">
          <h1>Волшебник 3 уровня</h1>
          <p>
            Группа для детей 3-4 лет
            <br />
            <br />В этой программе мы учим родителей наблюдать за их детьми и
            даем навыки организации домашней среды в соответствии с
            потребностями ребенка. Занятия служат хорошей площадкой социализации
            для родителей. Неполный день| 8:30 - 12:00 - 8 000 р. Полный день |
            8:30 - 18:45 - 13 000 р.
          </p>
        </div>
      </div>
      <div className="blog">
        <div className="bgs">
          <div className="blogs">
            <h1>Остались вопросы? Получите бесплатную консультацию</h1>
            <p>
              Оставьте телефон и мы перезвоним и расскажем все подробности о
              филиале
            </p>
            <div className="forms">
              <PhoneInput
                id="userNumber2"
                className="userNumber2"
                country={"ru"}
                value={phone2}
                onChange={(phone2) => usePhone2}
              />
              <button>отправить</button>
            </div>
          </div>
          <div className="blogs">
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.126783016199!2d69.35125797648543!3d41.284345102379696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef58a2f81879b%3A0x9111f25766467abb!2z0JTQtdGC0YHQutC40Lkg0YHQsNC0IOKEliA5Mw!5e0!3m2!1sru!2s!4v1684415277496!5m2!1sru!2s"
        height="450"
        style={{ border: "0", width: "80%", marginLeft: "10%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <img src={screen} alt="" /> */}
    </>
  );
}
