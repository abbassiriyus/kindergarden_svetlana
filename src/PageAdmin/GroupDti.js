import "./css/New.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import ico2 from "../img/free-icon-edit-6488637 (2).png";
import ico1 from "../img/free-icon-delete-5396993 (2).png";
import axios from "axios";
import { FaRoad } from "react-icons/fa";
import url from "../host";
import { data } from "jquery";

export default function GroupDti() {
  const [state, setState] = useState([]);
  const [state2, setState2] = useState([]);
  const [state3, setState3] = useState([]);
  const [non, setnon] = useState([]);
  const [Deti, setDeti] = useState([]);
  const [labor, setLabor] = useState([]);
  const [position, setposition] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${url}/group`)
        .then((res) => {
          const filteredGroup = res.data;
          axios.get(`${url}/group_emp`).then((res2) => {
            for (let i = 0; i < res2.data.length; i++) {
              for (let j = 0; j < filteredGroup.length; j++) {
                if (res2.data[i].groupid === filteredGroup[j].groupid) {
                  filteredGroup[j].employ = res2.data[i].employeeid;
                }
              }
            }
            axios.get(`${url}/employee`).then((res3) => {
              for (let i = 0; i < res3.data.length; i++) {
                for (let j = 0; j < filteredGroup.length; j++) {
                  if (res3.data[i].employeeid === filteredGroup[j].employ) {
                    filteredGroup[j].person = res3.data[i].personid;
                  }
                }
              }
              axios.get(`${url}/person`).then((res4) => {
                for (let i = 0; i < res4.data.length; i++) {
                  for (let j = 0; j < filteredGroup.length; j++) {
                    if (res4.data[i].personid === filteredGroup[j].person) {
                      filteredGroup[j].personlastname =
                        res4.data[i].personlastname;
                    }
                  }
                }

                setState(filteredGroup);

                axios.get(`${url}/labor`).then((res5) => {
                  setLabor(res5.data);
                  axios.get(`${url}/position`).then((res5) => {
                    setposition(res5.data);
                  });
                  axios.get(`${url}/employee`).then((res56) => {
                    setState2(res56.data)

                  });
                  axios.get(`${url}/person`).then((res50) => {
                    setState3(res50.data)

                  });
                });
              });
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //    console.log(state);
  //    // console.log(non);
  // }, [state])

  function opensModal() {
    document.querySelector(".Dobav_Group").style = "display: block";
    document.querySelector(".asdasdasdasd").style = "display: none";
  }

  function closesModal() {
    document.querySelector(".Dobav_Group").style = "display: none";
    document.querySelector(".asdasdasdasd").style = "display: block";
  }

  function opensModal2(groupid) {
    document.querySelector(".Dobav_Group2").style = "display: block";
    document.querySelector(".asdasdasdasd").style = "display: none";
    // console.log(groupid);
    axios.get(`${url}/group/${groupid}`).then((res) => {
      setnon(res.data);
    });
  }

  function closesModal2() {
    document.querySelector(".Dobav_Group2").style = "display: none";
    document.querySelector(".asdasdasdasd").style = "display: block";
  }

  function postData(groupid) {
    const data = new FormData();
    data.append("groupname", document.querySelector("#textDobav").value);
    data.append("ageid", document.querySelector("#ageidDobav").value);
    // data.append('syscreatedatutc', '2023-05-07T15:25:25.361Z')
    // data.append('syschangedatutc', '2023-05-10T17:55:57.943Z')
    axios.put(`${url}/group/${groupid}`, data).then((res) => {
      alert("Изменено");
      window.location = "/groupdti";
    });
  }



  function deleteGroup(ll) {
    alert(ll)
    axios.delete(`${url}/group/${ll}`).then((res) => {
      // console.log(res.data);
      window.location = " /groupdti";
      alert("Удалено");
    }).catch((err)=>{
     alert(err);
    });
  }



  function postData2() {
    const datta = new FormData();
    const groupnameInput = document.querySelector('.hthgnhdnd');
    const ageidInput = document.querySelector('.ageidDobav2');

    // проверяем, заполнены ли необходимые поля
    if (!groupnameInput.value || !ageidInput.value) {
      console.log('Заполните необходимые поля');
      return;
    }

    const jok = selectedValue;
    const jok2 = Deti;
    datta.append('employeeid', jok);
    datta.append('groupid', jok2);

    // проверяем, объявлены ли переменные selectedValue и Deti
    if (!jok && !jok2) {
      console.log('Переменные selectedValue и Deti не объявлены');
      return;
    }

    const groupData = new FormData();
    groupData.append('groupname', groupnameInput.value);
    groupData.append('ageid', ageidInput.value);

    axios
      .post(`${url}/group`, groupData)
      .then((res) => {
        alert('Сохранено!');

        axios.get(`${url}/group`)
          .then((res2) => {
            for (let i = 0; i < res2.data.length; i++) {
              if (res2.data[i].groupname === groupnameInput.value) {
                setDeti(res2.data[i].groupid);
                break;
              }
            }

            // проверяем, получены ли значения selectedValue и Deti
            if (!selectedValue || !Deti) {
              console.log('Не удалось получить значения selectedValue и Deti');
              return;
            }

            axios.post(`${url}/group_emp`, datta)
              .then((res3) => {
                console.log(res3.data);
              })
              .catch(() => {
                console.log('Ошибка при отправке запроса group_emp');
              })
          })
          .catch(() => {
            console.log('Ошибка при отправке запроса на получение группы');
          })
      })
      .catch(() => {
        console.log('Ошибка при отправке запроса на сохранение группы');
      });
  }
  return (
    <div className="nodir5">
      <div className="Dobav_Group">
        <h2>+ Добавить Группа</h2>
        <div className="sdfgdf">
          <h4 className="kkkk">Название *</h4>
          <input className="textDobav2" type="text" />
          <h4>Учебный год</h4>
          <input className="ageidDobav2" type="number" />
          <h4>Воспитатели</h4>
          <select value={selectedValue} onChange={(event) => setSelectedValue(event.target.value)} className="hthgnhdnd">
            {state2.map((item) => {
              return <>{state3.map((item2) => {
                if (item.personid === item2.personid) {
                  return <option value={item.employeeid}>{item2.personlastname}</option>;
                }
              })}</>

            })}
          </select>
          <h4>Активность</h4>
          <select>
            <option>Да</option>
            <option>Нет</option>
          </select>
          {/* <h4>Дети</h4> */}
          {/* <select>
            <option></option>
            {Deti.map((item) => {
              return (
                <option>
                  {item.childlastname} {item.childfirstname}{" "}
                  {item.childmiddlename}
                </option>
              );
            })}
          </select> */}
        </div>
        <div className="grp_btn">
          <button onClick={() => closesModal()}>Назад</button>
          <button onClick={() => postData2()}>Сохранить</button>
        </div>
      </div>
      <div className="modal12">
          <div className="form12">
            <h3>Удалить</h3>
            <button
              className="df_button1"
              onClick={() => {
                document.querySelector(".modal12").style = "display:none";
              }}
            >
              Назад
            </button>
            <button
              className="df_button2"
              onClick={() => {
                this.deletePerson(this.state.deleteData.personid);
              }}
            >
              Удалить
            </button>
          </div>
        </div>

      <div className="Dobav_Group2">
        {non.map((item) => {
          return (
            <div>
              <h2>Изменит Группа</h2>
              <div className="sdfgdf2">
                <h4>Название *</h4>
                <div>
                  <input
                    id="textDobav"
                    placeholder={item.groupname}
                    type="text"
                  />
                  <h4>Учебный год</h4>
                  <input
                    id="ageidDobav"
                    placeholder={item.ageid}
                    type="number"
                  />
                </div>
              </div>
              <div className="grp_btn2">
                <button onClick={() => closesModal2()}>Назад</button>
                <button onClick={() => postData(item.groupid)}>
                  Сохранить
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="asdasdasdasd">
        <div className="cake">
          <div className="cake1">
            <select className="mad" name="" id="">
              <option value="">Учебный год</option>
              <option value="">2023/12/12</option>
              <option value="">2023/12/13</option>
              <option value="">2023/12/14</option>
              <option value="">2023/12/15</option>
            </select>
            <button className="nodiruca" onClick={() => opensModal()}>
              + Добавить Группа
            </button>
          </div>
        </div>

        <div className=" bigbox">
          <div className="bodyadmpn">
            <div className="btnadmp_box1">
              <table className="btnchil_table">
                <tr className="btnadmp_tr">
                  <th className="btnadmp_th1">ID</th>

                  <th className="btnadmp_th"> Название</th>
                  <th className="btnadmp_th">Учебный год</th>
                  <th className="btnadmp_th">Воспитатели</th>
                  <th className="btnadmp_th">Активность</th>
                  <th className="btnadmp_th" id="borDr">
                    Действие
                  </th>
                  {/* <th className="btnadmp_th">Дата  <br /> добавления</th>
                  <th className="btnadmp_th2">Действие </th> */}
                </tr>
                {state.map((item, key) => {
                  return (
                    <tr className="btnadmp_tr1">
                      <td className="btnadmp_td1">{key + 1}</td>
                      <td className="btnadmp_td1">{item.groupname}</td>
                      <td className="btnadmp_td1">
                        {" "}
                        {item.syscreatedatutc.slice(0, 10)}
                      </td>
                      <td className="btnadmp_td1"> {item.personlastname}</td>
                      <td className="btnadmp_td1">
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: "lime",
                            margin: "auto",
                            border: "1px solid gray",
                          }}
                        ></div>
                      </td>
                      <td className="btnadmp_td1">
                        <button
                          onClick={() => opensModal2(item.groupid)}
                          className="butadmp1"
                        >
                          <img src={ico2} alt="" />
                        </button>
                        <button
                          onClick={() => deleteGroup(item.groupid)}
                          className="butadmp2"
                        >
                          <img src={ico1} alt="" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
