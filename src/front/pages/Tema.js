import React, { Component, useState } from "react";
import "../css/Tema.css";
import "../media/NewsMedia.css";
// import HomeImg1 from ' ../img/Homeimg1.png'
import HomeImg1 from "../img/Homeimg1.png";
import HomeImg2 from "../img/homeimg-2.png";
import HomeImg3 from "../img/About-news.png";
import HomeImg4 from "../img/image 11.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Tema() {
  const [phone, usePhone] = useState();
  const [phone2, usePhone2] = useState();
  return (
    <div className="asos">
      <h1 className="chastie">Частые вопросы</h1>
      {/* <details className='accors'>
          <summary>          Чем занят ребёнок в детском саду?</summary>
          <p>Для оформления в детский сад необходимо предоставить следующие документы:</p>
        </details>
        <hr className='hr' />
        <details className='accors'>
          <summary>    Сколько детей в группах детского сада?</summary>
          <p>1. Заявление (бланк можно скачать  в разделе О нас/ Документы);</p>
        </details>
        <hr className='hr' />
        <details className='accors'>
          <summary>           Кто занимается медицинским обслуживанием детей?</summary>
          <p>2. Паспорта родителей;</p>
        </details>
        <hr className='hr' />
        <details className='accors'>
          <summary>         Какие документы нужны для оформления в детский сад?</summary>
          <p>3. Свидетельство о рождении ребенка;</p>
        </details>
        <hr className='hr' />
        <details className='accors'>
          <summary>        Про питание</summary>
          <p>4. СНИЛС ребенка и родителей;</p>
        </details>
        <hr className='hr' />
        <details className='accors'>
          <summary>           Какие кружки входят в оплату, а какие нужно оплачивать дополнительно?</summary>
          <p>5. Медицинская карта Ф26;</p>
        </details>
        <hr className='hr' />
        <details className='accors'>
          <summary>           Как отслеживается развитие ребенка?</summary>
          <p>6. Договор  (заключается в детском саду).</p>
        </details> */}
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
                id="userNumber"
                country={"ru"}
                value={phone}
                onChange={(phone) => usePhone}
              />
              <button className="opens">отправить</button>
            </div>
          </div>
          <div className="blogs">
            <img src={HomeImg4} alt="" />
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
    </div>
  );
}
