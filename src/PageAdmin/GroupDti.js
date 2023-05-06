
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
      axios.get(`https://backend-school-0u75.onrender.com/group`).then(res => {
         // console.log(res.data);
         this.setState({
            person: res.data
         })
         console.log(this.state.person[11].addressid);
      })
   }


   render() {
      return (
         <div className="nodir5">
            <div className="cake">
               <div className="cake1">
                  <select className='mad' name="" id="">
                     <option value="">Группа</option>
                     <option value="">Группа</option>
                     <option value="">Группа</option>
                     <option value="">Группа</option>
                  </select>
                  <button className="nodiruca">
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

                           <th className="btnadmp_th"> Название</th>
                           <th className="btnadmp_th">Учебный год</th>
                           <th className="btnadmp_th">Воспитатели</th>
                           <th className="btnadmp_th">Активность</th>
                           <th className="btnadmp_th"  id='borDr'>Действие</th>
                           {/* <th className="btnadmp_th">Дата  <br /> добавления</th>
                           <th className="btnadmp_th2">Действие </th> */}


                        </tr>




                        {
                           this.state.person.map(item => {
                              return (
                                 <tr className="btnadmp_tr1" >
                                    <td className="btnadmp_td1">{item.groupid}</td>
                                    <td className="btnadmp_td1">{item.groupname}</td>
                                    <td className="btnadmp_td1"> {item.syscreatedatutc}</td>
                                    <td className="btnadmp_td1"> {item.personmiddlename}</td>
                                    <td className="btnadmp_td1"> {item.dateofbirth}</td>
                                    {/* <td className="btnadmp_td1"> {item.gender}</td> */}
                                    {/* <td className="btnadmp_td1"> {item.syscreatedatutc}</td> */}
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
      )
   }

}