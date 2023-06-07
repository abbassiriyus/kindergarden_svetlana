import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./css/Statics.css";
import hlo from "../img/Group 182 (2).png";
import axios from "axios";
import url from "../host";
import icon1 from "../img/free-icon-delete-5396993.png";
// import Img001 from "../img/free-icon-daughter-8229500 (1).png";
import icon2 from "../img/free-icon-information-932010.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [group, setGroup] = useState([]);
  const [data, setData] = useState([]);
  const [child, setChild] = useState([]);
  const [relation, setRelation] = useState([]);
  const [legalrep, setLegalrep] = useState([]);
  const [person, setPerson] = useState([]);
  // const [childd, setChildd] = useState([])
  useEffect(() => {
    axios.get(`${url}/group`).then((res) => {
      setGroup(res.data);
    });
    axios.get(`${url}/child`).then((res) => {
      setData(res.data);
    });
    axios.get(`${url}/relation`).then(res0=>{
      setRelation(res0.data)
    })
    axios.get(`${url}/Legal_Rep`).then(res1=>{
      setLegalrep(res1.data)
    })
    axios.get(`${url}/person`).then(res2=>{
      setPerson(res2.data)
    })
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function modalOpen(key) {
    axios.get(`${url}/child/${key}`).then(res => {
      axios.get(`${url}/group`).then(res2 => {
        for (let i = 0; i < res.data.length; i++) {
          for (let j = 0; j < res2.data.length; j++) {
            if (res.data[i].groupid === res2.data[j].groupid) {
              res.data[i].groupname = res2.data[j].groupname
            }
          }
        }
        setChild(res.data)
      })
    })

    document.querySelector('.Cards-Pagesstatic2').style = 'display: flex;'
  }


  function modalClose() {
    document.querySelector('.Cards-Pagesstatic2').style = 'display: none;'
  }

  return (
    <div className="KotaMui">
      <div className="HeadTabs">
        <h2>Статистика</h2>
        <button>
          <img src={hlo} alt="" /> Экспортировать
        </button>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Дети" {...a11yProps(0)} />
            <Tab label="Посещаемость" {...a11yProps(1)} />
            <Tab label="Занятия" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="MuiTabs">
            <div className="SlctDvs">
              <select>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
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
              <select>
                {group.map((item) => {
                  return <option>{item.groupname}</option>;
                })}
              </select>
            </div>
            <div id='tables'>
              <div id='names'>
                <p>ID</p>
                <p>Фамилия</p>
                <p>Имя</p>
                <p>Отчество</p>
                <p>Дата <br /> рождения</p>
                <p>Пол</p>
                <p>Дата <br /> добавления</p>
                <p>Действие</p>
              </div>
              <div id='inform1'>
                {
                  data.map(item => {
                    return (
                      <div id='inform-p'>
                        <p>{item.childid}</p>
                        <p>{item.childlastname}</p>
                        <p>{item.childfirstname}</p>
                        <p>{item.childmiddlename}</p>
                        <p>{item.dateofbirth.slice(0, 10)}</p>
                        <p>{item.gender}</p>
                        <p>{item.syscreatedatutc.slice(0, 10)}</p>
                        <div id='iconci' onClick={() => modalOpen(item.childid)}>
                          <img src={icon2} alt='' />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="Cards-Pagesstatic2">
                {child.map(item => {
                  return (
                    <div className="Cards-Pagesstatic">
                      <span className="ikx" onClick={() => modalClose()}>X</span>
                      <div className="Cards-Page1">
                        <div className="CardProfil-Page1">
                          <br />
                          <h4>{item.childlastname}</h4>
                        </div>
                        <div className="Card-Page1">
                          <div className="Input-grup">
                            <h4>Фамилия</h4>
                            <p>{item.childlastname}</p>
                          </div>
                          <div className="Input-grup">
                            <h4>Имя</h4>
                            <p>{item.childfirstname}</p>
                          </div>
                          <div className="Input-grup">
                            <h4>Группа</h4>
                            <p>{item.groupname}</p>
                          </div>
                          <div className="Input-grup">
                            <h4>Дата рождения</h4>
                            <p>{item.dateofbirth}</p>
                          </div>
                          <div className="Input-grup">
                            <h4>Представители</h4>
                            {relation.map((item2)=>{
                              if (item.childid===item2.childid) {
                                return<>{legalrep.map((item3)=>{
                                  if (item2.legalrepid===item3.legalrepid) {
                                    return<>{person.map((item4)=>{
                                      if (item3.personid===item4.personid) {
                                        return<><p>{item4.phone} {item4.personlastname} {item4.personfirstname} {item4.personmiddlename}</p></>
                                      }
                                    })}</>
                                    
                                  }
                                })}</>
                                
                              }
                            })}
                          </div>
                          <div className="Input-grup">
                            <h4>Дополнительно</h4>
                            <p>{item.comment}</p>
                          </div>
                          <div>
                            <a href="/page6"> <h1 className="zafik_h1">Записи о пропусках</h1></a>
                          </div>
                          <div>
                            <h1 className="zafik_h2">Карта индивидуального развития </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
                }
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="MuiTabs">
            <div className="SlctDvs">
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
              <select>
                {group.map((item) => {
                  return <option>{item.groupname}</option>;
                })}
              </select>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="MuiTabs">
            <div className="SlctDvs">
              <select>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
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
              <select>
                {group.map((item) => {
                  return <option>{item.groupname}</option>;
                })}
              </select>
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
