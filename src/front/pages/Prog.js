import React, { Component, useState } from 'react'
import '../css/Prog.css'
import '../media/ProgMedia.css'
import ImgProg1 from '../img/image 26.png'
import Img4 from '../img/image 11.png'
import screen from '../img/screen.png'
import PhoneInput from 'react-phone-input-2'
import { Swiper, SwiperSlide } from 'swiper/react';



export default function Prog() {
    const [phone2, usePhone2] = useState()
    return (
        <>
            <h1 className='Prog-h1'>Программа</h1>
            <div className="Progdiv-1">
                <img src={ImgProg1} alt="" />
                <div className="kotta">
                    <h1>Волшебник 3 уровня</h1>
                    <p>Группа для детей 3-4 лет<br />
                        <br />
                        В этой программе мы учим родителей наблюдать за их детьми и даем навыки организации домашней среды в соответствии с потребностями ребенка. Занятия служат хорошей площадкой социализации для родителей.
                        <br /><br />
                        Неполный день| 8:30 - 12:00 - 8 000 р.
                        Полный день | 8:30 - 18:45 - 13 000 р.</p>
                </div>
            </div>
            <div className="Progdiv-1">
                <div className="kotta">
                    <h1>Волшебник 2 уровня</h1>
                    <p>Группа для детей 4 -5 лет<br /><br />

                        Пятидневная программа, рассчитанная на установление отношений с другими детьми и
                        взрослыми, освоение  базовых навыков самообслуживания (одевание и раздевание, использование туалета, приготовление еды и т.д.).
                        <br /><br />
                        Неполный день| 8:30 - 12:00 - 8 000 р.
                        Полный день | 8:30 - 18:45 - 13 000 р.</p>
                </div>
                <img src={ImgProg1} alt="" />
            </div>
            <div className="Progdiv-1">
                <img src={ImgProg1} alt="" />
                <div className="kotta">
                    <h1>Волшебник 3 уровня</h1>
                    <p>Группа для детей 3-4 лет<br />
                        <br />
                        В этой программе мы учим родителей наблюдать за их детьми и даем навыки организации домашней среды в соответствии с потребностями ребенка. Занятия служат хорошей площадкой социализации для родителей.
                        <br /><br />
                        Неполный день| 8:30 - 12:00 - 8 000 р.
                        Полный день | 8:30 - 18:45 - 13 000 р.</p>
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
                                id="userNumber2"
                                className='userNumber2'
                                country={'ru'}
                                value={phone2}
                                onChange={phone2 => usePhone2}
                            />
                            <button>отправить</button>
                        </div>
                    </div>
                    <div className="blogs">
                        <img src={Img4} alt="" />
                    </div>
                </div>
            </div>
            {/* <img src={screen} alt="" /> */}
        </>
    )
}
