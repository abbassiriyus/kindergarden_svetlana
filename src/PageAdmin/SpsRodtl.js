
import './css/New.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react'
import ico1 from '../img/free-icon-edit-6488637 (2).png'    
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios';


export default class App extends Component {
    state = {
        person: []
    }




    componentDidMount = () => {
        axios.get(`https://backend-school-0u75.onrender.com/person`).then(res => {
            // console.log(res.data);
            this.setState({
                person: res.data
            })
            console.log(this.state.person[11].addressid);
        })
    }

    openMzg = () => {
        document.querySelector('.ModalsInps').style = 'display: block'
        document.querySelector('.asdasdasdasd').style = 'display: none'
    }
    closeMzg = () => {
        document.querySelector('.ModalsInps').style = 'display: none'
        document.querySelector('.asdasdasdasd').style = 'display: block'
    }


    render() {
        return (
            <div className="nodir5">
                <div className="ModalsInps">
                    <div className="haskd">
                        <div className="asd">
                            <h4>Фамилия</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4>Имя</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4>Отчество</h4>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="haskd">
                        <div className="asd">
                            <h4>Статус</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4>Место работы</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4>Телефон</h4>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="haskd">
                        <div className="asd">
                            <h4>Эл.почта </h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4> Номер паспорта</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4>Серия паспорта</h4>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="haskd">
                        <div className="asd">
                            <h4>Дата выдачи</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4> № Договора</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4> Ребенок</h4>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="haskd">
                        <div className="asd">
                            <h4>Адрес регистрации</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4>&nbsp;</h4>
                            <input type="text" />
                        </div>

                        <div className="asd">
                            <h4>&nbsp;</h4>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="haskd" id='iktali'>
                        <div className="asd">
                            {/* <h4>&nbsp;</h4> */}
                            <input type="text" />
                        </div>

                        <div className="asd">
                            {/* <h4>&nbsp;</h4> */}
                            <input type="text" />
                        </div>
                    </div>
                    <div className="btn-grupasdasdasdasd">
                        <button onClick={() => this.closeMzg()}>Назад</button>
                        <button>Сохранить</button>
                    </div>
                </div>
                <div className="asdasdasdasd">

                    <div className="cake">
                        <div className="cake1">
                            <select className='mad' name="" id="">
                                <option value="">Группа</option>
                                <option value="">Группа</option>
                                <option value="">Группа</option>
                                <option value="">Группа</option>
                            </select>
                            <input className='mad' type="date" placeholder='Дата добавления' />
                            <button className="nodiruca" onClick={() => this.openMzg()}>
                                + Добавить ребенка
                            </button>
                        </div>
                    </div>

                    <div className=" bigbox">
                        <div className="bodyadmpn" >

                            <div className="btnadmp_box1">
                                <table className="btnchil_table">
                                    <tr className="btnadmp_tr">

                                        <th className="btnadmp_th1">ID</th>

                                        <th className="btnadmp_th"> Фамилия</th>
                                        <th className="btnadmp_th">Имя</th>
                                        <th className="btnadmp_th">Отчество</th>
                                        <th className="btnadmp_th">Дети</th>
                                        <th className="btnadmp_th">Телефон</th>
                                        <th className="btnadmp_th">Дата  <br /> добавления</th>
                                        <th className="btnadmp_th2">Действие </th>


                                    </tr>




                                    {
                                        this.state.person.map(item => {
                                            return (
                                                <tr className="btnadmp_tr1" >
                                                    <td className="btnadmp_td1">{item.personid}</td>
                                                    <td className="btnadmp_td1">{item.personlastname}</td>
                                                    <td className="btnadmp_td1"> {item.personfirstname}</td>
                                                    <td className="btnadmp_td1"> {item.personmiddlename}</td>
                                                    <td className="btnadmp_td1"> {item.dateofbirth}</td>
                                                    <td className="btnadmp_td1"> {item.gender}</td>
                                                    <td className="btnadmp_td1"> {item.syscreatedatutc}</td>
                                                    <td className="btnadmp_td1">
                                                        <button className="butadmp1"><img src={ico2} alt="" /></button>
                                                        <button className="butadmp2"><img src={ico1} alt="" /></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }





                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}