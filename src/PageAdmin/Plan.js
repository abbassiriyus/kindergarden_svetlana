import React, { useEffect, useState } from "react";
import icon1 from "../img/free-icon-edit-6488637 (2).png";
import icon2 from "../img/free-icon-delete-5396993.png";
import "./css/Plan.css";
import url from "../host";
import axios from "axios";

export default function Plan() {
  const [data, setData] = useState([]);

  function trf() {
    axios.get(`${url}/syllabu`).then((res) => {
      axios.get(`${url}/subject`).then((res2) => {
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res2.data.length; j++) {
            if (res.data[i].subjectid == res2.data[j].subjectid) {
              res.data[i].subjectname = res2.data[j].subjectname;
            }
          }
        }
        setData(res.data);
      });
    });
    console.log(data);
  }
  useEffect(() => {
    trf();
    console.log(data.subjectname, "sgfuksdhjksh");
  }, []);

  return (
    <div>
      <div className="headTools">
        <div>
          <select>
            <option>Группа</option>
          </select>
        </div>
        <div>
          <input type="date" />
        </div>
      </div>
      {/* <h1 className='bigah1'></h1> */}
      <div className="biga-pages"></div>
      <div id="tables">
        <div id="names">
          <p>ЯНВАРЬ 2023</p>
        </div>
        <div id="inform1">
          <div id="inform-p">
            <p>Неделя</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>

        <div id="inform1">
          <div id="inform-p1">
            <p>Тема</p>
            <p>
              Зимние <br /> забавы{" "}
            </p>
            <p>Зимний лес</p>
            <p>Горы</p>
            <p>Животные</p>
            <div id="iconci">
              <img src={icon1} alt="" />
              <img src={icon2} alt="" />
            </div>
          </div>
        </div>

        {data.map((item) => {
          return (
            <div id="inform1">
              <div id="inform-p">
                <p>{item.subjectname}</p>
                {/* <p>{item.subjectid}</p> */}
                <p>{item.winterparty}</p>
                <p>{item.winterles}</p>
                <p>{item.mountain}</p>
                <p>{item.animal}</p>
                <div id="iconci">
                  <img src={icon1} alt="" />
                  <img src={icon2} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
