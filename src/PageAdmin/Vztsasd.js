import React, { useState, useEffect } from "react";
import ico1 from "../img/free-icon-delete-5396993.png";
import ico2 from "../img/free-icon-edit-6488637 (2).png";
import "./css/Vztsasd.css";
import Dropdown from "react-bootstrap/Dropdown";
import url from "../host";
import axios from "axios";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Vztsasd() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [state, setState] = useState([]);
  const [posted, setPosted] = useState([]);
  const [getted, setGetted] = useState([]);
  const [finally2, setFinally] = useState(true);
  const [gettedGroup, setGroup] = useState([]);
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0,10));
  useEffect(() => {
    function getsOne() {
      const hallo = [];
      axios
        .get(`${url}/attendance`)
        .then((res) => {
          axios.get(`${url}/child`).then((res2) => {
            for (let i = 0; i < res.data.length; i++) {
              for (let j = 0; j < res2.data.length; j++) {
                if (res.data[i].childid == res2.data[j].childid) {
                  res.data[i].childlastname = res2.data[j].childlastname;
                  res.data[i].childfirstname = res2.data[j].childfirstname;
                }
              }
            }
            setData3(res.data);
            axios.get(`${url}/excuse`).then((res3) => {
              for (let i = 0; i < res.data.length; i++) {
                for (let j = 0; j < res3.data.length; j++) {
                  if (res.data[i].excuseid === res3.data[j].excuseid) {
                    res.data[i].reason = res3.data[j].reason;
                  }
                }
              }
              setData2(res3.data);
              setData(res.data);
            });
          });
        })
        .finally(() => {
          setFinally(false);
        });
    }
    console.log(state, "tiug1");
    axios.get(`${url}/group`).then((res) => {
      setGroup(res.data);
    });

    getsOne();
  }, []);
  function deleteData(key) {
    console.log(key);
    axios.delete(`${url}/attendance/${key}`).then((res) => {
      window.location.reload();
    });
  }
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }
  function PutData(key) {
    axios.get(`${url}/attendance/${key}`).then((res) => {
      console.log(res.data);
    });
  }

  function OpenSRF() {
    document.querySelector(".srdhcfghjbk").style = "display: block";
    document.querySelector(".hyeraysd").style = "display: block";
    axios.get(`${url}/group`).then((res) => {
      setState(res.data);
    });
  }
  function closeSRF() {
    document.querySelector(".srdhcfghjbk").style = "display: none";
    document.querySelector(".hyeraysd").style = "display: none";
  }

  function GetData(key) {
    axios.get(`${url}/child`).then((res) => {
      var data1 = [];
      res.data.map((data) => {
        if (data.groupid == document.querySelector(".dddaa").value||data.groupid == document.querySelector(".dddaap").value) {
          data1.push(data);
        }
      });
      setPosted(data1);
    });
    console.log(posted, "iuoooooobykgjl");
  }

  function postAtten() {
    var personname = document.querySelector(".lox").value;
    var data = new FormData();
    data.append("date", document.querySelector(".datee1").value);
    data.append("childid", personname);
    data.append("arrivaltime", document.querySelector(".datee1").value);
    data.append("leavingtime", document.querySelector(".datee2").value);
    data.append("employeeid", 1);
    data.append("excuseid", 1);
    console.log(data);
    axios.post(`${url}/attendance`, data).then((res) => {
      console.log(res.data);
      window.location = "/Vztsasd";
    });
  }
  function put(id) {
    var personname = document.querySelector(".loxp").value;
    var data = new FormData();
    data.append("date", document.querySelector(".datee1p").value);
    data.append("childid", personname);
    data.append("arrivaltime", document.querySelector(".datee1p").value);
    data.append("leavingtime", document.querySelector(".datee2p").value);
    data.append("employeeid", 1);
    data.append("excuseid", 1);
    console.log(data);
    axios.put(`${url}/attendance/${id}`, data).then((res) => {
      console.log(res.data);
      window.location = "/Vztsasd";
    });
  }

  function OpenSRF2(key) {
    document.querySelector(".hyeraysd2").style = "display: block";
    console.log(key);
    axios.get(`${url}/attendance/${key}`).then((res) => {
      setGetted(res.data);
    });
    axios.get(`${url}/group`).then((res) => {
      setState(res.data);
    });
  }
  function closeSRF2() {
    document.querySelector(".hyeraysd2").style = "display: none";
  }

  return (
    <div>
      <div>
        <div className="hyeraysd">
          <div className="srdhcfghjbk">
            <h1>
              Введите новое приход и уход
              <span onClick={() => closeSRF()}>X</span>
            </h1>
            <h4>Группа *</h4>
            <select onClick={() => GetData()} className="dddaa">
              {state.map((item) => {
                return (
                  <option className="dddaa2" value={item.groupid}>
                    {item.groupname}
                  </option>
                );
              })}
            </select>
            <h4>Дети *</h4>
            <select className="lox">
              {posted.map((item) => {
                return (
                  <option value={item.childid}>{item.childlastname}</option>
                );
              })}
            </select>
            <h4>Приход *</h4>
            <input className="datee1" type="datetime-local" />
            <h4>Уход *</h4>
            <input className="datee2" type="datetime-local" />
            <button onClick={() => postAtten()}>Сохранить</button>
          </div>
        </div>



        <div className="hyeraysd2">
          {getted.map((itemw)=>{
            return<div className="srdhcfghjbk">
            <h1>
              Введите новое приход и уход
              <span onClick={() => closeSRF2()}>X</span>
            </h1>
            <h4>Группа *</h4>
            <select onClick={() => GetData()} className="dddaap">
              {state.map((item) => {
                return<option className="dddaa2" value={item.groupid}>
                    {item.groupname}
                  </option>
               
              })}
            </select>
            <h4>Дети *</h4>
            <select className="loxp">
              {posted.map((item) => {
                return (
                  <option value={item.childid}>{item.childlastname}</option>
                );
              })}
            </select>
            <h4>Приход *</h4>
            <input className="datee1p" type="datetime-local" />
            <h4>Уход *</h4>
            <input className="datee2p" type="datetime-local" />
            <button onClick={() => put(itemw.attendanceid)}>Сохранить</button>
          </div>
          })}
        </div>



        <div className="nodir3">
          <div className="abbas">
            <div className="dropw">
              <select className="selectGrpp">
                {gettedGroup.map((item) => {
                  return(
                     <option>{item.groupname}</option>
                    )
                })}
              </select>
              <input type="date" className="inputDate"value={startDate} onChange={handleStartDateChange} />
              <button id="btnlar1" onClick={() => OpenSRF()}>
                Добавить посещение
              </button>
            </div>
            <ul className="ustoz">
            <li className="madin">Отсутствующих: {data2.filter((item) => item.datestart === startDate).length}</li>
              <li className="madin1">
              Присутствующих: {data3.filter((item) => item.date.substring(0, 10) === startDate).length}
              </li>
            </ul>
          </div>

          <div className=" bigbox">
            <div className="bodyadmpn">
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
                  {finally2 === true ? (
                    <div className="bigEgos">
                      <Box className="bigEgos2" sx={{ width: 300 }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                      </Box>
                    </div>
                  ) : (
                    data.map((item, key) => {
                      if (item.date.slice(0,10)===startDate) {
                        return (
                          <tr className="btnadmp_tr1">
                            <td className="btnadmp_td1">{key + 1}</td>
                            <td className="btnadmp_td1">{item.childlastname} {item.childfirstname}</td>
                            <td className="btnadmp_td1"> Присутствует </td>
                            <td className="btnadmp_td1">
                              {item.arrivaltime
                                .slice(5)
                                .replaceAll("-", "/")
                                .replaceAll("T", " ")}
                            </td>
                            <td className="btnadmp_td1">
                              {item.leavingtime
                                .slice(5)
                                .replaceAll("-", "/")
                                .replaceAll("T", " ")}
                            </td>
  
                            <td className="btnadmp_td1">
                              <button
                                className="butadmp1"
                                onClick={() => OpenSRF2(item.attendanceid)}
                              >
                                <img src={ico2} alt="" />
                              </button>
                              <button
                                onClick={() => deleteData(item.attendanceid)}
                                className="butadmp2"
                              >
                                <img src={ico1} alt="" />
                              </button>
                            </td>
                          </tr>
                        ); 
                      }
                    })
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
