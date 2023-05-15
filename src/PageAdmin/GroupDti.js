
import './css/New.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import ico1 from '../img/free-icon-delete-5396993 (2).png'
import axios from 'axios';
import { FaRoad } from 'react-icons/fa';
import url from "../host"
import { data } from 'jquery';


export default function GroupDti() {
   const [state, setState] = useState([])
   const [non, setnon] = useState([])

   useEffect(() => {
      const fetchData = async () => {
         axios
            .get(`${url}/group`)
            .then((res) => {
               const filteredGroup = res.data
               axios
                  .get(`${url}/group_emp`)
                  .then((res2) => {
                     for (let i = 0; i < res2.data.length; i++) {
                        for (let j = 0; j < filteredGroup.length; j++) {
                           if (res2.data[i].groupid === filteredGroup[j].groupid) {
                              filteredGroup[j].employ = res2.data[i].employeeid;
                           }
                        }
                     }
                     axios
                        .get(`${url}/employee`)
                        .then((res3) => {
                           for (let i = 0; i < res3.data.length; i++) {
                              for (let j = 0; j < filteredGroup.length; j++) {
                                 if (res3.data[i].employeeid === filteredGroup[j].employ) {
                                    filteredGroup[j].person = res3.data[i].personid
                                 }
                              }
                           }
                           axios
                              .get(`${url}/person`)
                              .then((res4) => {
                                 for (let i = 0; i < res4.data.length; i++) {
                                    for (let j = 0; j < filteredGroup.length; j++) {
                                       if (res4.data[i].personid === filteredGroup[j].person) {
                                          filteredGroup[j].personlastname = res4.data[i].personlastname
                                       }
                                    }
                                 }
                                 setState(filteredGroup)
                              })
                        })
                  })
            })
            .catch((err) => {
               console.log(err);
            });



      };
      fetchData();
   }, [])



   // useEffect(() => {
   //    console.log(state);
   //    // console.log(non);
   // }, [state])




   function opensModal() {
      document.querySelector('.Dobav_Group').style = 'display: block'
      document.querySelector('.asdasdasdasd').style = 'display: none'
   }

   function closesModal() {
      document.querySelector('.Dobav_Group').style = 'display: none'
      document.querySelector('.asdasdasdasd').style = 'display: block'
   }

   function opensModal2(groupid) {
      document.querySelector('.Dobav_Group2').style = 'display: block'
      document.querySelector('.asdasdasdasd').style = 'display: none'
      // console.log(groupid);
      axios.get(`${url}/group/${groupid}`).then(res => {
         setnon(
            res.data
         )
      })
   }

   function closesModal2() {
      document.querySelector('.Dobav_Group2').style = 'display: none'
      document.querySelector('.asdasdasdasd').style = 'display: block'
   }

   function postData(groupid) {
      const data = new FormData()
      data.append('groupname', document.querySelector('#textDobav').value)
      data.append('ageid', document.querySelector('#ageidDobav').value)
      // data.append('syscreatedatutc', '2023-05-07T15:25:25.361Z')
      // data.append('syschangedatutc', '2023-05-10T17:55:57.943Z')
      axios.put(`${url}/group/${groupid}`, data).then(res => {
         alert('yangilandi')
         window.location = '/groupdti'
      })
   }

   function putDataS(groupid) {
      const data2 = new FormData()
      data2.append('groupname', document.querySelector('.testPut').value)
      data2.append('ageid', document.querySelector('.testPut2').value)
      axios.put(`${url}/group/${groupid}`, data2)
         .then(res => {
            console.log(res.data);
         }).catch((err) => {
            console.log(err);
         })
   }


   function deleteGroup(groupid) {
      axios.delete(`${url}/group/${groupid}`)
         .then(res => {
            console.log(res.data);
         })
   }

   function postData2() {
      var datts = new FormData()
      datts.append('groupname', document.querySelector('.hthgnhdnd').value)
      datts.append('ageid', document.querySelector('.ageidDobav2').value)
      axios.post(`${url}/group`, datts).then(res => {
         alert('Yaratildi!!!!!!!!!!!!!!!!!')
      }).catch(
         alert('Yaratildi!!!!!!!!!!!!!!!!!')
      )
   }

   return (

      <div className="nodir5">
         <div className="Dobav_Group">
            <h2>+ Добавить Группа</h2>
            <div className="sdfgdf">
               <h4>Название *</h4>
               <input className='textDobav2' type="text" />
               <h4>Учебный год</h4>
               <input className='ageidDobav2' type="number" />
               <h4>Воспитатели</h4>
               <select className='hthgnhdnd'>
                  <option></option>
                  <option>Воспитатели1</option>
                  <option>Воспитател2</option>
               </select>
               <h4>Активность</h4>
               <select>
                  <option></option>
                  <option>Активность1</option>
                  <option>Активность2</option>
               </select>
               <h4>Дети</h4>
               <select>
                  <option></option>
                  <option>Дети1</option>
                  <option>Дети2</option>
               </select>
            </div>
            <div className="grp_btn">
               <button onClick={() => closesModal()}>Назад</button>
               <button onClick={() => postData2()}>Сохранить</button>
            </div>
         </div>

         <div className="Dobav_Group2">
            {
               non.map(item => {
                  return (
                     <div>
                        <h2>+ Изменит Группа</h2>
                        <div className="sdfgdf2">
                           <h4>Название *</h4>
                           <div>
                              <input id='textDobav' placeholder={item.groupname} type="text" />
                              <h4>Учебный год</h4>
                              <input id='ageidDobav' placeholder={item.ageid} type="number" />
                           </div>
                        </div>
                        <div className="grp_btn2">
                           <button onClick={() => closesModal2()}>Назад</button>
                           <button onClick={() => postData(item.groupid)}>Сохранить</button>
                        </div>
                     </div>
                  )
               })
            }
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
                  <button className="nodiruca" onClick={() => opensModal()}>
                     + Добавить Группа
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
                           <th className="btnadmp_th" id='borDr'>Действие</th>
                           {/* <th className="btnadmp_th">Дата  <br /> добавления</th>
                  <th className="btnadmp_th2">Действие </th> */}


                        </tr>
                        {
                           state.map(item => {
                              return (
                                 <tr className="btnadmp_tr1" >
                                    <td className="btnadmp_td1">{item.groupid}</td>
                                    <td className="btnadmp_td1">{item.groupname}</td>
                                    <td className="btnadmp_td1"> {item.syscreatedatutc.slice(0, 10)}</td>
                                    <td className="btnadmp_td1"> {item.personlastname}</td>
                                    <td className="btnadmp_td1"> {item.ageid}</td>
                                    <td className="btnadmp_td1">
                                       <button onClick={() => opensModal2(item.groupid)} className="butadmp1">
                                          <img src={ico2} alt="" />
                                       </button>
                                       <button onClick={() => deleteGroup(item.groupid)} className="butadmp2">
                                          <img src={ico1} alt="" />
                                       </button>
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
