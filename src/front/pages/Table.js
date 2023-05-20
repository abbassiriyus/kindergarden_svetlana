import React, { useState } from "react";

import "../css/Table.css";
import "../media/TableMedia.css";
import Img4 from "../img/image 25.png";
import { Swiper, SwiperSlide } from "swiper/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default function Table() {
  const [phone2, usePhone2] = useState();

  return (
    <>
      <h1 class="Table-h1">Расписание доп. занятий</h1>
      <div className="helloAmirxan">
        <div className="ras_bigblock">
          <table className="body1_tabl_block1">
            <tr>
              <th className="th2_block1_body1">Название услуги</th>
              <th className="th1_block1_body1">Пн</th>
              <th className="th1_block1_body1">Вт</th>
              <th className="th1_block1_body1">Ср</th>
              <th className="th1_block1_body1">Чт</th>
              <th className="th1_block1_body1">Пт</th>
              <th className="th1_block1_body1">Сб</th>
              <th className="th1_block1_body1">Вс</th>
            </tr>
            <tr>
              <td className="td2_block1_body1">Хореография</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Лепка из глины</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">ИЗО-студия</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Ментальная арифметика</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Шахматы</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Английский язык</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>

              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Йога</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">ОФП</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Театральная мастерская</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
            <tr>
              <td className="td2_block1_body1">Конструирование</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00 - 15.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
              <td className="td1_block1_body1">10.00</td>
            </tr>
          </table>
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
    </>
  );
}
