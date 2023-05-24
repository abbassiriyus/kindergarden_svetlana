
import axios from "axios";
import React, { useState, useEffect,useCallback } from "react";
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
  function open() {
    document.querySelector('.modalSozdat').style = 'display: block'
    document.querySelector('.ybuyi').style = 'display: none;'
    document.querySelector('.text-center').style = 'display: none'
  }
  function close() {
    document.querySelector('.modalSozdat').style = 'display: none'
    document.querySelector('.ybuyi').style = 'display: block'
    document.querySelector('.text-center').style = 'display: block'
  }
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [legalRepRes, relationRes, childRes, excuseRes, employeeRes, personRes] = await Promise.all([
          axios.get(`${url}/Legal_Rep`),
          axios.get(`${url}/relation`),
          axios.get(`${url}/child`),
          axios.get(`${url}/excuse`),
          axios.get(`${url}/employee`),
          axios.get(`${url}/person`)
        ]);
  
        const filteredChildren = legalRepRes.data.filter(
          (child) => child.personid === 6
        );
        
        const tempBolas = [];
        const nol = [];
        for (let i = 0; i < relationRes.data.length; i++) {
          for (let j = 0; j < filteredChildren.length; j++) {
            if (relationRes.data[i].legalrepid === filteredChildren[j].legalrepid) {
              for (let e = 0; e < excuseRes.data.length; e++) {
                if (excuseRes.data[e].childid === relationRes.data[i].childid) {
                  tempBolas.push(excuseRes.data[e].datestart.slice(0, 10));
                  nol.push(excuseRes.data[e].childid);
                }
              }
            }
          }
        }
        console.log(nol);
        console.log(tempBolas);
        setExcuse(tempBolas);
        setRebenok(nol);
        setRebenoki(childRes.data);
        setallExcuse(excuseRes.data);
        setEmploy(employeeRes.data);
        setPerson(personRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
  }, [
    excuse,
    employ,
    person,
    allexcuse,
    rebenok,
    rebenok2,
    rebenok3,
    rebenoki,
  ]);
 
  const handleClickDay = useCallback(
    async (date) => {
      const d = date;
      const a = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
  
      const index = excuse.indexOf(a);
      if (index > -1) {
        document.querySelector(".BigModalChild").style = "display: flex;";
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
  function postdad (parameters) {
    var formData = new FormData();
  }


  return (
    <div className="The-Big">
      <div className="modalSozdat">
        <span className="clossedModal" onClick={() => close()}>X</span>
        <h4>Создать запись о пропуске занятий</h4>
        <br />
        <h4>Ребенок *</h4>
        <select className="selectDeti">
          <option>Маринин Миша</option>
          <option>Маринина Наташа</option>
        </select>
        <div className="datanachl">
          <div className="hashla">
            <h4>Дата начала *</h4>
            <input type='date' />
          </div>
          <div className="hashla">
            <h4>Дата окончания *</h4>
            <input type='date' />
          </div>
        </div>
        <h4>Часть дня *</h4>
        <div className="checkboxForm">
          <div className="chekked">
            <input type='checkbox' />
            <h5>Утро</h5>
          </div>
          <div className="chekked">
            <input type='checkbox' />
            <h5>После обеда</h5>
          </div>
          <div className="chekked">
            <input type='checkbox' />
            <h5>Весь день</h5>
          </div>
        </div>
        <h4>Причина *</h4>
        <select className="boleznS">
          <option>Болезнь</option>
          <option>Посещение врача</option>
          <option>Отпуск</option>
          <option>Семейные об-ва</option>
        </select>
        <button onClick={() => postdad()} className="btnu"><p>Создать</p></button>
      </div>
      <div className="BigModalChild">
        <h1>Loading.....</h1>
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
                          <h4 className="uu">{item3.datestart.slice(0,10)}</h4>
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
                                      Автор:{item5.personlastname}  {item5.personfirstname} {item5.personmiddlename}
                                    </p>
                                  );
                                }
                              });
                            }
                          })}
                          <br />
                          Дата:{item3.syschangedatutc}
                        </p>
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
        <h1 className="text-center">React Calendar</h1>
        <div className="calendar-container">
        <Calendar
          onClickDay={handleClickDay}
          onChange={setDate}
          value={date}
          tileContent={getTileContent}
        />
        </div>
        <div className="pulsDiv" onClick={() => open()}>
          <span>+</span>
        </div>
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span>
        {date.toDateString()}
      </p>
    </div>
  );
}
