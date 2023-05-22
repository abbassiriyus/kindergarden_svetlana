import React from "react";
import yangi from "../img/image 31.png";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AllPages2.css";
import img from "../img/free-icon-daughter-8229500 (2).png";
import img3 from "../img/free-icon-thermometer-1165508 1.png";
import axios from "axios";
import url from "../host";
export default function Page6() {
  const [date, setDate] = useState(new Date());
  const [excuse, setExcuse] = useState([]);
  const [rebenok, setRebenok] = useState([]);
  const [rebenok2, setRebenok2] = useState([]);
  const [rebenok3, setRebenok3] = useState([]);
  const [rebenoki, setRebenoki] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${url}/Legal_Rep`)
        .then((res) => {
          const filteredChildren = res.data.filter(
            (child) =>
              child.personid === parseInt(localStorage.getItem("personid"))
          );

          axios
          .get(`${url}/relation`)
          .then((res22) => {
            const tempBolas = [];
            const nol=[]
            for (let i = 0; i < res22.data.length; i++) {
              for (let j = 0; j < filteredChildren.length; j++) {
                if (
                  res22.data[i].legalrepid === filteredChildren[j].legalrepid
                ) {
                  axios
                  .get(`${url}/excuse`)
                  .then((res33)=>{
                    for (let e = 0; e < res33.data.length; e++) {
                 
                       if (res33.data[e].childid=== res22.data[i].childid) {
                        tempBolas.push(res33.data[e].datestart.slice(0,10));
                        nol.push(res33.data[e].childid);
                       }
                    }
                    setExcuse(tempBolas);
                    setRebenok(nol)
                  })
                  
                }
              }
            }
          });

        })
        .catch((err) => {
          console.log(err);
        });
        axios
        .get(`${url}/child`)
        .then((res99)=>{
          setRebenoki(res99.data)
        })

    };
    fetchData();
    
  }, []);
  useEffect(() => {
console.log(rebenok2);
console.log(rebenok3, "gkerkg");
console.log(rebenok);
console.log(rebenoki);
  }, [excuse, rebenok,rebenok2,rebenok3, rebenoki]);



  // function clickaday(date) {
  //   var d = date;
  //   var a = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
  //   for (let i = 0; i < excuse.length; i++) {
  //     if (a===excuse[i]) {
  //       document.querySelector(".BigModalChild").style = "display: flex;";  
  //       setRebenok2(excuse[i])
  //     } else {
  //  console.log("error");
  //     }
  //   }
  //   axios
  //   .get(`${url}/excuse`)
  //   .then((res) => {
  //       for (let i = 0; i < res.data.length; i++) {
  //         for (let j = 0; j < rebenok.length; j++) {
  //           for (let e = 0; e < rebenok2.length; e++) {
  //             if (res.data[i].childid===rebenok[j] && res.data[i].datestart.slice(0,10)===rebenok2[e]) {
  //               console.log("CIERMDIOGJRSI;GJRIUHJUITHJEIUHJEIUTHJTIHJTHIJHIJDIHJDIHJ");
  //             }else{
  //               console.log("NONONONOONON");
  //             }
              
  //           }
  //         }
  //       }
  //   })
  // }
  function clickaday(date) {
    const d = date;
    const a = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
    const index = excuse.indexOf(a);
    if (index > -1) {
        document.querySelector(".BigModalChild").style = "display: flex;";
        setRebenok2(excuse[index]);
        axios
        .get(`${url}/excuse`)
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < rebenok.length; j++) {
              for (let e = 0; e < rebenok2.length; e++) {
                if (res.data[i].childid === rebenok[j] && res.data[i].datestart.slice(0,10) === excuse[index]) {
                  console.log("CIERMDIOGJRSI;GJRIUHJUITHJEIUHJEIUTHJTIHJTHIJHIJDIHJDIHJ");
                  setRebenok3(res.data[i].childid)
                } else {
                  console.log("NONONONOONON");
                }
              }
            }
          }
        });
    } else {
        console.log("error");
    }
  }


  const getTileContent = ({ date, view }) => {
    var d = date;
    var a = `${d.getFullYear()}-0${d.getMonth() + 1}-${d.getDate()}`;
    for (let i = 0; i < excuse.length; i++) {
      if (a===excuse[i]) {
        return <img src={img3} alt={img3} />;
      } else {
      }
    }
  };
  function closeChildModal() {
    document.querySelector(".BigModalChild").style = "display: none;";
  }
  return (
    <div className="only_you">
      <div className="BigModalChild">
        <h1>{rebenok}</h1>
          {rebenoki.map((item2)=>{
            if (rebenok[0]===item2.childid) {
              return<div className="ModalChilds">
              <h4 className="ixk">
                Детали отсутствия 2023/01/24{" "}
                <span onClick={() => closeChildModal()}>X</span>
              </h4>
              <br />
              <h4 className="uu">Ребенок </h4>
              <div classname="childs">
                <img src={img} alt="" />
                <p>{item2.childlastname}</p>
              </div>
              <h4 className="uu">Дата</h4>
              <div className="mchj">
                <h4 className="uu">2023/05/17</h4> <h4 className="uu">Весь день</h4>
              </div>
              <h4 className="uu">Причина </h4>
              <p className="uu">Болезнь</p>
              <br />
              <p>
                Автор: Спицына Маргарита Николаевна
                <br />
                Дата: 2023/01/24 08:00
              </p>
            </div>
            }
            
          })}


      </div>

      <div className="calendar-container">
        <Calendar
          onClickDay={() => clickaday(date)}
          onChange={setDate}
          value={date}
          tileContent={getTileContent}
        />
      </div>
      <p className="text-center">
        <div>
  {excuse.map((item)=>(
    <div>
      <p>frwgehgeh</p>
    <h1>{item}</h1>
    </div>

  ))}
 </div>
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}
