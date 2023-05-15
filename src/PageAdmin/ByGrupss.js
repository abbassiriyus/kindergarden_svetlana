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
    finish:"15:30"
}]
export default class App extends Component {
state={
    group:[],
    weekday:[]
}

// getData1(){

// for (let i = 0; i < weekday.length; i++) {
// for (let j = 0; j < time.length; j++) {
// console.log(this.testData(time[j].start,time[j].finish,weekday[i].number));
// }}

// }
testData(start,finish,day){
    var kluch=true
this.state.weekday.map(item=>{
 //console.log(item.begining,start,item.finishing,finish,item.day,day);
    if(item.begining==start && item.finishing==finish && item.day==day){
kluch=false
}})
if(kluch){
return "-"
}else{
return "1"
}

}
getTable(value){
var data=[]
axios.get(`${url}/timetable`).then(res=>{
res.data.map(item=>{
    if(item.groupid===value){
        data.push(item)
    }
})
this.setState({weekday:data})
// this.getData1()
})
}

// helloData(start,finish,day){
//     for (let i = 0; i < this.state.weekday.length; i++) {
//     //   console.log(this.state.weekday[i].begining==start && this.state.weekday[i].finishing==finish && this.state.weekday[i].weekday==day);  
// if (this.state.weekday[i].begining==start && this.state.weekday[i].finishing==finish && this.state.weekday[i].weekday==day) {
// return `${start} ${finish} ${day}`    
// }else{
//     return "-"
// }
//     }


// }

componentDidMount(){
    axios.get(`${url}/group`).then(res=>{
        this.setState({group:res.data})
      
        this.getTable(res.data[0].groupid)
          
    })

}
    render() {
        return (
            <div className="metgala">
                {/* <Tabe /> */}
                <div className="amygdala">
                    <select className='bts' name="" id="">
               {this.state.group.map((item,key)=>{
                return <option onClick={()=>this.getTable(item.groupid)} value={item.groupid}>{item.groupname}</option>
               })}         
                    </select>
                    <input type="date" className="bt21"
                        // value="2018-07-22"
                        // min="2018-01-01" max="2018-12-31"
                         />
                </div>
                <div className="nood">
                    {/* <p className="nod">
Малинина Виктория Петровна
</p> */}
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