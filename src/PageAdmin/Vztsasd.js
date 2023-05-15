import React, { useState, useEffect } from "react";
import ico1 from "../img/free-icon-delete-5396993.png";
import ico2 from "../img/free-icon-edit-6488637 (2).png";
import "./css/Vztsasd.css";
import Dropdown from "react-bootstrap/Dropdown";
import url from "../host";
import axios from "axios";

export default function Vztsasd() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [state, setState] = useState([]);
  const [posted, setPosted] = useState([]);

  useEffect(() => {
    function getsOne() {
      const hallo = [];
      axios.get(`${url}/attendance`).then((res) => {
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
      });
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

    getsOne();
  }, []);
  function deleteData(key) {
    console.log(key);
    axios.delete(`${url}/attendance/${key}`).then((res) => {
      window.location.reload();
    });
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
        if (data.groupid == key) {
          data1.push(data);
        }
      });
      setPosted(data1);
    });
    console.log(posted);
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
            <select>
              {state.map((item) => {
                return (
                  <option onClick={() => GetData(item.groupid)}>
                    {item.groupname}
                  </option>
                );
              })}
            </select>
            <h4>Дети *</h4>
            <select>
              {posted.map((item) => {
                return <option>{item.childlastname}</option>;
              })}
            </select>
            <h4>Приход *</h4>
            <input type="text" />
            <h4>Уход *</h4>
            <input type="text" />
            <button>Сохранить</button>
          </div>
        </div>
        <div className="nodir3">
          <div className="abbas">
            <div className="dropw">
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
              </Dropdown>
              <button id="btnlar1" onClick={() => OpenSRF()}>
                + Добавить посещение
              </button>
            </div>
            <ul className="ustoz">
              <li className="madin">Отсутствующих: {data2.length}</li>
              <li className="madin1">
                Присутствующих: {data3.length - data2.length}
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

                  {data.map((item) => {
                    if (item.excuseid) {
                      return (
                        <tr className="btnadmp_tr1">
                          <td className="btnadmp_td2">2</td>
                          <td className="btnadmp_td2">
                            {item.childlastname} {item.childfirstname}
                          </td>
                          <td className="btnadmp_td2">{item.reason}</td>
                          <td className="btnadmp_td2">
                            {item.arrivaltime.slice(0, 10)}
                          </td>
                          <td className="btnadmp_td2">
                            {item.arrivaltime.slice(0, 10)}
                          </td>

                          <td className="btnadmp_td2">
                            <button className="butadmp1">+</button>
                          </td>
                        </tr>
                      );
                    } else {
                      return (
                        <tr className="btnadmp_tr1">
                          <td className="btnadmp_td1">{item.attendanceid}</td>
                          <td className="btnadmp_td1">{item.childlastname}</td>
                          <td className="btnadmp_td1"> Присутствует </td>
                          <td className="btnadmp_td1">
                            {item.arrivaltime.slice(0, 10)}
                          </td>
                          <td className="btnadmp_td1">
                            {item.leavingtime.slice(0, 10)}
                          </td>

                          <td className="btnadmp_td1">
                            <button
                              className="butadmp1"
                              onClick={() => PutData(item.attendanceid)}
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
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
