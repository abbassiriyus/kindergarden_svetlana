import React, { useState } from 'react';
import "./HomePage.css"
import $ from "jquery"
import "react-bootstrap"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Carousel from 'react-grid-carousel'
import { Swiper, SwiperSlide } from 'swiper/react';


// images
import wizard from "../Images/hazard.png"
import clock from "../Images/clock.png"
import babyFace from "../Images/BabyFace.png"
import book from "../Images/book.png"
import spoon from "../Images/spoon.png"
import comments from "../Images/comments.png"
import baby from "../Images/Baby.png"
import vector1 from "../Images/Vector (4).png"
import vector2 from "../Images/Vector (5).png"
import vector3 from "../Images/Vector (6).png"
import vector4 from "../Images/Vector (7).png"
import vector5 from "../Images/Vector (8).png"
import vector6 from "../Images/Vector (9).png"
import vector7 from "../Images/Vector (10).png"
import vector8 from "../Images/Vector (11).png"
import vector9 from "../Images/Group 23.png"


import vector10 from "../Images/vectorLast.png"
import study from "../Images/study.png"
import azart from "../Images/azart.png"
import hurt from "../Images/hurt.png"
import paper from "../Images/paper.png"
import people1 from "../Images/people2.png"
import hazard2 from "../Images/hazard2.png"

import opa from "../Images/opa.png"
import opa2 from "../Images/opa2.png"
import ava from "../Images/Group 10.png"


const agreeRadio = () => {
    $(".radioHeader1").toggleClass("activeAgree")
}
const agreeRadio2 = () => {
    $(".radioHeader2").toggleClass("activeAgree")
}

