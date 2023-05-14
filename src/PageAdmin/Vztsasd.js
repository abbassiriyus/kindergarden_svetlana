import React, { useState, useEffect } from 'react'
import ico1 from '../img/free-icon-delete-5396993.png'
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import './css/Vztsasd.css'
import Dropdown from 'react-bootstrap/Dropdown';
import url from '../host';
import axios from 'axios';


export default function Vztsasd() {

   const [data, setData] = useState([])

   useEffect(() => {
      function getsOne() {
         const hallo = []
         axios.get(`${url}/attendance`).then(res => {
            axios.get(`${url}/child`).then(res2 => {
               for (let i = 0; i < res.data.length; i++) {
                  for (let j = 0; j < res2.data.length; j++) {
                     if (res.data[i].childid == res2.data[j].childid) {
                        res.data[i].childlastname = res2.data[j].childlastname
                        res.data[i].childfirstname = res2.data[j].childfirstname
                     }
                  }
               }
               setData(res.data)
            })
         })
         // axios.get(`${url}/attendance`).then(res => {
         //    const abu = res.data
         //    const abu2 = []
         //    axios.get(`${url}/excuse`).then(res1 => {
         //    for (let i = 0; i < res1.data.length; i++) {
         //       for (let j = 0; j < abu.length; j++) {
         //          if (abu[j].childid === res1.data[i].childid) {
         //             abu[j].childlastname = res1.data[i].childlastname
         //             abu2.push(abu)
         //          }
         //       }
         //    }
         //    })
         // })
      }

      getsOne()
   }, [])
   function deleteData(key) {
      console.log(key);
      axios.delete(`${url}/attendance/${key}`).then(res => {
         window.location.reload()
      })
   }




   return (
      <div>

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
                     <li className='madin1' >Присутствующих: {data.length}</li>
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
{/* 


                           <tr className="btnadmp_tr1" >
                              <td className="btnadmp_td1">1</td>
                              <td className="btnadmp_td1">Малинина Наташа </td>
                              <td className="btnadmp_td1">Отсутствует </td>
                              <td className="btnadmp_td1"></td>
                              <td className="btnadmp_td1"> </td>
                              <td className="btnadmp_td1">
                                 <button className="butadmp1">+</button>

                              </td>
                           </tr> */}

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
                           {
                              data.map(item => {
                                 return (

                                    <tr className="btnadmp_tr1" >
                                       <td className="btnadmp_td1">{item.attendanceid}</td>
                                       <td className="btnadmp_td1">{item.childlastname}</td>
                                       <td className="btnadmp_td1">  Присутствует </td>
                                       <td className="btnadmp_td1">{item.arrivaltime.slice(0, 10)}</td>
                                       <td className="btnadmp_td1">{item.leavingtime.slice(0, 10)}</td>

                                       <td className="btnadmp_td1">
                                          <button className="butadmp1"><img src={ico2} alt="" /></button>
                                          <button onClick={() => deleteData(item.attendanceid)} className="butadmp2"><img src={ico1} alt="" /></button>
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
      </div>
   )
}
