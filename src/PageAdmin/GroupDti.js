
import './css/New.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import ico1 from '../img/free-icon-edit-6488637 (2).png'
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios';
import { FaRoad } from 'react-icons/fa';
import url from "../host"


export default function GroupDti() {
   const [state, setState] = useState([])
   // const [non, setnon]= useState([])

   useEffect(() => {
      const fetchData = async () => {
         axios
           .get(`${url}/group`)
           .then((res)=>{
             const filteredGroup = res.data
             axios
             .get(`${url}/group_emp`)
             .then((res2)=>{
               for(let i = 0; i < res2.data.length; i++){
                 for(let j = 0; j < filteredGroup.length; j++){
                   if(res2.data[i].groupid === filteredGroup[j].groupid){
                     filteredGroup[j].employ = res2.data[i].employeeid;
                   }
                 }
               }
               axios
               .get(`${url}/employee`)
               .then((res3)=>{
                 for(let i = 0; i < res3.data.length; i++){
                 for(let j = 0; j < filteredGroup.length; j++){
                    if(res3.data[i].employeeid === filteredGroup[j].employ){
                       filteredGroup[j].person = res3.data[i].personid
                    }
                 }
                 }
                 axios
                 .get(`${url}/person`)
                 .then((res4)=>{
                   for(let i = 0; i < res4.data.length; i++){
                      for(let j = 0; j < filteredGroup.length; j++){
                         if(res4.data[i].personid === filteredGroup[j].person){
                            filteredGroup[j].personlastnam = res4.data[i].personlastname
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
      // const fytc = async()=>{
      // axios.get(`https://backend-school-0u75.onrender.com/group`)
      //    .then(res => {
      //       const gg = res.data
      //       // setState(res.data)
            
      //    }
      //    axios.get(`https://backend-school-0u75.onrender.com/group_emp`)
      //    .then(res2 => {
      //       for (let i = 0; i < res2.data.length; i++) {
      //          for (let j = 0; j < gg.length; j++) {
      //             if (res2.data[i].groupid===gg[j].groupid) {
      //                gg[j].groupid=res2.data[i].groupid
      //             }
      //          }
      //       }
      //       setState(gg)
      //    })
      //    )}

   }, [])

   useEffect(() => {
      console.log(state);
      // console.log(non);
   }, [state])




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
                                 <td className="btnadmp_td1"> {item.syscreatedatutc}</td>
                                 <td className="btnadmp_td1"> {item.personlastnam}</td>
                                 <td className="btnadmp_td1"> {item.dateofbirth}</td>
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
