import React, { Component } from 'react'


import '../css/Table.css'
import '../media/TableMedia.css'
import Img4 from '../img/image 25.png'
import { Swiper, SwiperSlide } from 'swiper/react';




export default class Table extends Component {
  render() {
    return (
      <>
        <h1 class='Table-h1'>Расписание доп. занятий</h1>
        <div className="BigTable">
          <div className="table">
            <ul className='table-idth'>
              <h4 className='Table-h4'>Название услуги</h4>
              <li>Хореография </li>
              <li>Лепка из глины</li>
              <li>ИЗО-студия</li>
              <li>Ментальная арифметика</li>
              <li>Шахматы</li>
              <li>Английский язык</li>
              <li>Йога</li>
              <li>ОФП</li>
              <li>Театральная мастерская</li>
              <li>Конструирование</li>
            </ul>
          </div>
          <div className="table">
            <ul className='table-blue'>
              <h4>Пн</h4>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
            </ul>
          </div>
          <div className="table">
            <ul className='table-blue'>
              <h4>Вт</h4>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
            </ul>
          </div>
          <div className="table">
            <ul className='table-blue'>
              <h4>Ср</h4>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
              <li>10.00 - 15.00</li>
            </ul>
          </div>
          <div className="table">
            <ul className='table-blue'>
              <h4>Чт</h4>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
            </ul>
          </div>
          <div className="table">
            <ul className='table-blue'>
              <h4>Пт</h4>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
            </ul>
          </div>
          <div className="table">
            <ul className='table-blue'>
              <h4>Сб</h4>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
            </ul>
          </div>
          <div className="table">
            <ul className='table-blue'>
              <h4>Вс</h4>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
              <li>10.00</li>
            </ul>
          </div>
        </div>
        <div className="blog">
          <div className="bgs">
            <div className="blogs">
              <h1>Остались вопросы? Получите
                бесплатную консультацию</h1>
              <p>Оставьте телефон и мы перезвоним
                и расскажем все подробности о филиале</p>
              <div className="forms">
                <input type="number" placeholder={'+ 7 _  _  _  -  _  _  _  -  _  _  -  _  _'} />
                <button>отправить</button>
              </div>
            </div>
            <div className="blogs">
              <img src={Img4} alt="" />
            </div>
          </div>
        </div>
      </>
    )
  }
}
