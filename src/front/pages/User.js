import React, { Component, useState } from 'react'
import '../css/User.css'
import '../media/UserMedia.css'
import ImgUser from '../img/image 19.png'
import imgvd from '../img/image 22.png'
import IcnImg from '../img/Снимок экрана 2023-04-13 153505.png'
import Img4 from '../img/image 11.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';




export default function User() {
    const [phone, usePhone] = useState()
  return (
    <div>
       <>
                <h1 className='User-h1'>О центре</h1>
                <div className="User-div">
                    <img src={ImgUser} alt="" />
                    <div className="user-txt">
                        <h1>РуководительШколы Волшебников</h1>
                        <h3>Абрикосова</h3>
                        <p className='user-name'>Анастасия Алексанровна</p>
                        <p>Педагог - психолог</p>
                        <p>Стаж 11 лет</p>
                    </div>
                </div>
                <div className="user-biz">
                    <p className='Biz'>Мы понимаем, что вам, родителям, важно знать и быть уверенными в том, что в детском саду ребенок находится в безопасности, что о нем заботятся, уделяют внимание, развивают и обучают. Именно поэтому мы  регулярно предоставляем информацию о прогрессе и успехах наших ребят в их электронных дневниках.  Наши двери открыты для деток от 3-х до 7-ми лет. Основная наша миссия: заложить основы гармоничного и успешного развития ребенка. Выбирая развивающий центр для своего ребенка, Вы во многом определяете его будущее. «Школа волшебников» - станет отличным стартом для будущих успехов Вашего ребенка.
                        <br />   <span>Наша задача — сделать так, чтобы каждый день в Школе Волшебников был для наших маленьких волшебников счастливым.
                        </span>
                    </p>
                    <p className='Biz'>В нашем детском саду мы используем современные методики и учебные пособия. Мы подчеркиваем необходимость подготовки детей к жизни в мультикультурной среде, в которой открытость и коммуникабельность играют значительную роль. Наш детский сад обеспечивает детям тесный контакт с английским языком. Начиная с самого начала образовательного приключения, мы хотим подготовить наших учеников к смелому и открытому взгляду на мир, пробудить их любопытство и показать, насколько увлекательным может быть обучение. </p>
                </div>
                <h1 className='user-vd'>Видео из жизни нашего сада</h1>
                <div className="user-video">
                    <img src={imgvd} alt="" />
                    <img src={imgvd} alt="" />
                    <img src={imgvd} alt="" />
                </div>
                <div className="Big-clock">
                    <div className="clocks">
                        <div className="clok">
                            <img src={IcnImg} alt="" />
                            <p><span>Часы работы: </span> с 7:30 до 19:00</p>
                        </div>
                        <div className="clok">
                            <img src={IcnImg} alt="" />
                            <p><span>Часы работы: </span> с 7:30 до 19:00</p>
                        </div>
                        <div className="clok">
                            <img src={IcnImg} alt="" />
                            <p><span>Часы работы: </span> с 7:30 до 19:00</p>
                        </div>
                    </div>
                    <div className="clocks">
                        <div className="clok">
                            <img src={IcnImg} alt="" />
                            <p><span>Часы работы: </span> с 7:30 до 19:00</p>
                        </div>
                        <div className="clok">
                            <img src={IcnImg} alt="" />
                            <p><span>Часы работы: </span> с 7:30 до 19:00</p>
                        </div>
                        <div className="clok">
                            <img src={IcnImg} alt="" />
                            <p><span>Часы работы: </span> с 7:30 до 19:00</p>
                        </div>
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
                            <PhoneInput
                                    id="userNumber"
                                    country={'ru'}
                                    value={phone}
                                    onChange={phone => usePhone}
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
    </div>
  )
}
