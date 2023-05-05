import React, { Component } from 'react'
import ico1 from '../img/free-icon-edit-6488637 (2).png'    
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import './css/Vztsasd.css'
import Dropdown from 'react-bootstrap/Dropdown';

export default class visits extends Component {
  render() {
    return (
      <div>
<div className="nodir3">
            <div className="abbas">

      <div className='dropw'>
      <Dropdown id="drop">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Должность
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Добавите</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Добавите</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Добавите</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown id="drop">
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Группа
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Добавите</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Добавите</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Добавите</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown><a href='/people'><button id="btnlar1">  + Добавить сотрудника </button></a>
      </div>

                
               <ul className='ustoz' >
                  <li className='madin' >Отсутствующих: 2</li>
                  <li className='madin1' >Присутствующих: 3</li>
               </ul>
            </div>

            <div className=" bigbox">
               <div className="bodyadmpn" >

                  <div className="btnadmp_box1">
                     <table className="btnchil_table">
                        <tr className="btnadmp_tr">

                           <th className="btnadmp_th1">ID</th>

                           <th className="btnadmp_th">Ребенок</th>
                           <th className="btnadmp_th">Состояние</th>
                           <th className="btnadmp_th"> Приход </th>
                           <th className="btnadmp_th">Уход </th>

                           <th className="btnadmp_th2">Действие</th>

                        </tr>



                        <tr className="btnadmp_tr1" >
                           <td className="btnadmp_td1">1</td>
                           <td className="btnadmp_td1">Малинина Наташа </td>
                           <td className="btnadmp_td1">Отсутствует </td>
                           <td className="btnadmp_td1"></td>
                           <td className="btnadmp_td1"> </td>
                           <td className="btnadmp_td1">
                              <button className="butadmp1">+</button>

                           </td>
                        </tr>

                        <tr className="btnadmp_tr1" >
                           <td className="btnadmp_td2">2</td>
                           <td className="btnadmp_td2">Малинин Егор     </td>
                           <td className="btnadmp_td2">Отсутствует </td>
                           <td className="btnadmp_td2"> </td>
                           <td className="btnadmp_td2"> </td>

                           <td className="btnadmp_td2">
                              <button className="butadmp1">+</button>
                           </td>
                        </tr>

                        <tr className="btnadmp_tr1" >
                           <td className="btnadmp_td1">3</td>
                           <td className="btnadmp_td1"> Носов Миша    </td>
                           <td className="btnadmp_td1">  Присутствует </td>
                           <td className="btnadmp_td1"> 08:30 </td>
                           <td className="btnadmp_td1">18:20 </td>

                           <td className="btnadmp_td1">
                              <button className="butadmp1"><img src={ico2} alt="" /></button>
                              <button className="butadmp2"><img src={ico1} alt="" /></button>
                           </td>
                        </tr>
                        <tr className="btnadmp_tr1" >
                           <td className="btnadmp_td2">4</td>
                           <td className="btnadmp_td2">Окунева Даша  </td>
                           <td className="btnadmp_td2">  Присутствует   </td>
                           <td className="btnadmp_td2">08:30</td>
                           <td className="btnadmp_td2">18:20 </td>


                           <td className="btnadmp_td2">
                              <button className="butadmp1"><img src={ico2} alt="" /></button>
                              <button className="butadmp2"><img src={ico1} alt="" /></button>
                           </td>
                        </tr>

                        <tr className="btnadmp_tr1" >
                           <td className="btnadmp_td1">5</td>
                           <td className="btnadmp_td1"> Парамонов Миша   </td>
                           <td className="btnadmp_td1"> Присутствует  </td>
                           <td className="btnadmp_td1">09:00</td>
                           <td className="btnadmp_td1"> 17:20 </td>

<td className="btnadmp_td1">
                              <button className="butadmp1"><img src={ico2} alt="" /></button>
                              <button className="butadmp2"><img src={ico1} alt="" /></button>
                           </td>
                        </tr>


                        <tr className="btnadmp_tr1" >
                           <td className="btnadmp_td2"></td>
                           <td className="btnadmp_td2">  </td>
                           <td className="btnadmp_td2"></td>


                        </tr>



                        <tr className="btnadmp_tr1" >
                           <td className="btnadmp_td1"></td>
                           <td className="btnadmp_td1"></td>
                           <td className="btnadmp_td1">   </td>
                           <td className="btnadmp_td1"> </td>
                           <td className="btnadmp_td1">. </td>

                           <td className="btnadmp_td1">

                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>

         </div>
      </div>
    )
  }
}
