import './css/ByGrupss.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Tabe from '../pages/tabe.js'
import React, { Component } from 'react'
import axios from 'axios'
import url from '../host';
const weekday=[{
    number:1,
    day:'понедельник'
},
{
    number:2,
    day:'вторник'
},
{
    number:3,
    day:'среда'
},
{
    number:5,
    day:'четверг'
},
{
    number:6,
    day:'среда'
},
{
    number:7,
    day:'четверг'
},
{
    number:7,
    day:'четверг'
}
];



const time=[{
    start:"09:00",
    finish:"09:25"
},
{
    start:"09:35",
    finish:"10:00"
},
{
    start:"10:35",
    finish:"11:00"
},
{
    start:"15:05",
    finish:"15:30"
},
{
    start:"16:05",
    finish:"16:30"
}]
export default class App extends Component {
state={
    group:[],
    weekday:[],
    employee:[],
    subject:[],
    group:[],
    room:[]

}


testData(start,finish,day){
    var kluch=true
    var data12
this.state.weekday.map(item=>{
 //console.log(item.begining,start,item.finishing,finish,item.day,day);
    if(item.begining==start && item.finishing==finish && item.day==day){
kluch=false
data12=`${item.subjectname}\n\n\n${item.personlastname+" "+item.personfirstname+item.personmiddlename}\n${item.roomnumber}`
}})
if(kluch){
return "-"
}else{
return data12
}

}
getTable(value){
var data=[]
axios.get(`${url}/timetable`).then(res=>{
res.data.map(item=>{
    if(item.groupid===value){
    data.push(item)}
})

axios.get(`${url}/room`).then(res2=>{
for (let i = 0; i <data.length; i++) {
for(let j=0; j<res2.data.length;j++){
if(res2.data[j].roomid==data[i].roomid){
    data[i].roomnumber=res2.data[j].roomnumber
}}}

axios.get(`${url}/employee`).then(res3=>{
    for (let i = 0; i <data.length; i++) {
    for(let j=0; j<res3.data.length;j++){
    if(res3.data[j].employeeid==data[i].employeeid){
        data[i].personid=res3.data[j].personid
        data[i].positionid=res3.data[j].positionid
    
    }}}
    axios.get(`${url}/person`).then(res4=>{
        for (let i = 0; i <data.length; i++) {
        for(let j=0; j<res4.data.length;j++){
        if(res4.data[j].personid==data[i].personid){
            data[i].personlastname=res4.data[j].personlastname
            data[i].personfirstname=res4.data[j].personfirstname.slice(0,1).toUpperCase()+"."
            data[i].personmiddlename=res4.data[j].personmiddlename.slice(0,1).toUpperCase()+"."
        }}}
        axios.get(`${url}/subject`).then(res5=>{
            for (let i = 0; i <data.length; i++) {
            for(let j=0; j<res5.data.length;j++){
            if(res5.data[j].subjectid==data[i].subjectid){
                data[i].subjectname=res5.data[j].subjectname
            }}}
            this.setState({weekday:data})
        })
        })})})})
}




componentDidMount(){
    axios.get(`${url}/group`).then(res=>{
        this.setState({group:res.data})
        this.getTable(res.data[0].groupid)    
   axios.get(`${url}/employee`).then(res3=>{
axios.get(`${url}/person`).then(res2=>{
   
for (let i = 0; i < res3.data.length; i++) {
for (let j = 0; j < res2.data.length; j++) {
if(res3.data[i].personid==res2.data[j].personid){
    res3.data[i].personlastname=res2.data[j].personlastname
    res3.data[i].personfirstname=res2.data[j].personfirstname
    res3.data[i].personmiddlename=res2.data[j].personmiddlename   
}
}}

 this.setState({employee:res3.data})
axios.get(`${url}/group`).then(res=>{
    this.setState({group:res.data})
})
axios.get(`${url}/room`).then(res=>{
    this.setState({room:res.data})
})
})



   
axios.get(`${url}/subject`).then(res=>{
this.setState({subject:res.data})
})
}) })


}
    render() {
        return (
            <div className="metgala">
<div className="bigAbbas">
<div className="modalAbbas">
<label htmlFor="">Дата</label><br />
<select name="" id="select_1">
{weekday.map(item=>{
    return   <option  value={item.number}>{item.day}</option>
})}  </select><br />
<label htmlFor="">Время с</label><br />
<select name="" id="select_1">
{time.map(item=>{
    return   <option  value={item.start}>{item.start}</option>
})}  


</select>по
<select name="" id="select_2">
{time.map(item=>{
    return   <option  value={item.finish}>{item.finish}</option>
})}  
   
</select><br />
<label htmlFor="">Группа</label><br />
<select name="" id="">
{this.state.group.map(res=>{
    return <option value="">{res.groupname}</option>
})}
</select><br />
<label htmlFor="">Тема</label><br />
<select name="" id="">
{this.state.subject.map(item=>{return <option  value={item.subjsctid}>{item.subjectname}</option>}) }
</select><br />
<label htmlFor="">Занятие</label><br />
<select name="" id="">
{this.state.subject.map(item=>{return <option  value={item.subjectid}>{item.topic}</option>}) }
</select><br />


<label htmlFor="">Педагог</label><br />
<select name="" id="">
{this.state.employee.map(res=>{
    return <option value="">{res.personfirstname} {res.personlastname} {res.personmiddlename} </option>
})}
</select><br />
<label htmlFor="">Кабинет</label><br />
<select name="" id="">
{this.state.room.map(item=>{return <option value={item.roomid}>{item.roomnumber}</option>}) }
</select><br />
<button className='first_button'>Назад</button><button className='second_button' >Сохранить</button>
</div></div>
                <div className="amygdala">
                    <select className='bts' name="" id="">
               {this.state.group.map((item,key)=>{
                return <option onClick={()=>this.getTable(item.groupid)} value={item.groupid}>{item.groupname}</option>
               })}         
                    </select>
                        <button id="btnlar1" style={{margin:'auto', marginRight:'30px'}} onClick={() => { this.openModal() }}>+ Добавить сотрудника</button>
                </div>


                <div className="nood">
                    <p className="nod2">
                    </p>
                </div>
                <div className=" bigbox">
                    <div className="bodyadmpn" >

                        <div className="btnadmp_box1">
                            <table className="btnchil_table">
                                <tr className="btnadmp_tr">
                                    <th className="btnadmp_th1"></th>
                                    <th className="btnadmp_th">ПН</th>
                                    <th className="btnadmp_th">ВТ</th>
                                    <th className="btnadmp_th">СР</th>
                                    <th className="btnadmp_th">ЧТ</th>
                                    <th className="btnadmp_th">ПТ</th>
                                    <th className="btnadmp_th">СБ</th>
                                    <th className="btnadmp_th2">ВС</th>
                                </tr>

{
time.map(item=>{
 return  <tr className="btnadmp_tr1" >
    <td className="btnadmp_td1">{item.start}-{item.finish}</td>
  {weekday.map(item2=>{ return <td className="btnadmp_td1">
   {this.testData(item.start,item.finish,item2.number)}
  </td>})} 
</tr>

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