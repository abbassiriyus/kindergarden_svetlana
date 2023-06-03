import "./Employees.css";
import "./css/New.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from "react";
import ico1 from "../img/free-icon-delete-5396993 (2).png";
import ico2 from "../img/free-icon-edit-6488637 (2).png";
import axios from "axios";
import url from "../host";

export default class App extends Component {
  state = {
    person: [],
    data: [],
    group: [],
    gruppa: [],
    child:[],
    baza:[],
    selectedValue: "январь",
    selectedValue2: 2,
    exquestion:[]
  };
  openModal() {
    document.querySelector(".modal11").style = "display:block";
  }
  openModal2(id) {
    document.querySelector(".modal112").style = "display:block";
    axios.get(`${url}/question/${id}`).then((res)=>{
      this.setState({exquestion:res.data})
      console.log();
    })
  }
  closeModal() {
    document.querySelector(".modal11").style = "display:none";
    document.querySelector(".modal112").style = "display:none";
  }
  postData() {
    var formdata2 = new FormData();
    formdata2.append("skillname", 3);
    formdata2.append("skillgroupid", 3);
    axios.post(`${url}/skill`, formdata2).then((res) => {
      axios.get(`${url}/skill`).then((res1) => {
        var resid = 0;

        res1.data.map((item) => {
          if (
            item.skillname == 3 &&
            item.skillgroupid ==3
          ) {
            resid = item.skillid;
          }
        });
        var formdata = new FormData();
        formdata.append("skillid", resid);
        formdata.append("month", document.querySelector("#test1").value);
        formdata.append("question", document.querySelector("#test4").value);
        formdata.append(
          "question_img",
          document.querySelector(".test6").files[0]
        );
        formdata.append("answer", document.querySelector("#test5").value);
        formdata.append("author", document.querySelector("#test2").value);
        axios.post(`${url}/question`, formdata).then((res) => {
          axios.get(`${url}/question`).then((res2) => {
            for (let i = 0; i < res2.data.length; i++) {
              window.location.reload()
            }
          })
          // window.location.reload()
          console.log(res.data);
        });
      });
    });
  }
  putData(id) {
    var formdata2 = new FormData();
    formdata2.append("skillname", 3);
    formdata2.append("skillgroupid", 3);
    axios.post(`${url}/skill`, formdata2).then((res) => {
      axios.get(`${url}/skill`).then((res1) => {
        var resid = 0;

        res1.data.map((item) => {
          if (
            item.skillname == 3 &&
            item.skillgroupid ==3
          ) {
            resid = item.skillid;
          }
        });
        var formdata2 = new FormData();
        formdata2.append("skillid", resid);
        formdata2.append("month", document.querySelector("#test1p").value);
        formdata2.append("question", document.querySelector("#test4p").value);
        formdata2.append(
          "question_img",
          document.querySelector(".test6p").files[0]
        );
        formdata2.append("answer", document.querySelector("#test5p").value);
        formdata2.append("author", document.querySelector("#test2p").value);
        axios.put(`${url}/question/${id}`, formdata2).then((res) => {
          console.log("ishladi");
          window.location.reload()
          // window.location.reload()
          console.log(res.data);
        });
      });
    });
  }
  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
    console.log( event.target.value);
}
handleChange2 = (event) => {
  const selectedValue2 = parseInt(event.target.value, 10);
  this.setState({ selectedValue2 });
  console.log(selectedValue2, "fffffffff");
}
  componentDidMount = () => {
    axios.get(`${url}/question`).then((res)=>{
      this.setState({person:res.data})
    })
    axios.get(`${url}/skill_group`).then((res) => {
      this.setState({ group: res.data });
    });
    axios.get(`${url}/group`).then((res) => {
      this.setState({ gruppa: res.data });
    });
    axios.get(`${url}/child`).then((res4) => {
      this.setState({ child: res4.data });
    });
    this.getData11();
    // this.handleChange()
  };

  deleteData(key) {
    axios.delete(`${url}/question/${key.questionid}`).then((res) => {
      axios.delete(`${url}/skill/${key.skillid}`).then((res1) => {
        window.location.reload();
      });
    });
  }
  getData11() {
    axios.get(`${url}/person`).then((res) => {
      var abu = res.data;
      var abu2 = [];
      axios.get(`${url}/employee`).then((res1) => {
        for (let i = 0; i < res1.data.length; i++) {
          for (let j = 0; j < abu.length; j++) {
            if (abu[j].personid === res1.data[i].personid) {
              abu[j].positionid = res1.data[i].positionid;
              abu2.push(abu[j]);
            }
          }
        }
        axios.get(`${url}/position`).then((res2) => {
          for (let i = 0; i < res2.data.length; i++) {
            for (let j = 0; j < abu2.length; j++) {
              if (abu2[j].positionid === res2.data[i].positionid) {
                abu2[j].positiontitle = res2.data[i].positiontitle;
              }
            }
          }
          this.setState({ data: abu2 });
        });
      });
    });
  }

  render() {
    return (
      <div className="nodir5">
        <div className="modal11">
          <div className="Apages1">
            <div className="oyna101">
              <div className="pages11">
                <br />
                <label htmlFor="test1"> Месяц </label>
                <br />
                <select name="" id="test1">
                  <option value="январь">январь</option>
                  <option value="февраль">февраль</option>
                  <option value="марта">март</option>
                  <option value="апрель">апрель</option>
                  <option value="мая">май</option>
                  <option value="июнь">июнь</option>
                  <option value="июль">июль</option>
                  <option value="Август">август</option>
                  <option value="Сентябрь">сентябрь</option>
                  <option value="Октябрь">октябрь</option>
                  <option value="ноябрь">ноябрь</option>
                  <option value="Декабрь">декабрь</option>
                </select>
              </div>
              <div className="pages11">
                <br />
                <label htmlFor="test2"> Автор</label>
                <br />
                <select name="" id="test2">
                  {this.state.data.map((item) => {
                    return (
                      <option
                        value={
                          item.personlastname +
                          " " +
                          item.personfirstname +
                          " " +
                          item.personmiddlename
                        }
                      >
                        {item.personlastname} {item.personfirstname}{" "}
                        {item.personmiddlename}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="pages11">
                <br />
                <label htmlFor="test3">Группа</label>
                <br />
                <select>
                  {this.state.gruppa.map((item)=>{
                    return<option>{item.groupname}</option>
                  })}
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="test10">Область развития</label><br />
                <select name="" id="test3">
                  <option value={1}>Окружающий мир</option>
                </select>
                <br />
                
              </div>
              <div className="pages11">
                <label htmlFor="test4">Вопрос</label>
                <br />
                <input id="test4" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="test5">Ответ</label>
                <br />
                <input id="test5" type="text" />
              </div>
              <div className="pages12">
                <label htmlFor="test6">Вложение</label>
                <div className="upload_file">
                  <h1>+</h1>
                  <p>(Перетащите или щелкните, чтобы вставить)</p>
                </div>
                <input className="test6" type="file" />
              </div>
            </div>
            <div className="df_button">
              <button
                className="df_button1"
                onClick={() => {
                  this.closeModal();
                }}
              >
                Назад
              </button>
              <button
                className="df_button2"
                onClick={() => {
                  this.postData();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
        <div className="modal112">
          {this.state.exquestion.map((item)=>{
          return<div className="Apages1">
          <div className="oyna101">
            <div className="pages11">
              <br />
              <label htmlFor="test1"> Месяц </label>
              <h5 htmlFor="test1">  Предыдущий:{item.month}</h5>
              <br />
              <select name="" id="test1p">
                <option value="январь">январь</option>
                <option value="февраль">февраль</option>
                <option value="марта">март</option>
                <option value="апрель">апрель</option>
                <option value="мая">май</option>
                <option value="июнь">июнь</option>
                <option value="июль">июль</option>
                <option value="Август">август</option>
                <option value="Сентябрь">сентябрь</option>
                <option value="Октябрь">октябрь</option>
                <option value="ноябрь">ноябрь</option>
                <option value="Декабрь">декабрь</option>
              </select>
            </div>
            <div className="pages11">
              <br />
              <label htmlFor="test2"> Автор</label>
              <h5 htmlFor="test1">  Предыдущий:{item.author}</h5>
              <br />
              <select name="" id="test2p">
                {this.state.data.map((item) => {
                  return (
                    <option
                      value={
                        item.personlastname +
                        " " +
                        item.personfirstname +
                        " " +
                        item.personmiddlename
                      }
                    >
                      {item.personlastname} {item.personfirstname}{" "}
                      {item.personmiddlename}{" "}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="pages11">
              <label htmlFor="test4p">Вопрос</label>
              <h5 htmlFor="test1">  Предыдущий:{item.question}</h5>
              <br />
              <input id="test4p" type="text" />
            </div>
            <div className="pages11">
              <label htmlFor="test5p">Ответ</label>
              <h5 htmlFor="test1">  Предыдущий:{item.answer}</h5>
              <br />
              <input id="test5p" type="text" />
            </div>
            <div className="pages12">
              <label htmlFor="test6p">Вложение</label>
              <div className="upload_file">
                <h1>+</h1>
                <p>(Перетащите или щелкните, чтобы вставить)</p>
              </div>
              <input className="test6p" type="file" />
            </div>
          </div>
          <div className="df_button">
            <button
              className="df_button1"
              onClick={() => {
                this.closeModal();
              }}
            >
              Назад
            </button>
            <button
              className="df_button2"
              onClick={() => {
                this.putData(item.questionid);
              }}
            >
              Сохранить
            </button>
          </div>
        </div>
          })}
        </div>

        <h1 className="sss22">Задания</h1>
        <div className="cake">
          <div className="cake1">
          <select value={this.state.selectedValue} onChange={this.handleChange} className="mad" name="" id="test100">
                  <option value="январь">январь</option>
                  <option value="февраль">февраль</option>
                  <option value="марта">март</option>
                  <option value="апрель">ацпрель</option>
                  <option value="мая">май</option>
                  <option value="июнь">июнь</option>
                  <option value="июль">июль</option>
                  <option value="Август">август</option>
                  <option value="Сентябрь">сентябрь</option>
                  <option value="Октябрь">октябрь</option>
                  <option value="ноябрь">ноябрь</option>
                  <option value="Декабрь">Декабрь</option>
                </select>
            <select value={this.state.selectedValue2} onChange={this.handleChange2} className="mad" name="" id="">
              {this.state.gruppa.map((item) => {
                return <option value={item.groupid}>{item.groupname}</option>;
              })}
            </select>
            <button
              onClick={() => {
                this.openModal();
              }}
              className="nodiruca"
            >
              Добавить тест
            </button>
          </div>
        </div>

        <div className=" bigbox">
          <div className="bodyadmpn">
            <div className="btnadmp_box1">
              <table className="btnchil_table">
                <tr className="btnadmp_tr">
                  <th className="btnadmp_th1">ID</th>
                  <th className="btnadmp_th">Рисунок</th>
                  <th className="btnadmp_th"> Месяц </th>
                  <th className="btnadmp_th">Дата отправки </th>
                  <th className="btnadmp_th">Автор</th>
                  <th className="btnadmp_th" id="borDr">
                    Действие
                  </th>
                </tr>
                {this.state.person.map((item) => {
                    return (
                      <tr className="btnadmp_tr1">
                        <td className="btnadmp_td1">{item.questionid}</td>
                        <td className="btnadmp_td1">
                          <img
                            width="100px"
                            src={`${url}/` + item.question_img}
                            alt={`${url}/` + item.question_img}
                          />
                        </td>
  
                        <td className="btnadmp_td1">{item.month}</td>
  
                        
                        <td className="btnadmp_td1">
                          {" "}
                          {item.syscreatedatutc.slice(0, 10)}
                        </td>
                        <td className="btnadmp_td1"> {item.author}</td>
                        <td className="btnadmp_td1">
                          <button   onClick={() => {
                this.openModal2(item.questionid);
              }} className="butadmp1">
                            <img src={ico2} alt="" />
                          </button>
                          <button className="butadmp2">
                            <img
                              onClick={() => this.deleteData(item)}
                              src={ico1}
                              alt=""
                            />
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
    );
  }
}
