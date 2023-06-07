import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import img3 from "../img/free-icon-thermometer-1165508 1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AllPages.css";
import url from "../host";
import img from "../img/free-icon-daughter-8229500 (2).png";
import Img0012 from "../img/free-icon-child-5238428 (1).png";
export default function Page6() {
  const [date, setDate] = useState(new Date());
  const [excuse, setExcuse] = useState([]);
  const [allexcuse, setallExcuse] = useState([]);
  const [rebenok, setRebenok] = useState([]);
  const [rebenok2, setRebenok2] = useState([]);
  const [rebenok3, setRebenok3] = useState([]);
  const [rebenoki, setRebenoki] = useState([]);
  const [employ, setEmploy] = useState([]);
  const [person, setPerson] = useState([]);
  const [deti, setDeti] = useState([]);
  const [putExcuse45, setPutExcuse] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          GroupEmp,
          Group,
          childRes,
          excuseRes,
          employeeRes,
          personRes,
        ] = await Promise.all([
          axios.get(`${url}/group_emp`),
          axios.get(`${url}/group`),
          axios.get(`${url}/child`),
          axios.get(`${url}/excuse`),
          axios.get(`${url}/employee`),
          axios.get(`${url}/person`),
        ]);
        
        const employeeId = parseInt(localStorage.getItem("employ"));
  
        const groupEmpData = GroupEmp.data.filter((item) => item.employeeid === employeeId);
        const groupIds = groupEmpData.map((item) => item.groupid);
  
        const childData = childRes.data.filter((item) => groupIds.includes(item.groupid));
        const childIds = childData.map((item) => item.childid);
  
        const excuseData = excuseRes.data.filter((item) => childIds.includes(item.childid));
        const excuseDates = excuseData.map((item) => item.datestart.slice(0, 10));
  
        setExcuse(excuseDates);
        console.log(childIds,"xz2");
        console.log(excuseDates,"xz");
        setRebenok(childIds);
        setRebenoki(childData);
        setallExcuse(excuseRes.data);
        setEmploy(employeeRes.data);
        setPerson(personRes.data);
        setDeti(childData);
  
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => { }, [
    excuse,
    employ,
    person,
    allexcuse,
    rebenok,
    rebenok2,
    rebenok3,
    rebenoki,
  ]);


  function openPostExcuse() {
    document.querySelector(".zafik_bigdiv").style = "display: block;";
    document.querySelector(".ybuyi").style = "display: none;";
    console.log("fjrifi");
  }
  function postExcuse () {
    var excuseData = new FormData()
    excuseData.append("datestart", document.querySelector('#data_start').value)//datastart
    excuseData.append("dateend", document.querySelector('#data_end').value)//dataend
    excuseData.append("childid", document.querySelector('#child').value)//child
    excuseData.append("daypart", document.querySelector('#day_part').value)//daypart
    excuseData.append("reason", document.querySelector('#reason').value)//reason
    excuseData.append("employeeid", parseInt(localStorage.getItem("employ")))//employ
    axios
    .post(`${url}/excuse`,excuseData)
    .then((res)=>{
      alert("worked")
      window.location.reload()
    }).catch((res)=>{
      alert("error")
    })
  }
