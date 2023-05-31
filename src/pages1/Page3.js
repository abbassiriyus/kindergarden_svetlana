import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Img002 from "../img/image 34.png";
import Img001 from "../img/free-icon-daughter-8229500 (1).png";
import axios from "axios";
import url from "../host";
export default function Page1() {
  const [up, setup] = useState([]);
  const [child, setChild] = useState([]);
  const [selectedKid, setSelectedKid] = useState([]);
   const [deti, setdeti] = useState([]);
   const [relation, setRelation] = useState([]);
   const [legalrep, setLegalrep] = useState([]);
   const [person, setPerson] = useState([]);
  const handleKidClick = (chilid) => {
    setSelectedKid(chilid);
    var nn = document.querySelector(".Cards-Page1-1");
    var ff = document.querySelector(".Cards-Page1");
    ff.style = "display: flex;";
    nn.style = "display: none;";
  };
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${url}/group_emp`)
        .then((res) => {
          const filteredGroup = res.data.filter(
            (group) =>
              group.employeeid === parseInt(localStorage.getItem("employ"))
          );
          axios.get(`${url}/group`).then((res2) => {
            for (let i = 0; i < res2.data.length; i++) {
              for (let j = 0; j < filteredGroup.length; j++) {
                if (res2.data[i].groupid === filteredGroup[j].groupid) {
                  filteredGroup[j].groupname = res2.data[i].groupname;
                }
              }
            }
            setdeti(res2.data)
            setup(filteredGroup);
          });
          axios.get(`${url}/child`).then((res3) => {
            setChild(res3.data);
          });
          axios.get(`${url}/relation`).then((res55) => {
            setRelation(res55.data);
          });
          axios.get(`${url}/Legal_Rep`).then((res66) => {
            setLegalrep(res66.data);
          });
          axios.get(`${url}/person`).then((res77) => {
            setPerson(res77.data);
          });

        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  useEffect(() => {
    console.log(up);
    console.log(child);
  }, [child, up]);
  return (
    <div className="The-Big" id="useirud">
      <div className="Cards-Page1-1">
        {up.map((element) => (
          <Accordion className="Accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="ush">
                <img src={Img002} alt="" />
                <h1>{element.groupname}</h1>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="typogRaf">
                {child.map((item) => {
                  if (element.groupid === item.groupid) {
                    return (
                      <div
                        onClick={() => handleKidClick(item)}
                        className="kids-baby"
                      >
                        <div className="baby">
                          <img src={Img001} alt="" />
                          <h2>{item.childfirstname}</h2>
                        </div>
                      </div>
                    );
                  }
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      {selectedKid && (
        <div className="Cards-Page1">
          <div className="CardProfil-Page1">
            <img src={Img001} alt="" />
            <br />
            <h4>{selectedKid.name}</h4>
          </div>
          <div className="Card-Page1">
            <div className="Input-grup">
              <h4>Фамилия</h4>
              <p>{selectedKid.childlastname}</p>
            </div>
            <div className="Input-grup">
              <h4>Имя</h4>
              <p>{selectedKid.childfirstname}</p>
            </div>
            <div className="Input-grup">
              <h4>Группа</h4>
              {deti.map((item)=>{
                if (selectedKid.groupid===item.groupid) {
                  return<p>{item.groupname}</p>
                }
              })}
             
            </div>
            <div className="Input-grup">
              <h4>Дата рождения</h4>
              <p>{selectedKid.dateofbirth}</p>
            </div>
            <div className="Input-grup">
              <h4>Представители</h4>
              <ul>
              {relation.map((item3) => {
                            if (selectedKid.childid === item3.childid) {
                              return (
                                <li>
                                  {" "}
                                  {item3.status}
                                  {legalrep.map((item4) => {
                                    if (item3.legalrepid === item4.legalrepid) {
                                      return (
                                        <>
                                          {person.map((item5) => {
                                            if (
                                              item4.personid === item5.personid
                                            ) {
                                              return (
                                                <span>
                                                  {" "}
                                                  {item5.personlastname}{" "}
                                                  {item5.personfirstname}{" "}
                                                  {item5.personmiddlename}{" "}
                                                  {item5.phone}
                                                </span>
                                              );
                                            }
                                          })}
                                        </>
                                      );
                                    }
                                  })}
                                </li>
                              );
                            }
                          })}
              </ul>
            </div>
            <div className="Input-grup">
                        <h4>Дополнительно</h4>
                        <p>{selectedKid.comment}</p>
                      </div>
                      <div>
                        <a href="/page6"> <h1 className="zafik_h1">Записи о пропусках></h1></a>
                        </div>
                        <div>
                          <h1 className="zafik_h2">Карта индивидуального развития </h1>
                        </div>
          </div>
        </div>
      )}
    </div>
  );
}
