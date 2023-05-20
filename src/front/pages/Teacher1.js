import React, { useState } from "react";

import "../css/Teacher1.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlus, FaTrashAlt, FaPenSquare } from "react-icons/fa";
// import {FiEdit} from 'ract-icons/fi'
import "react-phone-input-2/lib/style.css";
import img1 from "../img/image 4.png";
import Img4 from "../img/image 11.png";
import img2 from "../img/fac239f74cf0ae698ffe3b35a36b110a 1.png";
import img3 from "../img/image 22.png";
import modalImg from "../img/Group 10.png";
import PhoneInput from "react-phone-input-2";

export default function Teacher1() {
  const [phone2, usePhone2] = useState();
  function modalOpens() {
    document.querySelector(".modalZyav").style = "display: block";
    setTimeout(() => {
      document.querySelector(".modalZyav").style = "display: none";
    }, 1000);
  }
  return (
    <>
      <div className="modalZyav" id="modl">
        <img src={modalImg} />
        <h1>
          Ваша заявка <br /> отправлена!
        </h1>
        <br />
        <h4>Спасибо, мы с Вами свяжемся в ближайшее время</h4>
      </div>
      <div className="pit_big">
        <div className="pit_block1">
          <h1 className="pit_block1_h1">1 ЗАВТРАК</h1>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>

          <h1 className="pit_block1_h1">2 ЗАВТРАК</h1>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>

          <h1 className="pit_block1_h1">ОБЕД</h1>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>

          <h1 className="pit_block1_h1">ПОЛДНИК</h1>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <h1 className="pit_block1_h1">УЖИН</h1>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
          <p className="pit_block1_p">
            БЛЮДО 1
            <span>
              ......................................................................................................................
            </span>
            250 гр.
          </p>
        </div>
        <div className="pit_block2">
          <div className="pit_block2_div1">
            <img src={img1} alt="" />
          </div>
          <div className="pit_block2_div2">
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
          </div>
          <div className="pit_block2_div2">
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
      <div className="pit_block3">
        <img src={img3} alt="" />
        <img src={img3} alt="" />
        <img src={img3} alt="" />
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
              <button onClick={() => modalOpens()}>отправить</button>
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
        style={{
          border: "0",
          width: "100%",
          borderRadius: "10px",
          marginTop: "10px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
