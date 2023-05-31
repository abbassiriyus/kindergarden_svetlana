import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import img3 from "../img/free-icon-thermometer-1165508 1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AllPages.css";
import url from "../host";
import img from "../img/free-icon-daughter-8229500 (2).png";
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
  // function open() {
  //   document.querySelector(".modalSozdat").style = "display: block";
  //   document.querySelector(".ybuyi").style = "display: none;";
  //   document.querySelector(".text-center").style = "display: none";
  // }
  // function close() {
  //   document.querySelector(".modalSozdat").style = "display: none";
  //   document.querySelector(".ybuyi").style = "display: block";
  //   document.querySelector(".text-center").style = "display: block";
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          legalRepRes,
          relationRes,
          childRes,
          excuseRes,
          employeeRes,
          personRes,
        ] = await Promise.all([
          axios.get(`${url}/Legal_Rep`),
          axios.get(`${url}/relation`),
          axios.get(`${url}/child`),
          axios.get(`${url}/excuse`),
          axios.get(`${url}/employee`),
          axios.get(`${url}/person`),
        ]);

        const filteredChildren = legalRepRes.data.filter(
          (child) => child.personid === 2
        );

        const tempBolas = [];
        const nol = [];
        for (let i = 0; i < relationRes.data.length; i++) {
          for (let j = 0; j < filteredChildren.length; j++) {
            if (
              relationRes.data[i].legalrepid === filteredChildren[j].legalrepid
            ) {
              for (let e = 0; e < excuseRes.data.length; e++) {
                if (excuseRes.data[e].childid === relationRes.data[i].childid) {
                  tempBolas.push(excuseRes.data[e].datestart.slice(0, 10));
                  nol.push(excuseRes.data[e].childid);
                }
              }
            }
          }
        }
        // console.log(nol);
        // console.log(tempBolas);
        setExcuse(tempBolas);
        setRebenok(nol);
        setRebenoki(childRes.data);
        setallExcuse(excuseRes.data);
        setEmploy(employeeRes.data);
        setPerson(personRes.data);
        setDeti(childRes.data);
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



  const handleClickDay = useCallback(
    async (date) => {
      const d = date;
      const a = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;

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
          if (filteredData.length > 0) {
            setRebenok3(filteredData[0].childid);
          } else {
            console.log("Данные не найдены!!");
          }
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
    var a = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
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

  function simSim() {
    document.querySelector('.zafik_bigdiv2').style = 'display: block !important;'
    document.querySelector('.BigModalChild').style = 'display: none !important;'
    document.querySelector(".ybuyi").style = "display: none;";
    document.querySelector(".ModalChilds").style = "display: none;";
  }

  return (
    <div className="The-Big">
      <div className="zafik_bigdiv">
        <div className="zafik_div">
          <div className="zafik_minidiv">
            <h1 className="zafik_excuse_h1">Создать запись о пропуске занятий</h1>
            <div className="zafik_child_div">
              <h1 className="zafik_child_h1">Ребенок </h1>
              <select className="zafik_child_select">
                <option>example</option>
              </select>
            </div>
            <div className="zafik_data_div">
              <div className="zafik_data_minidiv1">
                <h1 className="zafik_data_h1">Дата начала</h1>
                <input className="zafik_data_input" type="date" />
              </div>
              <div className="zafik_data_minidiv1">
                <h1 className="zafik_data_h1">Дата окончания</h1>
                <input className="zafik_data_input" type="date" />
              </div>
            </div>

            <div className="zafik_naff">
              <h4>
                Часть дня *
              </h4>
              <select>
                <option>asd</option>
              </select>
            <h4>Причина *</h4>
            <select>
              <option>asd</option>
              <option>asd</option>
              <option>asd</option>
            </select>
            </div>
            <div className="btnnS">
              <button>Создать</button>
              <button onClick={() => closedChildModal()}>Отмена</button>
            </div>

          </div>
        </div>
      </div>





      <div className="zafik_bigdiv2">
        <div className="zafik_div">
          <div className="zafik_minidiv">
            <h1 className="zafik_excuse_h1">Создать запись о пропуске занятий</h1>
            <div className="zafik_child_div">
              <h1 className="zafik_child_h1">Ребенок </h1>
              <select className="zafik_child_select">
                <option>example</option>
              </select>
            </div>
            <div className="zafik_data_div">
              <div className="zafik_data_minidiv1">
                <h1 className="zafik_data_h1">Дата начала</h1>
                <input className="zafik_data_input" type="date" />
              </div>
              <div className="zafik_data_minidiv1">
                <h1 className="zafik_data_h1">Дата окончания</h1>
                <input className="zafik_data_input" type="date" />
              </div>
            </div>

            <div className="zafik_naff">
              <h4>
                Часть дня *
              </h4>
              <select>
                <option>asd</option>
              </select>
            <h4>Причина *</h4>
            <select>
              <option>asd</option>
              <option>asd</option>
              <option>asd</option>
            </select>
            </div>
            <div className="btnnS">
              <button>Создать</button>
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
                          Дата:{item3.syschangedatutc}
                        </p>
                        <div className="btn_Groupo">
                          <button onClick={() => simSim()}>Редактировать</button>
                          <button >Удалить</button>
                        </div>
                      </>
                    );
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
