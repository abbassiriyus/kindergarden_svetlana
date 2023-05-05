import React, { Component } from 'react'

import '../css/Teacher1.css'

import { Swiper, SwiperSlide } from 'swiper/react';


export default class Teacher1 extends Component {
  render() {
    return (
      <>
      {/* Задания выбор на отправку */}
        <div className="Big-grub">
      <div className="Btn-groups">
        <button>ЯНВАРЬ</button>
        <button>ФЕВРАЛЬ</button>
        <button>МАРТ</button>
      </div>
      <div className="Btn-groups">
        <button>ЯНВАРЬ</button>
        <button>ФЕВРАЛЬ</button>
        <button>МАРТ</button>
      </div>
      <div className="Btn-groups">
        <button>ЯНВАРЬ</button>
        <button>ФЕВРАЛЬ</button>
        <button>МАРТ</button>
      </div>
      <div className="Btn-groups">
        <button>ЯНВАРЬ</button>
        <button>ФЕВРАЛЬ</button>
        <button>МАРТ</button>
      </div>
      </div>
      </>
    )
  }
}