function functionDeleteExcuse (id) {
  axios
  .delete(`${url}/excuse/${id}`,)
  .then((res)=>{
    alert("worked")
    window.location.reload()
  }).catch((res)=>{
    alert("error")
  })
}
 function functioPutExcuse (id) {
  console.log(id[0],"llllllllll");
  var excuseData = new FormData()
  excuseData.append("datestart", document.querySelector('#put_data_start').value)//datastart
  excuseData.append("dateend", document.querySelector('#put_data_end').value)//dataend
  excuseData.append("childid", id[1])//child
  excuseData.append("daypart", document.querySelector('#put_day_part').value)//daypart
  excuseData.append("reason", document.querySelector('#put_reason').value)//reason
  excuseData.append("employeeid", parseInt(localStorage.getItem("employ")))//employ
  axios
  .put(`${url}/excuse/${id[0]}`,excuseData)
  .then((res)=>{
    alert("worked")
    window.location.reload()
  }).catch((res)=>{
    alert("error")
  })
 }

  const handleClickDay = useCallback(
    async (date) => {
      const d = date;
      var b =`${d.getDate()}`
      var a = `${d.getFullYear()}-0${d.getMonth() + 1}-${b.padStart(2, '0')}`;

      const index = excuse.indexOf(a);
      if (index > -1) {
        document.querySelector(".BigModalChild").style = "display: flex;  z-index: 20000;";
        setRebenok2(excuse[index]);

        try {
          const res = await axios.get(`${url}/excuse`);
          const filteredData = res.data.filter((item) => {
            return (
              rebenok.includes(item.childid) &&
              item.datestart.slice(0, 10) === excuse[index]
            );
          });
          for (let k = 0; k < filteredData.length; k++) {
            setRebenok3(filteredData[k].childid)
  
          }
          // if (filteredData.length > 0) {
          //   setRebenok3(filteredData[1].childid);
          // } else {
          //   console.log("Данные не найдены!!");
          // }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("error");
      }
    },
    [excuse, rebenok]
  );
  const getTileContent = ({ date, view }) => {
    var d = date;
    var b =`${d.getDate()}`
    var a = `${d.getFullYear()}-0${d.getMonth() + 1}-${b.padStart(2, '0')}`;
    for (let i = 0; i < excuse.length; i++) {
      if (a === excuse[i]) {
        return <img src={img3} alt={img3} />;
      } else {
      }
    }
  };
  function closeChildModal() {
    document.querySelector(".BigModalChild").style = "display: none;";
  }

  function closedChildModal() {
    document.querySelector(".zafik_bigdiv").style = "display: none;";
    document.querySelector(".ybuyi").style = "display: block;";
    document.querySelector(".zafik_bigdiv2").style = "display: none;";
  }

  function simSim(id) {
    document.querySelector('.zafik_bigdiv2').style = 'display: block !important;'
    document.querySelector('.BigModalChild').style = 'display: none !important;'
    document.querySelector(".ybuyi").style = "display: none;";
    document.querySelector(".ModalChilds").style = "display: none;";
    console.log(id,"ID");
    axios.get(`${url}/excuse`).then((res)=>{
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].excuseid===id) {
          setPutExcuse(res.data[i])
          console.log(res.data[i],"data");
          console.log(id,"ID");
        }
      }
    })

  }

  return (
    <div className="The-Big">
      <div className="zafik_bigdiv">
        <div className="zafik_div">
          <div className="zafik_minidiv">
            <h1 className="zafik_excuse_h1">Создать запись о пропуске занятий</h1>
            <div className="zafik_child_div">
              <h1 className="zafik_child_h1">Ребенок </h1>
              <select className="zafik_child_select" id="child">
                {rebenok.map(item=>{
                  return<>{rebenoki.map(item2=>{
                    if (item===item2.childid) {
                      return<option value={item}>{item2.childlastname}    {item2.childfirstname} </option>
                    }
                  })}</>
                })}
              </select>
            </div>
            <div className="zafik_data_div">
              <div className="zafik_data_minidiv1">
                <h1 className="zafik_data_h1">Дата начала</h1>
                <input className="zafik_data_input" id="data_start" type="date" />
              </div>
              <div className="zafik_data_minidiv1">
                <h1 className="zafik_data_h1">Дата окончания</h1>
                <input className="zafik_data_input" id="data_end" type="date" />
              </div>
            </div>

            <div className="zafik_naff">
              <h4>
                Часть дня *
              </h4>
              <select className="zafik_child_select" id="day_part">
                <option value="Утро">Утро</option>
                <option value="После обеда">После обеда</option>
                <option value="Весь день">Весь день</option>
              </select>
            <h4>Причина *</h4>
            <select className="zafik_child_select" id="reason">
              <option value="Болезнь">Болезнь</option>
              <option value="Посещение врача">Посещение врача</option>
              <option value="Отпуск">Отпуск</option>
            </select>
            </div>
            <div className="btnnS">
              <button onClick={() => postExcuse()}>Создать</button>
              <button onClick={() => closedChildModal()}>Отмена</button>
            </div>

          </div>
        </div>
      </div>





      <div className="zafik_bigdiv2">
        <div className="zafik_div">
         
          <div className="zafik_minidiv">
          <h1 className="zafik_excuse_h1">Редактировать запись о пропуска ребенка</h1>
          <div className="zafik_child_div">
            <h1 className="zafik_child_h1">Ребенок</h1>
            {rebenoki.map((item2)=>{
              if (putExcuse45.childid===item2.childid) {
                return<h2 className="zafik_child_h1">{item2.childlastname}  {item2.childfirstname}</h2>
              }
            })}
          </div>
          <div className="zafik_data_div">
            <div className="zafik_data_minidiv1">
              <h1 className="zafik_data_h1">Дата начала</h1>
              <h2 className="zafik_child_h1">{putExcuse45.datestart}</h2>
              <input className="zafik_data_input" id="put_data_start" type="date" />
            </div>
            <div className="zafik_data_minidiv1">
              <h1 className="zafik_data_h1">Дата окончания</h1>
              <h2 className="zafik_child_h1">{putExcuse45.dateend}</h2>
              <input className="zafik_data_input" id="put_data_end" type="date" />
            </div>
          </div>

          <div className="zafik_naff">
            <h4>
              Часть дня 
            </h4>
            <h2 className="zafik_child_h1">{putExcuse45.daypart}</h2>
            <select className="zafik_child_select" id="put_day_part">
              <option value="Утро">Утро</option>
              <option value="После обеда">После обеда</option>
              <option value="Весь день">Весь день</option>
            </select>
          <h4>Причина </h4>
          <h2 className="zafik_child_h1">{putExcuse45.reason}</h2>
          <select className="zafik_child_select" id="put_reason">
            <option value="Болезнь">Болезнь</option>
            <option value="Посещение врача">Посещение врача</option>
            <option value="Отпуск">Отпуск</option>
          </select>
          </div>
          <div className="btnnS">
            <button onClick={() => functioPutExcuse([putExcuse45.excuseid,putExcuse45.childid])}>Редактировать</button>
            <button onClick={() => closedChildModal()}>Отмена</button>
          </div>

        </div>


        </div>
      </div>










      <div className="BigModalChild">
        {rebenoki.map((item2) => {
          if (rebenok3 === item2.childid) {
            return (
              <div className="ModalChilds">
                {allexcuse.map((item3) => {
                  if (
                    item2.childid === item3.childid &&
                    rebenok2 === item3.datestart.slice(0, 10)
                  ) {
                    if (item2.gender==="м") {
                      return (
                        <>
                          <h4 className="ixk">
                            Детали отсутствия {item3.datestart.slice(0, 10)}
                            <span onClick={() => closeChildModal()}>X</span>
                          </h4>
                          <br />
                          <h4 className="uu">Ребенок </h4>
                          <div classname="childs">
                            <img src={Img0012} alt="" />
                            <p>
                              {item2.childfirstname} {item2.childlastname}
                            </p>
                          </div>
                          <h4 className="uu">Дата</h4>
                          <div className="mchj">
                            <h4 className="uu">{item3.datestart.slice(0, 10)}</h4>
                            <h4 className="uu">{item3.daypart}</h4>
                          </div>
                          <h4 className="uu">Причина </h4>
                          <p className="uu">{item3.reason}</p>
                          <br />
                          <p>
                            {employ.map((item4) => {
                              if (item3.employeeid === item4.employeeid) {
                                return person.map((item5) => {
                                  if (item4.personid === item5.personid) {
                                    return (
                                      <p>
                                        Автор:{item5.personlastname}{" "}
                                        {item5.personfirstname}{" "}
                                        {item5.personmiddlename}
                                      </p>
                                    );
                                  }
                                });
                              }
                            })}
                            <br />
                            Дата:{item3.syschangedatutc.slice(0, 10)}
                          </p>
                          <div className="btn_Groupo">
                            <button onClick={() => simSim(item3.excuseid)}>Редактировать</button>
                            <button onClick={() => functionDeleteExcuse(item3.excuseid)} >Удалить</button>
                          </div>
                        </>
                      );
                    }else{
               return (
                      <>
                        <h4 className="ixk">
                          Детали отсутствия {item3.datestart.slice(0, 10)}
                          <span onClick={() => closeChildModal()}>X</span>
                        </h4>
                        <br />
                        <h4 className="uu">Ребенок </h4>
                        <div classname="childs">
                          <img src={img} alt="" />
                          <p>
                            {item2.childfirstname} {item2.childlastname}
                          </p>
                        </div>
                        <h4 className="uu">Дата</h4>
                        <div className="mchj">
                          <h4 className="uu">{item3.datestart.slice(0, 10)}</h4>
                          <h4 className="uu">{item3.daypart}</h4>
                        </div>
                        <h4 className="uu">Причина </h4>
                        <p className="uu">{item3.reason}</p>
                        <br />
                        <p>
                          {employ.map((item4) => {
                            if (item3.employeeid === item4.employeeid) {
                              return person.map((item5) => {
                                if (item4.personid === item5.personid) {
                                  return (
                                    <p>
                                      Автор:{item5.personlastname}{" "}
                                      {item5.personfirstname}{" "}
                                      {item5.personmiddlename}
                                    </p>
                                  );
                                }
                              });
                            }
                          })}
                          <br />
                          Дата:{item3.syschangedatutc.slice(0, 10)}
                        </p>
                        <div className="btn_Groupo">
                          <button onClick={() => simSim(item3.excuseid)}>Редактировать</button>
                          <button onClick={() => functionDeleteExcuse(item3.excuseid)} >Удалить</button>
                        </div>
                      </>
                    );
                    }
     
                  }
                })}
              </div>
            );
          }
        })}
      </div>
      <div className="ybuyi">
        <div className="calendar-container">
          <Calendar
            onClickDay={handleClickDay}
            onChange={setDate}
            value={date}
            tileContent={getTileContent}
          />
          <div onClick={() => openPostExcuse()} className="pulsDiv" >
            <span>+</span>
          </div>
        </div>

      </div>
    </div>
  );
}