export default function HomePage() {
    const [phone, usePhone] = useState()
    const [phone2, usePhone2] = useState()

    if (window.innerWidth < 576) {
        var cards = document.getElementsByClassName('card'),
            transforms = [
                {
                    x: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1
                },
                {
                    x: '-40%',
                    z: '-50px',
                    scale: 0.8,
                    opacity: 0.8
                },
                {
                    x: '40%',
                    z: '-50px',
                    scale: 0.8,
                    opacity: 0.8
                }
            ];
    } else {
        var cards = document.getElementsByClassName('card'),
            transforms = [
                {
                    x: 0,
                    z: 0,
                    scale: 1,
                    opacity: 1
                },
                {
                    x: '-55%',
                    z: '-50px',
                    scale: 0.8,
                    opacity: 0.8
                },
                {
                    x: '55%',
                    z: '-50px',
                    scale: 0.8,
                    opacity: 0.8
                }
            ];
    }
    let nextTransform = function (x) {
        if (x >= cards.length - 1) {
            x = 0;
        } else {
            x++;
        }
        return x;
    };

    function next() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.transform =
                'translateX(' + transforms[nextTransform(i)].x + ')' +
                'translateZ(' + transforms[nextTransform(i)].z + ')' +
                'scale(' + transforms[nextTransform(i)].scale + ')';
            cards[i].style.opacity = transforms[nextTransform(i)].opacity;
        }
        transforms.push(transforms.shift());
    }

    setTimeout(() => {
        document.getElementById('carousel').onclick = function () {
            next();
        };
    }, 1000);

    return (
        <>


            <div className="HomePage">
                <div className="HeaderHome">
                    <div className="textImage">
                        <span className="TextHeader">
                            <p>Быть ребенком -
                                это волшебство!</p>
                        </span>
                        <div className="imgWizard">
                            <img src={wizard} alt="" />
                        </div>
                    </div>

                    <div className="bannerHeader"></div>

                    <div className="formHeader">
                        <h1>Запишитесь
                            на персональную
                            экскурсию</h1>
                        <p>Заполните форму и посмотрите детский сад вживую в удобное для вас время</p>
                        <div className="inputsHeader">
                            <div className="inputHeader">
                                <input type="text" placeholder="Ваше имя" />
                                <span>*</span>
                            </div>
                            <div className="inputHeader">
                                <PhoneInput
                                className='Numberasd'
                                    id="userNumberasd"
                                    country={'ru'}
                                    value={phone}
                                    onChange={phone => usePhone}
                                />
                                <span>*</span>
                            </div>
                            <div className="inputHeader">
                                <input type="text" placeholder="Ваш e-mail" />
                            </div>
                        </div>
                        <div className="agreeRadio">
                            <div onClick={agreeRadio} className="radioHeader">
                                <div><span className="radioHeader1 "></span></div>
                            </div>
                            <p>Я принимаю условия
                                пользовательского соглашения</p>
                        </div>
                        <div className="btnSubmitHeader">
                            записаться
                        </div>
                    </div>
                </div>

                <div className="factorsHome">
                    <div className="factorHome ">
                        <div className="imgFactor orange">
                            <img src={clock} alt="photo" />
                        </div>
                        <p><strong>Часы работы:</strong> с 7:30 до 19:00</p>
                    </div>
                    <div className="factorHome ">
                        <div className="imgFactor pink">
                            <img src={babyFace} alt="photo" />
                        </div>
                        <p><strong>Группы:</strong> до 15 человек</p>
                    </div>
                    <div className="factorHome ">
                        <div className="imgFactor purple">
                            <img src={book} alt="photo" />
                        </div>
                        <p><strong>Контроль развития:</strong> электронный дневник развития с графическими отчетами</p>
                    </div>
                    <div className="factorHome ">
                        <div className="imgFactor purple">
                            <img src={spoon} alt="photo" />
                        </div>
                        <p><strong>Питание:</strong> 5-разовое, с учетом индивидуальных особенностей ребенка</p>
                    </div>
                    <div className="factorHome ">
                        <div className="imgFactor orange">
                            <img src={comments} alt="photo" />
                        </div>
                        <p><strong>Занятия:</strong> разностороннее развитие</p>
                    </div>
                    <div className="factorHome ">
                        <div className="imgFactor pink">
                            <img src={baby} alt="photo" />
                        </div>
                        <p><strong>Возраст детей:</strong> с 3 до 7 лет</p>
                    </div>


                </div>

                <div className="consultationHome">
                    <div className="ContentConsult">
                        <h2>Есть вопросы? Получите
                            бесплатную консультацию</h2>
                        <p>Оставьте телефон и мы перезвоним
                            и расскажем все подробности о филиале</p>
                        <div className="inputGroupConsult">
                            <PhoneInput
                                id="userNumber"
                                country={'ru'}
                                value={phone2}
                                onChange={phone2 => usePhone2}
                            />
                            <div className="SubmitConsult">
                                отправить
                            </div>
                        </div>
                        <div className="agreeRadio align-baseline">
                            <div onClick={agreeRadio2} className="radioHeader">
                                <div><span className="radioHeader2 "></span></div>
                            </div>
                            <p>Я принимаю условия
                                пользовательского соглашения</p>
                        </div>
                    </div>
                </div>

                <div className="moreServices">
                    <h2>Дополнительные услуги</h2>
                    <div className="rowServices row1">
                        <div className="service">
                            <div className="imgService">
                                <img src={vector1} alt="" />
                            </div>
                            <div className="textService">
                                <p>Музыкальные занятия</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector2} alt="" />
                            </div>
                            <div className="textService">
                                <p>Логическое мышление и
                                    компьютерная грамотность</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector3} alt="" />
                            </div>
                            <div className="textService">
                                <p>Развитие математических представлений</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector4} alt="" />
                            </div>
                            <div className="textService">
                                <p>Игровой английский </p>
                            </div>
                        </div>
                    </div>
                    <div id="row2" className="row2 rowServices">
                        <div className="service">
                            <div className="imgService">
                                <img src={vector5} alt="" />
                            </div>
                            <div className="textService">
                                <p>Легостроение и конструирование</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector6} alt="" />
                            </div>
                            <div className="textService">
                                <p>Тестопластика и глинопластика</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector9} alt="" />
                            </div>
                            <div className="textService">
                                <p>Риторика и ораторское мастерство</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector7} alt="" />
                            </div>
                            <div className="textService">
                                <p>Оздоровительные мероприятия </p>
                            </div>
                        </div>
                    </div>
                    <div id="row3" className="rowServices row3">
                        <div className="service">
                            <div className="imgService">
                                <img src={vector9} alt="" />
                            </div>
                            <div className="textService">
                                <p>Театральное искусство и актерское мастерство</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector8} alt="" />
                            </div>
                            <div className="textService">
                                <p>Выездные экскурсии</p>
                            </div>
                        </div>
                        <div className="service">
                            <div className="imgService">
                                <img src={vector4} alt="" />
                            </div>
                            <div className="textService">
                                <p>Подготовка к школе</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="forStarBanner">
                    <h2>Фотогалерия нашего сада</h2>
                    <p>Вы можете ознакомиться как проходят наши будни</p>
                    <div className="PhotosCarousel">
                        <div id="carousel">
                            <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div>
                        </div>
                    </div>
                    <div className="sectionPrem">
                        <img src={hazard2} alt="" />
                        <h2>Преимущества</h2>
                        <p>Волшебство - это большой труд! Это и есть наша жизнь, и цель нашего детского сада - помочь
                            ребенку освоить искусство формирования и поддержания особого состояния души, основанного на
                            творческом отношении к жизни!</p>
                        <div className="factorsHome sectionPremFactors">
                            <div className="factorHome textPrem">
                                <div className="imgFactor orange">
                                    <img src={study} alt="photo" />
                                </div>
                                <p><strong>Мастер-классы</strong></p>
                            </div>
                            <div className="factorHome textPrem">
                                <div className="imgFactor pink">
                                    <img src={azart} alt="photo" />
                                </div>
                                <p><strong>Игры-квесты</strong></p>
                            </div>
                            <div className="factorHome textPrem">
                                <div className="imgFactor purple">
                                    <img src={hurt} alt="photo" />
                                </div>
                                <p><strong>Конференции и проекты</strong></p>
                            </div>
                            <div className="factorHome textPrem">
                                <div className="imgFactor purple">
                                    <img src={paper} alt="photo" />
                                </div>
                                <p><strong>Опыты и эксперименты</strong></p>
                            </div>
                            <div className="factorHome textPrem">
                                <div className="imgFactor orange">
                                    <img src={vector10} alt="photo" />
                                </div>
                                <p><strong>Концерты и спектакли</strong></p>
                            </div>
                            <div className="factorHome textPrem">
                                <div className="imgFactor imgPeople pink">
                                    <img src={people1} alt="photo" />
                                </div>
                                <p><strong>Соревнования</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cardsCarousel">
                    <h2>Наша команда</h2>

                    <div className="CarouselCards">
                        <Carousel cols={4} rows={1} gap={20} loop>
                            <Carousel.Item>
                                <img src={opa} alt="no Photo" />
                                <div className="textCard">
                                    <h3>АБрикосова</h3>
                                    <h6>Анастасия Александровна</h6>
                                    <p>Директор</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={opa} alt="no Photo" />
                                <div className="textCard">
                                    <h3>АБрикосова</h3>
                                    <h6>Анастасия Александровна</h6>
                                    <p>Директор</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={opa} alt="no Photo" />
                                <div className="textCard">
                                    <h3>АБрикосова</h3>
                                    <h6>Анастасия Александровна</h6>
                                    <p>Директор</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={opa} alt="no Photo" />
                                <div className="textCard">
                                    <h3>АБрикосова</h3>
                                    <h6>Анастасия Александровна</h6>
                                    <p>Директор</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={opa} alt="no Photo" />
                                <div className="textCard">
                                    <h3>АБрикосова</h3>
                                    <h6>Анастасия Александровна</h6>
                                    <p>Директор</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={opa} alt="no Photo" />
                                <div className="textCard">
                                    <h3>АБрикосова</h3>
                                    <h6>Анастасия Александровна</h6>
                                    <p>Директор</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className="form2">
                    <div className="ContentConsult">
                        <h2>Остались вопросы? Получите
                            бесплатную консультацию</h2>
                        <p>Оставьте телефон и мы перезвоним
                            и расскажем все подробности о филиале</p>
                        <div className="inputGroupConsult">
                            <PhoneInput
                                id="userNumber"
                                country={'ru'}
                                value={phone2}
                                onChange={phone2 => usePhone2}
                            />
                            <div className="SubmitConsult">
                                отправить
                            </div>
                        </div>
                        <div className="agreeRadio align-baseline">
                            <div onClick={agreeRadio2} className="radioHeader">
                                <div><span className="radioHeader2 "></span></div>
                            </div>
                            <p>Я принимаю условия
                                пользовательского соглашения</p>
                        </div>
                    </div>
                    <div className="opaImg">
                        <img src={opa2} alt="No photo" />
                    </div>
                </div>

                {/*   text section */}

                <div className="CarouselComments">
                    <h2>Отзывы о саде</h2>

                    <div className="CarouselCards">
                        <Carousel cols={2} rows={1} gap={0} loop>
                            <Carousel.Item>
                                <div className="forWidth">
                                    <div className="textCarouselBottom">
                                        <div className="avatarName">
                                            <img src={ava} alt="Avatar" />
                                            <span>
                                                <h2>Елена</h2>
                                                <h6>Саратов</h6>
                                            </span>
                                        </div>
                                        <p>Водим двоих детей, очень довольны уровнем и качеством образования, если нужен
                                            просто детский сад, то вам не сюда. Дети знают английский (произношение,
                                            грамматика и пр.)
                                        </p>
                                    </div>
                                    <p>Прочитать отзыв</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="forWidth">
                                    <div className="textCarouselBottom">
                                        <div className="avatarName">
                                            <img src={ava} alt="Avatar" />
                                            <span>
                                                <h2>Елена</h2>
                                                <h6>Саратов</h6>
                                            </span>
                                        </div>
                                        <p>Водим двоих детей, очень довольны уровнем и качеством образования, если нужен
                                            просто детский сад, то вам не сюда. Дети знают английский (произношение,
                                            грамматика и пр.)
                                        </p>
                                    </div>
                                    <p>Прочитать отзыв</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="forWidth">
                                    <div className="textCarouselBottom">
                                        <div className="avatarName">
                                            <img src={ava} alt="Avatar" />
                                            <span>
                                                <h2>Елена</h2>
                                                <h6>Саратов</h6>
                                            </span>
                                        </div>
                                        <p>Водим двоих детей, очень довольны уровнем и качеством образования, если нужен
                                            просто детский сад, то вам не сюда. Дети знают английский (произношение,
                                            грамматика и пр.)
                                        </p>
                                    </div>
                                    <p>Прочитать отзыв</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="forWidth">
                                    <div className="textCarouselBottom">
                                        <div className="avatarName">
                                            <img src={ava} alt="Avatar" />
                                            <span>
                                                <h2>Елена</h2>
                                                <h6>Саратов</h6>
                                            </span>
                                        </div>
                                        <p>Водим двоих детей, очень довольны уровнем и качеством образования, если нужен
                                            просто детский сад, то вам не сюда. Дети знают английский (произношение,
                                            грамматика и пр.)
                                        </p>
                                    </div>
                                    <p>Прочитать отзыв</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="forWidth">
                                    <div className="textCarouselBottom">
                                        <div className="avatarName">
                                            <img src={ava} alt="Avatar" />
                                            <span>
                                                <h2>Елена</h2>
                                                <h6>Саратов</h6>
                                            </span>
                                        </div>
                                        <p>Водим двоих детей, очень довольны уровнем и качеством образования, если нужен
                                            просто детский сад, то вам не сюда. Дети знают английский (произношение,
                                            грамматика и пр.)
                                        </p>
                                    </div>
                                    <p>Прочитать отзыв</p>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}

