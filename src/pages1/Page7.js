import React from "react";
import "./AllPages.css";
import img from "../img/image 37.png";
import axios from "axios";
import img2 from "../img/image 38.png";
import img3 from "../img/image 39.png";
import img4 from "../img/image 40.png";
import url from "../host";
import { useState,useEffect } from "react";
import imgUstz from '../img/image 34.png'
import imgTst from '../img/301-3011314_pe-success-icon-task-done-removebg-preview.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";



export default function Page7() {
  const [data, setData] = useState([]);
  const[month2, setMonth]=useState([])
  const[state, setState]=useState([])
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
  

  setState(childIds)

  
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  useEffect(() => { }, [
state
  ]);



  function openTest(id) {
    axios.get(`${url}/question`).then((res) => {
      var oy=[]
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].month===id) {
          oy.push(res.data[i])
        }  
      }
      setMonth(oy)
    });
    document.querySelector(".divTest").style = "display: block";
    document.querySelector(".GroupsBtn").style = "display: none";
    console.log(month2,"ishladi");
    console.log(id,"nima");
  }
  function closeTest() {
    document.querySelector(".divTest").style = "display: none";
    document.querySelector(".GroupsBtn").style = "display: block";
  }
  function formatDate(dateObj) {
    var year = dateObj.getFullYear()
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
    var day = ('0' + dateObj.getDate()).slice(-2)
    return year + '-' + month + '-' + day
  }
  async function gorupGet(id) {
    for await (let item of state) {
      var testData = new FormData()
      testData.append("testtitle", "yeahhhhhh")
      testData.append("childid", item)
      testData.append("questionid", id)
      testData.append("date", formatDate(new Date()))
      testData.append("score", 0)
      try {
        const response = await axios.post(`${url}/test`, testData)
        console.log(response.data)
        alert("worked")
      } catch (error) {
        console.log(error)
        alert("error")
      }
      await sleep(1000) // задержка между отправками запросов (в миллисекундах)
    }
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <div>
      <div className="GroupsBtn">
        <div className="groupp">
          <button onClick={() => openTest("январь")}>ЯНВАРЬ</button>
          <button onClick={() => openTest("февраль")}>ФЕВРАЛЬ</button>
          <button onClick={() => openTest("марта")}>МАРТ</button>
        </div>
        <div className="groupp">
          <button onClick={() => openTest("апрель")}>АПРЕЛЬ</button>
          <button onClick={() => openTest("мая")}>МАЙ</button>
          <button onClick={() => openTest("июнь")}>ИЮНЬ</button>
        </div>
        <div className="groupp">
          <button onClick={() => openTest("июль")}>ИЮЛЬ</button>
          <button onClick={() => openTest("Август")}>АВГУСТ</button>
          <button onClick={() => openTest("Сентябрь")}>СЕНТЯБРЬ</button>
        </div>
        <div className="groupp">
          <button onClick={() => openTest("Октябрь")}>ОКТЯБРЬ</button>
          <button onClick={() => openTest("ноябрь")}>НОЯБРЬ</button>
          <button onClick={() => openTest("Декабрь")}>ДЕКАБРЬ</button>
        </div>
      </div>
      <div className="divTest">
      <span  onClick={() => closeTest()}>X</span>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {month2.map((item)=>{
  return<SwiperSlide>  
        <div className="divTest2">
          <h2 className="ixx">
            {item.question}
          </h2>
          <div className="Test_09">
            <img src={`${url}/` + item.question_img} alt={`${url}/` + item.question_img}/>
            <div className="hashla">
              <h1>1</h1>
              <h1>2</h1>
              <h1>3</h1>
              <h1>4</h1>
            </div>
          </div>
        </div>
        <button className="Btn-Send" onClick={() => gorupGet(item.questionid)}>
          Отправить
        </button>
        </SwiperSlide>
        })}
      </Swiper>

      </div>

      <div className="successfull">
        <h1>Oтправлена!</h1>
        <img src={imgTst} />
      </div>
    </div>
  );
}
