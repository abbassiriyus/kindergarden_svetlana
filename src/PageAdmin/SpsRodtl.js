import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import icon1 from "../img/icon1.svg";
import icon2 from "../img/icon21.svg";
import "./Employees.css";
import axios from "axios";
import url from "../host";

export default class Employees extends Component {
  state = {
    data: [],
    deleteData: {},
  };
  openModal() {
    document.querySelector(".modal11").style = "display:block";
  }
  closeModal() {
    document.querySelector(".modal11").style = "display:none";
  }

  getPerson = () => {
    axios.get(`${url}/person`).then((res) => {
      axios.get(`${url}/legal_rep`).then((res1) => {
        var data1 = [];
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res1.data.length; j++) {
            if (res.data[i].personid == res1.data[j].personid) {
              res.data[i].legalrepid = res1.data[j].legalrepid;
              res.data[i].company = res1.data[j].company;
              data1.push(res.data[i]);
            }
          }
        }
        axios.get(`${url}/relation`).then((res3) => {
          for (let i = 0; i < data1.length; i++) {
            for (let j = 0; j < res3.data.length; j++) {
              if (res3.data[j].legalrepid == data1[i].legalrepid) {
                data1[i].childid = res3.data[j].childid;
              }
            }
            data1[i].child = ``;
          }
          axios.get(`${url}/child`).then((res4) => {
            for (let i = 0; i < res4.data.length; i++) {
              for (let j = 0; j < data1.length; j++) {
                if (res4.data[i].childid == data1[j].childid) {
                  data1[j].child =
                    data1[j].child + `<br/>` + res4.data[i].child;
                }
              }
            }
            this.setState({ data: data1 });
          });
        });
      });
    });
  };

  componentDidMount() {
    this.getPerson();
  }

  PostPerson() {
    var formPerson = new FormData();
    var formAdress = new FormData();
    formAdress.append("region", document.querySelector(".aform1").value);
    formAdress.append("city", document.querySelector(".aform2").value);
    formAdress.append("street", document.querySelector(".aform3").value);
    formAdress.append("house", document.querySelector(".aform4").value);
    formAdress.append("building", document.querySelector(".aform5").value);
    formAdress.append("flat", document.querySelector(".aform6").value);
    axios.post(`${url}/address`, formAdress).then((res) => {
      var kluch = 0;
      axios.get(`${url}/address`).then((res1) => {
        for (let i = 0; i < res1.data.length; i++) {
          if (
            res1.data[i].region === document.querySelector(".aform1").value &&
            res1.data[i].city === document.querySelector(".aform2").value &&
            res1.data[i].street == document.querySelector(".aform3").value &&
            res1.data[i].house == document.querySelector(".aform4").value &&
            res1.data[i].building == document.querySelector(".aform5").value &&
            res1.data[i].flat == document.querySelector(".aform6").value
          ) {
            kluch = res1.data[i].addressid;
          }
        }
        formPerson.append("addressid", kluch);
        formPerson.append(
          "personlastname",
          document.querySelector("#form1").value
        );
        formPerson.append(
          "personfirstname",
          document.querySelector("#form2").value
        );
        formPerson.append(
          "personmiddlename",
          document.querySelector("#form3").value
        );
        formPerson.append(
          "dateofbirth",
          document.querySelector("#form5").value
        );
        formPerson.append("gender", document.querySelector("#form4").value);
        formPerson.append(
          "passportseries",
          document.querySelector(".form7").value
        );
        formPerson.append(
          "passportnumber",
          document.querySelector(".form8").value
        );
        formPerson.append(
          "passportdate",
          document.querySelector(".form9").value
        );
        formPerson.append("phone", document.querySelector("#form51").value);
        formPerson.append("email", document.querySelector(".form11").value);

        axios.post(`${url}/person`).then((res) => {
          Window.location.reload();
        });
      });
    });

    // formPerson.append("personlastname", document.querySelector("#form1").value)
    // formPerson.append("personfirstname", document.querySelector("#form2").value)
    // formPerson.append("personmiddlename", document.querySelector("#form3").value)
    // formPerson.append("gender", document.querySelector("#form4").value)
    // formPerson.append("dateofbirth", document.querySelector("#form5").value)
    // formPerson.append("passportseries", document.querySelector(".form7").value)
    // formPerson.append("passportnumber", document.querySelector(".form8").value)
    // formPerson.append("passportdate", document.querySelector(".form9").value)
    // formPerson.append("phone", document.querySelector("#form51").value)
    // formPerson.append("email", document.querySelector(".form11").value)
  }

  deletePerson() {
    axios.get(`${url}/employee`).then((res4) => {
      for (let i = 0; i < res4.data.length; i++) {
        if (res4.data[i].personid == this.state.deleteData.personid) {
          axios
            .delete(`${url}/employee/${res4.data[i].employeeid}`)
            .then((res) => {
              axios.get(`${url}/relation`).then((res6) => {
                res6.data.map((item) => {
                  if (item.legalrepid == this.state.deleteData.legalrepid) {
                    axios
                      .delete(`${url}/relation/${item.relationid}`)
                      .then((res) => {
                        console.log("err");
                      });
                  }
                  axios
                    .delete(
                      `${url}/legal_rep/${this.state.deleteData.legalrepid}`
                    )
                    .then((res3) => {
                      axios
                        .delete(
                          `${url}/person/${this.state.deleteData.personid}`
                        )
                        .then((res) => {
                          axios
                            .delete(
                              `${url}/address/${this.state.deleteData.addressid}`
                            )
                            .then((res2) => {
                              window.location.reload();
                            });
                        });
                    });
                });
              });
            });
        } else {
          axios.get(`${url}/relation`).then((res6) => {
            res6.data.map((item) => {
              if (item.legalrepid == this.state.deleteData.legalrepid) {
                axios
                  .delete(`${url}/relation/${item.relationid}`)
                  .then((res) => {
                    console.log("err");
                  });
              }
              axios
                .delete(`${url}/legal_rep/${this.state.deleteData.legalrepid}`)
                .then((res3) => {
                  axios
                    .delete(`${url}/person/${this.state.deleteData.personid}`)
                    .then((res) => {
                      axios
                        .delete(
                          `${url}/address/${this.state.deleteData.addressid}`
                        )
                        .then((res2) => {
                          window.location.reload();
                        });
                    });
                });
            });
          });
        }
      }
    });
  }

  render() {
    return (
      <div className="body">
        <div className="modal12">
          <div className="form12">
            <h3>Удалить</h3>
            <h4 className="deleteperson1">
              {this.state.deleteData.personlastname}
            </h4>
            <h4 className="deleteperson1">
              {this.state.deleteData.personfirstname}
            </h4>
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
                this.deletePerson();
              }}
            >
              Удалить
            </button>
          </div>
        </div>
        <div className="modal11">
          <div className="Apages1">
            <div className="oyna101">
              <div className="pages11">
                <label htmlFor="form1">Фамилия*</label>
                <br />
                <input id="form1" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form2">Имя* </label>
                <br />
                <input id="form2" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form3">Отчество*</label>
                <br />
                <input id="form3" type="text" />
              </div>
              <div className="pages11">
                <br />
                <label htmlFor="form4"> Пол* </label>
                <br />
                <select name="" id="form4">
                  <option value="М">М</option>
                  <option value="Ж">Ж</option>
                </select>
              </div>
              <div className="pages11">
                <label htmlFor="form5">Дата рождения*</label>
                <br />
                <input id="form5" type="date" />
              </div>
              <div className="pages11">
                <label htmlFor="form51">Телефон*</label>
                <br />
                <input id="form51" type="tel" />
              </div>
              <div className="pages11">
                <label htmlFor="form11">Эл.почта</label>
                <br />
                <input className="form11" type="email" />
              </div>

              <div className="pages11">
                <label htmlFor="form7">Серия паспорта* </label>
                <br />
                <input className="form7" type="text" />
              </div>
              <div className="pages11">
                <label htmlFor="form8"> Номер паспорта* </label>
                <br />
                <input className="form8" type="number" />
              </div>
              <div className="pages11">
                <label htmlFor="form9"> Дата выдачи*</label>
                <br />
                <input className="form9" type="date" />
              </div>
            </div>
            <label
              htmlFor="form12"
              style={{
                marginLeft: "10%",
                marginTop: "50px",
                marginBottom: "30px",
              }}
            >
              Адрес регистрации*
            </label>
            <div className="oyna101">
              <div className="pages11">
                <input
                  className="aform1"
                  placeholder="Страна"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform2"
                  placeholder="Город"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform3"
                  placeholder="Улица"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform4"
                  placeholder="Номер дома"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform5"
                  placeholder="Улица"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
              </div>
              <div className="pages11">
                <input
                  className="aform6"
                  placeholder="Квартира"
                  style={{ marginTop: "30px" }}
                  type="text"
                />
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
                  this.PostPerson();
                }}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>

        <h1 className="bigah1">Список сотрудников</h1>
        <div className="biga-pages">
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

          <Dropdown id="drop">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Занятие
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Добавите</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Добавите</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Добавите</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button
            id="btnlar1"
            onClick={() => {
              this.openModal();
            }}
          >
            + Добавить сотрудника
          </button>
        </div>
        <div id="tables">
          <div id="names">
            <p>ID</p>
            <p>Фамилия</p>
            <p>Имя</p>
            <p>Отчество</p>
            <p>
              Дата <br /> рождения
            </p>
            <p>
              Дата <br /> добавления
            </p>
            <p>Действие</p>
          </div>
          {this.state.data.map((item, key) => {
            if (key % 2 === 0) {
              return (
                <div id="inform2">
                  <div id="inform-p">
                    <p className="hyjkkl">{item.personid}</p>
                    <p>{item.personlastname}</p>
                    <p>{item.personfirstname}</p>
                    <p>{item.personmiddlename}</p>
                    <p>{item.dateofbirth.slice(0, 10)}</p>
                    <p>{item.syscreatedatutc.slice(0, 10)}</p>
                    <div id="iconci">
                      <img src={icon1} alt="" />
                      <img
                        src={icon2}
                        onClick={() => {
                          document.querySelector(".modal12").style =
                            "display:flex";
                          this.setState({ deleteData: item });
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div id="inform1">
                  <div id="inform-p">
                    <p>{item.personid}</p>
                    <p>{item.personlastname}</p>
                    <p>{item.personfirstname}</p>
                    <p>{item.personmiddlename}</p>
                    <p>{item.dateofbirth.slice(0, 10)}</p>
                    <p>{item.syscreatedatutc.slice(0, 10)}</p>
                    <div id="iconci">
                      <img src={icon1} alt="" />
                      <img
                        onClick={() => {
                          document.querySelector(".modal12").style =
                            "display:flex";
                          this.setState({ deleteData: item });
                        }}
                        src={icon2}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            }
          })}

          <div id="inform1">
            <div id="inform-p">
              {/* <p>1</p>
          <p>Марина</p>
          <p>Вероника</p>
          <p>Петровна</p>
          <p>20/03/1986</p>
          <p>Воспитатель</p>
          <p>15/07/2020</p>
          <div id='iconci'>
          <img src={icon1} alt=''/> 
          <img src={icon2} alt=''/>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
