import './Employees.css'
import './css/New.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react'
import ico1 from '../img/free-icon-delete-5396993 (2).png'
import ico2 from '../img/free-icon-edit-6488637 (2).png'
import axios from 'axios';
import url from '../host'


export default class App extends Component {
   state = {
      person: [],
      data:[],
      group:[]
   }

   openModal(){
      document.querySelector('.modal11').style="display:block"
      }
   closeModal() {
          document.querySelector('.modal11').style = "display:none"
      }

  postData(){
   var formdata= new FormData()
   
  }

   componentDidMount = () => {
      axios.get(`${url}/test`).then(res => {
         this.setState({person: res.data})
      })
      axios.get(`${url}/group`).then(res=>{
         this.setState({group:res.data})
            }) 
     this.getData11()
   }
   getData11(){
        
      axios.get(`${url}/person`).then(res=>{
      var abu=res.data
      var abu2=[]
axios.get(`${url}/employee`).then(res1=>{
for (let i = 0; i <res1.data.length; i++) {
for (let j = 0; j <abu.length; j++) {
  if(abu[j].personid===res1.data[i].personid) {
  abu[j].positionid=res1.data[i].positionid
  abu2.push(abu[j])
  }
}}
axios.get(`${url}/position`).then(res2=>{
for (let i = 0; i < res2.data.length; i++) {
for (let j = 0; j < abu2.length; j++) {
if(abu2[j].positionid===res2.data[i].positionid){
  abu2[j].positiontitle = res2.data[i].positiontitle
}
}}
this.setState({data:abu2})
})
})
  })}

   render() {
      return (
         <div className="nodir5">


<div className="modal11" >
<div className='Apages1'>
                    <div className="oyna101">
                      <div className="pages11"><br />
                      <label htmlFor="form4"> Месяц * </label><br />
                        <select name="" id="form4">
                            <option value='январь'>январь</option>
                            <option value='февраль'>февраль</option>
                            <option value='марта'>марта</option>
                            <option value='апрель'>апрель</option>
                            <option value='мая'>мая</option>
                            <option value='июнь'>июнь</option>
                            <option value='июль'>июль</option>
                            <option value='Август'>Август</option>
                            <option value='Сентябрь'>Сентябрь</option>
                            <option value='Октябрь'>Октябрь</option>
                            <option value='ноябрь'>ноябрь</option>
                            <option value='Декабрь'>Декабрь</option>
                        </select>   
                        </div>
                             <div className="pages11"><br />
                             <label htmlFor="form4"> Автор  *  </label><br />
                        <select name="" id="form4">
                           {this.state.data.map(item=>{return <option value={item.personid}>{item.personlastname}  {item.personfirstname} {item.personmiddlename} </option>})} 
                        </select>   
                        </div> 
                            <div className="pages11"><br />
                            <label htmlFor="form4">Группа * </label><br />
                        <select name="" id="form4">
                        {this.state.group.map(item=>{return <option value={item.groupname}>{item.groupname}</option>})} 
                        </select>   
                        </div> 
                        <div className="pages11">
                            <label htmlFor="form3">Область развития *</label><br />
                                <input id='form3' type="text" />
                        </div>
                        <div className="pages11">
                            <label htmlFor="form3">Вопрос *</label><br />
                                <input id='form3' type="text" />
                        </div>
                        <div className="pages11">
                            <label htmlFor="form3">Ответ  *</label><br />
                                <input id='form3' type="text" />
                        </div>
                        <div className="pages12">
                            <label htmlFor="form6">Вложение</label>
                            <div className="upload_file">
                                <h1>+</h1>
                                <p>(Перетащите или щелкните, чтобы вставить)</p>
                            </div>
                            <input className="form6" type="file" />
                        </div>
                        
                        </div>
    <div className="df_button" >
                                <button className='df_button1' onClick={() => { this.closeModal() }}>Назад</button>
                                <button className='df_button2' onClick={() => { this.postData2() }}>Сохранить</button>
                            </div>                   

                                
                          




</div>
</div>

            <div className="cake">
               <div className="cake1">
                  <select className='mad' name="" id="">
                     <option value="">Группа</option>
                     <option value="">Группа</option>
                     <option value="">Группа</option>
                     <option value="">Группа</option>
                  </select>
                  <input className='mad' type="date" placeholder='Дата добавления' />
                  <button onClick={()=>{this.openModal()}} className="nodiruca">
                     + Добавить новость
                  </button>
               </div>
            </div>

            <div className=" bigbox">
               <div className="bodyadmpn" >

                  <div className="btnadmp_box1">
                     <table className="btnchil_table">
                        <tr className="btnadmp_tr">

                           <th className="btnadmp_th1">ID</th>

                           <th className="btnadmp_th"> Месяц </th>
                           <th className="btnadmp_th">Группа</th>
                           {/* <th className="btnadmp_th">  </th> */}
                           {/* <th className="btnadmp_th">  </th> */}
                           <th className="btnadmp_th">Дата отправки </th>
                           <th className="btnadmp_th">Автор</th>
                           <th className="btnadmp_th" id='borDr'>Действие</th>


                        </tr>




                        {
                           this.state.person.map(item => {
                              return (
                                 <tr className="btnadmp_tr1" >
                                    <td className="btnadmp_td1">{item.testid}</td>
                                    <td className="btnadmp_td1">{item.date}</td>
                                    <td className="btnadmp_td1"> {item.date}</td>
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
      )
   }

}